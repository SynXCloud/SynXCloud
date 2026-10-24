// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-white flex items-center justify-center pt-24 px-4 text-center">
      <div className="max-w-md">
        <div className="text-8xl font-black text-indigo-500 mb-4 tracking-tighter">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          The requested system route does not exist or has been migrated. Return to our homepage to continue exploring our architecture practices.
        </p>
        <Link 
          to="/"
          className="pill-btn inline-flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
