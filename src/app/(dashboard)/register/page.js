"use client"; 

import { useState } from 'react';
import AuthForm from '../../components/AuthForm';

export default function Register() {
  const [error, setError] = useState(null);

  const handleRegister = async (email, password) => {
    try {
      // Call your API for register
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Registration failed');
      const data = await response.json();
      // Handle successful registration (send verification, redirect, etc.)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <AuthForm action={handleRegister} title="Register" error={error} />
    </div>
  );
}
