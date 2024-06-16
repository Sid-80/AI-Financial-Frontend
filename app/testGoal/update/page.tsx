"use client"
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UpdateGoalPage = () => {
  const [goalId, setGoalId] = useState('');
  const [goalData, setGoalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  
  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/goals/${goalId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updatedData),
      });
      const data = await res.json();

      if (res.ok) {
        setGoalData(data);
      } else {
        throw new Error(data.message || 'Failed to update goal');
      }
    } catch (err) {
      setError(err.message || 'Failed to update goal');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <h1>Update Goal</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Goal ID:
          <input type="text" value={goalId} onChange={(e) => setGoalId(e.target.value)} />
        </label>
        <label>
          Goal Name:
          <input type="text" name="goalName" onChange={handleChange} />
        </label>
        <label>
          Goal Amount:
          <input type="number" name="goalAmount" onChange={handleChange} />
        </label>
        {/* Add other fields for updating goal */}
        <button type="submit" disabled={loading}>Update Goal</button>
      </form>
      {loading && <p>Loading...</p>}
      {goalData && (
        <div>
          <h2>Updated Goal Data:</h2>
          <pre>{JSON.stringify(goalData, null, 2)}</pre>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default UpdateGoalPage;
