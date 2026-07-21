import React, { useState } from 'react';
import { Clock, Sun, Moon, Calendar, Zap, CheckCircle2 } from 'lucide-react';

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function DaypartingTool() {
  const [selectedDay, setSelectedDay] = useState('Mon');

  // Heatmap helper function
  const getEfficiencyColor = (hour) => {
    if (hour >= 9 && hour <= 14) return 'bg-emerald-500 text-slate-950 font-bold'; // Peak CVR
    if (hour >= 18 && hour <= 21) return 'bg-emerald-400 text-slate-950 font-bold'; // Secondary Peak
    if (hour >= 1 && hour <= 5) return 'bg-rose-900 text-rose-200 font-bold'; // Off-Peak Waste
    return 'bg-slate-800 text-slate-300';
  };

  return (
    <div className="space-y-6 text-slate-900">
      
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-400" />
            <span>PPC Dayparting Intelligence Hub</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">Analyzes Sponsored Products hourly campaign performance to build automated bid schedules.</p>
        </div>

        <div className="flex items-center gap-2">
          {DAYS.map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                selectedDay === day ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Hourly Performance Heatmap */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
          <span>Hourly Conversion Heatmap ({selectedDay})</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-500" /> Peak CVR (+25% Bid)</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-rose-900" /> Off-Peak (-40% Bid)</span>
          </div>
        </div>

        {/* 24 Hour Grid */}
        <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
          {HOURS.map(h => (
            <div key={h} className={`p-3 rounded-xl text-center text-xs border border-slate-700/50 ${getEfficiencyColor(h)}`}>
              <div className="text-[10px] opacity-75">{h < 10 ? `0${h}:00` : `${h}:00`}</div>
              <div className="text-sm font-extrabold mt-1">
                {h >= 9 && h <= 14 ? '22.4%' : h >= 1 && h <= 5 ? '2.1%' : '14.5%'}
              </div>
              <div className="text-[9px] uppercase mt-0.5 opacity-80">CVR</div>
            </div>
          ))}
        </div>
      </div>

      {/* Automated Recommendation Box */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
          <Zap className="w-5 h-5 text-emerald-500" />
          <span>Recommended Dayparting Schedule</span>
        </h4>
        <div className="space-y-2 text-xs font-medium text-slate-700">
          <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-200">
            <span><strong>Peak Hours (09:00 - 14:00 EST):</strong> Conversion rate spikes to 22.4%.</span>
            <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 font-extrabold">+25% Top of Search Modifier</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-200">
            <span><strong>Off-Peak Waste Hours (01:00 - 05:00 EST):</strong> High click drop-off with 2.1% CVR.</span>
            <span className="px-2.5 py-1 rounded bg-rose-100 text-rose-900 font-extrabold">-40% Base Bid Reduction</span>
          </div>
        </div>
      </div>

    </div>
  );
}
