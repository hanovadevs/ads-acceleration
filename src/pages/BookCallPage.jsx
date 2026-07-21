import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, ShieldCheck, User, Globe, DollarSign, Target } from 'lucide-react';

export default function BookCallPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    storeUrl: '',
    revenue: '$50k - $100k / mo',
    targetGoal: '',
    source: 'LinkedIn',
  });
  const [selectedSlot, setSelectedSlot] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableSlots = [
    'Tomorrow at 10:00 AM (EST)',
    'Tomorrow at 2:00 PM (EST)',
    'Thursday at 11:30 AM (EST)',
    'Thursday at 4:00 PM (EST)',
    'Friday at 1:00 PM (EST)',
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep1 = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.storeUrl) {
      alert('Please fill out all required fields.');
      return;
    }
    setStep(2);
  };

  const handleConfirmBooking = () => {
    if (!selectedSlot) {
      alert('Please select a time slot for your meeting.');
      return;
    }
    setStep(3);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-4">
            🚀 NEXT LEVEL GROWTH
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ready to Scale Your Amazon Brand?
          </h1>
          <p className="mt-4 text-lg text-slate-600 font-normal">
            Complete the steps below — fill out your details and lock in your meeting slot to confirm your strategy session with Affan Mughal.
          </p>
        </div>

        {/* Step Indicator Bar */}
        <div className="flex items-center justify-between mb-10 max-w-2xl mx-auto border-b border-slate-200 pb-4">
          <div className={`flex items-center gap-2 text-sm font-bold ${step >= 1 ? 'text-slate-900' : 'text-slate-400'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-200'}`}>1</span>
            <span>Your Details</span>
          </div>
          <div className="h-0.5 w-12 bg-slate-200" />
          <div className={`flex items-center gap-2 text-sm font-bold ${step >= 2 ? 'text-slate-900' : 'text-slate-400'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-slate-900 text-white' : 'bg-slate-200'}`}>2</span>
            <span>Pick Time Slot</span>
          </div>
          <div className="h-0.5 w-12 bg-slate-200" />
          <div className={`flex items-center gap-2 text-sm font-bold ${step === 3 ? 'text-emerald-600' : 'text-slate-400'}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${step === 3 ? 'bg-emerald-500 text-slate-950' : 'bg-slate-200'}`}>3</span>
            <span>Confirmed</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          
          {step === 1 && (
            <form onSubmit={handleNextStep1} className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Step 1: Fill in Your Brand Details</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@yourbrand.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Amazon Store or Website URL *</label>
                <input
                  type="url"
                  name="storeUrl"
                  required
                  placeholder="https://amazon.com/shops/yourbrand"
                  value={formData.storeUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Monthly Revenue</label>
                  <select
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="Under $20k / mo">Under $20k / mo</option>
                    <option value="$20k - $50k / mo">$20k - $50k / mo</option>
                    <option value="$50k - $100k / mo">$50k - $100k / mo</option>
                    <option value="$100k - $250k / mo">$100k - $250k / mo</option>
                    <option value="$250k+ / mo">$250k+ / mo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Where did you hear about us?</label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="MDS Community">MDS Seller Community</option>
                    <option value="Free Tool Suite">Free Tool Suite</option>
                    <option value="Referral">Client Referral</option>
                    <option value="Other">Search / Google</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">What do you hope to achieve by the end of the call?</label>
                <textarea
                  name="targetGoal"
                  rows={3}
                  placeholder="e.g. Cut ACOS from 35% to 20%, scale top 5 ASINs, fix keyword cannibalization..."
                  value={formData.targetGoal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-base transition-colors shadow-md cursor-pointer"
                >
                  Next: Pick Your Meeting Slot →
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Step 2: Pick Your Meeting Slot</h2>
              <p className="text-slate-600 text-sm mb-6">
                Select a time slot for your 45-minute strategy session with Affan Mughal.
              </p>

              <div className="space-y-3">
                {availableSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSlot(slot)}
                    className={`w-full p-4 rounded-2xl border text-left font-bold text-sm transition-all flex items-center justify-between cursor-pointer ${
                      selectedSlot === slot
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Clock className={`w-4 h-4 ${selectedSlot === slot ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span>{slot}</span>
                    </div>
                    {selectedSlot === slot && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-6 flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 py-4 rounded-full bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  onClick={handleConfirmBooking}
                  className="w-2/3 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base transition-colors shadow-md cursor-pointer"
                >
                  Confirm & Submit Strategy Call
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">Strategy Call Confirmed!</h2>
              <p className="text-slate-600 text-base max-w-md mx-auto">
                Thank you, <strong>{formData.firstName}</strong>. Your session is scheduled for:
              </p>
              <div className="inline-block px-6 py-3 rounded-2xl bg-slate-900 text-emerald-400 font-extrabold text-base border border-slate-800">
                {selectedSlot}
              </div>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                A calendar invitation with Google Meet / Zoom link has been sent to <strong>{formData.email}</strong>. Affan Mughal will review your store audit before the call.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
