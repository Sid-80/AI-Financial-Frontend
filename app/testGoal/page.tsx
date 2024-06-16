"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const GoalPlanningPage = () => {
    const accessToken = useSelector((state) => state.auth.accessToken);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [goalData, setGoalData] = useState({
        goalName: '',
        goalAmount: 0,
        timeHorizon: 0,
        currentSavings: 0,
        monthlyContribution: 0,
        expectedRateOfReturn: 0,
        inflationRate: 0,
    });
    const [goalId, setGoalId] = useState('');
    const [goals, setGoals] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setGoalData({ ...goalData, [name]: value });
      };

    const createGoal = async () => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/goals`, goalData, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            setResponse(res.data);
        } catch (err) {
            setError(err.message || 'Something went wrong');
        }
    };

    const getGoals = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/goals`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            setGoals(res.data.data);
        } catch (err) {
            setError(err.message || 'Something went wrong');
        }
    };

    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>
            <h1>Goal Planning</h1>
            <label>
                Goal Name:
                <input type="text" name="goalName" value={goalData.goalName} onChange={handleChange} />
            </label>
            <label>
                Goal Amount:
                <input type="number" name="goalAmount" value={goalData.goalAmount} onChange={handleChange} />
            </label>
            <label>
                Time Horizon:
                <input type="number" name="timeHorizon" value={goalData.timeHorizon} onChange={handleChange} />
            </label>
            <label>
                Current Savings:
                <input type="number" name="currentSavings" value={goalData.currentSavings} onChange={handleChange} />
            </label>
            <label>
                Monthly Contribution:
                <input type="number" name="monthlyContribution" value={goalData.monthlyContribution} onChange={handleChange} />
            </label>
            <label>
                Expected Rate of Return:
                <input type="number" name="expectedRateOfReturn" value={goalData.expectedRateOfReturn} onChange={handleChange} />
            </label>
            <label>
                Inflation Rate:
                <input type="number" name="inflationRate" value={goalData.inflationRate} onChange={handleChange} />
            </label>

            <button onClick={createGoal}>Create Goal</button>
            <button onClick={getGoals}>Get Goals</button>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {goals.length > 0 && (
                <ul>
                    {goals.map((goal) => (
                        <li key={goal._id}>{goal.goalName}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GoalPlanningPage;
