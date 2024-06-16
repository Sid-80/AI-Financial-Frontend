"use client"
// GetGoalByIdPage.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const GetGoalByIdPage = () => {
  const [goalId, setGoalId] = useState('');
  const [goalData, setGoalData] = useState(null);
  const [error, setError] = useState(null);

  const accessToken = useSelector((state) => state.auth.accessToken);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/goals/${goalId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
      const data = await res.json();

      if (res.ok) {
        setGoalData(data);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>

      <h1>Get Goal By ID</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Goal ID:
          <input type="text" value={goalId} onChange={(e) => setGoalId(e.target.value)} />
        </label>
        <button type="submit">Get Goal</button>
      </form>
      {goalData && (
        <div>
          <h2>Goal Data:</h2>
          <pre>{JSON.stringify(goalData, null, 2)}</pre>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default GetGoalByIdPage;
