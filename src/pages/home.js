import React from 'react';
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <div className="text-center mt-24">
      <h1 className="text-4xl font-bold mb-6">Welcome to THUGKEED TECH UNLIMITED PANEL</h1>
      <Link to="/login" className="text-blue-600 hover:underline">Login / Signup</Link>
    </div>
  );
    }
