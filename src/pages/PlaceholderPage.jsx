import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';

export default function PlaceholderPage({ title = 'Coming Soon' }) {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Clock className="w-8 h-8 text-emerald-400" />
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-slate-600 text-base mb-8">
          This page content is updated regularly by Affan Mughal and team. For any immediate inquiries or custom PPC auditing requests, please schedule a call.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-900 font-bold text-sm hover:bg-slate-50 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/book-call"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow-md"
          >
            <span>Book Strategy Call</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
