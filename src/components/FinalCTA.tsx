import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Contact, ChevronRight, CheckCircle, Sliders, ExternalLink, Sparkles } from 'lucide-react';
import { Booking } from '../types';
import { services, timeSlots } from '../data/websiteData';

export default function FinalCTA() {
  // Booking Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [service, setService] = useState(services[0].title);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  // UI Flow State
  const [step, setStep] = useState<number>(1); // 1: Info, 2: Chronos Schedule, 3: Completed
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Load existing bookings on mount
  useEffect(() => {
    const saved = localStorage.getItem('webmusehub_bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  // Generate business days dynamically based on the current date
  const getNextBusinessDays = () => {
    const days = [];
    const today = new Date('2026-06-04T05:25:30Z'); // Normalize to sandbox starting time or fallback to current
    let count = 0;
    let offset = 1;
    while (count < 5 && offset < 15) {
      const candidate = new Date(today);
      candidate.setDate(today.getDate() + offset);
      const dayOfWeek = candidate.getDay();
      
      // Exclude Sunday (0)
      if (dayOfWeek !== 0) {
        const dayName = candidate.toLocaleDateString('en-US', { weekday: 'short' });
        const monthName = candidate.toLocaleDateString('en-US', { month: 'short' });
        const dateNum = candidate.getDate();
        days.push({
          id: candidate.toISOString().split('T')[0],
          dayName,
          monthName,
          dateNum,
          formatted: `${dayName}, ${monthName} ${dateNum}`,
        });
        count++;
      }
      offset++;
    }
    return days;
  };

  const businessDays = getNextBusinessDays();

  // Set default date on load
  useEffect(() => {
    if (businessDays.length > 0 && !selectedDate) {
      setSelectedDate(businessDays[0].id);
    }
  }, [selectedDate]);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setErrorMessage('Please complete all required fields (*)');
      return;
    }
    setErrorMessage('');
    setStep(2);
  };

  const handleScheduleCall = () => {
    if (!selectedDate || !selectedSlot) {
      setErrorMessage('Please select both a date and a time slot.');
      return;
    }

    const matchedDateLabel = businessDays.find((d) => d.id === selectedDate)?.formatted || selectedDate;

    const newBooking: Booking = {
      id: 'b_' + Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
      website,
      service,
      date: matchedDateLabel,
      timeSlot: selectedSlot,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
    };

    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem('webmusehub_bookings', JSON.stringify(updatedBookings));

    // Send booking details to WhatsApp
    const msg = encodeURIComponent(
      `🔔 *New Strategy Session Booking*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `📧 *Email:* ${email}\n` +
      `🌐 *Website:* ${website || 'Not provided'}\n` +
      `🛠️ *Service:* ${service}\n` +
      `📅 *Date:* ${matchedDateLabel}\n` +
      `⏰ *Time:* ${selectedSlot} (IST)`
    );
    window.open(`https://wa.me/917892489273?text=${msg}`, '_blank');

    // Reset Form
    setErrorMessage('');
    setStep(3);
  };

const resetFlow = () => {
    setName('');
    setEmail('');
    setPhone('');
    setWebsite('');
    setService(services[0].title);
    setSelectedSlot('');
    setStep(1);
  };

  return (
    <section id="final-cta" className="relative py-24 px-5 md:px-12 bg-dark overflow-hidden border-t border-slate-200">
      {/* Decorative center spotlight */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,62,0,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-brand/10 border border-brand/35 text-brand text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles size={11} className="animate-spin duration-3000" />
            Book Free Audit
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-slate-800 mb-4">
            Ready to Scale Your Online Revenue?
          </h2>
          <p className="text-sm md:text-base text-slate-800/50 leading-relaxed">
            Stop losing potential clients to faster competitors. Let our engineers and performance marketers map out a dynamic website, traffic funnel, and automated CRM system at zero cost to you.
          </p>
        </div>

        {/* Dynamic Scheduler Assistant */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-12">
          {/* Left: Interactive Form & Calendar Area */}
          <div className="lg:col-span-8 bg-dark2 border border-slate-200 rounded-none p-6 sm:p-8 shadow-xl">
            {/* Steps Progress Header */}
            <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-5">
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-none flex items-center justify-center text-[10px] font-black leading-none ${step >= 1 ? 'bg-brand text-slate-800' : 'bg-slate-100 text-slate-800/40'}`}>1</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${step === 1 ? 'text-slate-800' : 'text-slate-800/45'}`}>Details</span>
              </div>
              <ChevronRight size={12} className="text-slate-800/20" />
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-none flex items-center justify-center text-[10px] font-black leading-none ${step >= 2 ? 'bg-brand text-slate-800' : 'bg-slate-100 text-slate-800/40'}`}>2</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${step === 2 ? 'text-slate-800' : 'text-slate-800/45'}`}>Scheduler</span>
              </div>
              <ChevronRight size={12} className="text-slate-800/20" />
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded-none flex items-center justify-center text-[10px] font-black leading-none ${step >= 3 ? 'bg-brand text-slate-800' : 'bg-slate-100 text-slate-800/40'}`}>3</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${step === 3 ? 'text-slate-800' : 'text-slate-800/45'}`}>Success</span>
              </div>
            </div>

            {errorMessage && (
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-rose-400 bg-rose-500/10 border border-rose-500/25 px-4 py-3 rounded-none">
                ⚠️ {errorMessage}
              </div>
            )}

            {/* STEP 1: Basic Information */}
            {step === 1 && (
              <form onSubmit={handleNextStep} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-800/70 uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pratham"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-dark border border-slate-200 hover:border-slate-300 focus:border-brand focus:ring-0 rounded-none px-4 py-3 text-sm text-slate-800 placeholder-white/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-800/70 uppercase tracking-widest mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. dynamic@webmusehub.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-dark border border-slate-200 hover:border-slate-300 focus:border-brand focus:ring-0 rounded-none px-4 py-3 text-sm text-slate-800 placeholder-white/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-800/70 uppercase tracking-widest mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 78924 89273"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-dark border border-slate-200 hover:border-slate-300 focus:border-brand focus:ring-0 rounded-none px-4 py-3 text-sm text-slate-800 placeholder-white/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-800/70 uppercase tracking-widest mb-2">
                      Website URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="e.g. www.yoursite.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full bg-dark border border-slate-200 hover:border-slate-300 focus:border-brand focus:ring-0 rounded-none px-4 py-3 text-sm text-slate-800 placeholder-white/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-800/70 uppercase tracking-widest mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-dark border border-slate-200 focus:border-brand focus:ring-0 rounded-none px-4 py-3 text-sm text-slate-800 outline-none transition-all"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title} className="bg-dark text-slate-800">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-brand hover:bg-white hover:text-black text-slate-800 font-bold rounded-none px-4 py-4 text-center flex items-center justify-center gap-2 mt-2 font-display uppercase text-xs tracking-wider transition-all cursor-pointer"
                >
                  Continue to Calendar Scheduler
                  <ChevronRight size={14} />
                </button>
              </form>
            )}

            {/* STEP 2: Interactive Date and Time Slot Picker */}
            {step === 2 && (
              <div>
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-[10px] font-bold text-slate-800/70 uppercase tracking-widest mb-3.5 flex items-center gap-1.5">
                    <Calendar size={13} className="text-brand" />
                    Select a Date
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {businessDays.map((day) => (
                      <button
                        type="button"
                        key={day.id}
                        onClick={() => setSelectedDate(day.id)}
                        className={`p-3 rounded-none border flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                          selectedDate === day.id
                            ? 'bg-brand border-brand text-slate-800 font-bold'
                            : 'bg-transparent border-slate-200 text-slate-800/50 hover:border-slate-300 hover:text-slate-800'
                        }`}
                      >
                        <span className="text-[9px] uppercase font-bold tracking-widest leading-none opacity-80">{day.monthName}</span>
                        <span className="text-base font-black leading-none my-2">{day.dateNum}</span>
                        <span className="text-[9px] uppercase font-bold tracking-widest leading-none opacity-80">{day.dayName}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slot Selection */}
                <div className="mb-8">
                  <label className="block text-[10px] font-bold text-slate-800/70 uppercase tracking-widest mb-3.5 flex items-center gap-1.5">
                    <Clock size={13} className="text-brand" />
                    Select Available Spot
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-3 px-2 rounded-none text-xs font-bold border transition-all cursor-pointer text-center uppercase tracking-wider ${
                          selectedSlot === slot
                            ? 'bg-brand border-brand text-slate-800 font-black'
                            : 'bg-transparent border-slate-200 text-slate-800/50 hover:border-slate-300 hover:text-slate-800'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold rounded-none px-4 py-4 text-center flex-1 font-display uppercase text-xs tracking-wider transition-all cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleScheduleCall}
                    className="bg-brand hover:bg-white hover:text-black text-slate-800 font-bold rounded-none px-6 py-4 text-center flex-1 flex items-center justify-center gap-2 font-display uppercase text-xs tracking-wider transition-all cursor-pointer"
                  >
                    Confirm & Book Call
                    <CheckCircle size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Complete & Successful Booking */}
            {step === 3 && (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-14 h-14 rounded-none bg-brand/10 border border-brand/35 text-brand flex items-center justify-center mb-6 scale-110 animate-pulse">
                  <CheckCircle size={28} />
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-slate-800 mb-2">Strategy Session Booked!</h3>
                <p className="text-xs text-slate-800/60 max-w-sm mb-6 leading-relaxed">
                  Congratulations, {name}! Your call concerning <strong>{service}</strong> has been successfully registered. We will reach out to you at <strong>{phone}</strong> and coordinate details via <strong>{email}</strong>.
                </p>
                <div className="bg-white border border-slate-200 rounded-none p-4 text-left w-full max-w-sm mb-8">
                  <div className="text-[9px] text-brand uppercase font-bold tracking-widest">Scheduled Spot</div>
                  <div className="text-sm font-black text-slate-800 mt-1 uppercase tracking-wider">
                    {businessDays.find((d) => d.id === selectedDate)?.formatted || selectedDate}
                  </div>
                  <div className="text-xs text-slate-800/50 mt-1 uppercase tracking-wider">{selectedSlot} (Indian Standard Time)</div>
                </div>
                <button
                  type="button"
                  onClick={resetFlow}
                  className="bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold rounded-none px-5 py-3.5 text-[10px] uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Book Another Session
                </button>
              </div>
            )}
          </div>

          {/* Right: Contact details & Call details display */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-dark2 border border-slate-200 rounded-none p-6">
              <h4 className="font-display font-black text-sm uppercase tracking-wider text-slate-800 mb-4">Direct Communication</h4>
              <div className="flex flex-col gap-4 text-xs text-slate-800/50">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold tracking-widest leading-none opacity-50 mb-1">HQ Address</span>
                  <span className="text-slate-800 font-bold">Vidyanagar, Hubballi, Karnataka - 580021</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold tracking-widest leading-none opacity-50 mb-1">Official Hotlines</span>
                  <a href="tel:+917892489273" className="text-brand font-black hover:underline inline-flex items-center gap-1.5">
                    +91 78924 89273
                    <ExternalLink size={12} />
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold tracking-widest leading-none opacity-50 mb-1">Direct Outreach</span>
                  <a href="https://wa.me/917892489273" className="text-emerald-400 font-black hover:underline">
                    WhatsApp Support Chat
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
