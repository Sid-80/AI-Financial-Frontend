"use client";
// YourComponent.js
import React from 'react';
import { useSelector } from 'react-redux';

const YourComponent = () => {
  const id = useSelector((state) => state.auth.id);
  const email = useSelector((state) => state.auth.email);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const refreshToken = useSelector((state) => state.auth.refreshToken);
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div>
      {isAuth ? (
        <div>
          <h1>email, {email}</h1>
          <h1>id, {id}</h1>
          <p>Access Token: {accessToken}</p>
          <p>Refresh Token: {refreshToken}</p>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default YourComponent;
