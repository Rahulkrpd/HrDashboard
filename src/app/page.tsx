'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { useAppContext } from '@/context/AppContext';


export default function Home() {
  const router = useRouter();
  const { email, setEmail,  setData } = useAppContext();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to sign in");

      const responseData = await response.json();
      setData(responseData);

      if (responseData.teamData) {
        if (typeof window !== "undefined") {
          localStorage.setItem("teamData", JSON.stringify(responseData.teamData));
        }
        router.push('/dashboard/team-leader');
      } else {
        localStorage.setItem("allData", JSON.stringify(responseData.allData));


        router.push('/dashboard/hr');
      }
    } catch (error) {
      setErrorMessage("Sign-in failed. Please try again.");
      console.error(error)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-950 p-6 rounded-lg shadow-md w-full max-w-xs">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleEmail}
              value={email || ''}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 text-black border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
