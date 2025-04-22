"use client"; 

import { useState } from 'react';
import AuthForm from '../../components/AuthForm';

export default function Login() {
  const [error, setError] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      // Call your API for login
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      // Handle successful login (store token, redirect, etc.)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <AuthForm action={handleLogin} title="Login" error={error} />
    </div>
  );
}
