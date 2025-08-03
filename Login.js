import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="p-6 bg-gray-900 rounded-xl shadow-xl w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-white"
          />
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
    }
