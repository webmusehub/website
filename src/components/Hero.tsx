import { useState } from 'react';
import { ArrowRight, Phone, TrendingUp, Sparkles, Building2, Layers } from 'lucide-react';

export default function Hero() {
  // ROI Estimator State
  const [adSpend, setAdSpend] = useState<number>(50000);
  const [avgTicket, setAvgTicket] = useState<number>(2500);
  const [industry, setIndustry] = useState<string>('ecommerce');

  // Industry constants
  const industryConfig: Record<string, { label: string; cpc: number; convRate: number }> = {
    ecommerce: { label: 'D2C E-commerce', cpc: 12, convRate: 0.03 },
    realestate: { label: 'Real Estate Leads', cpc: 45, convRate: 0.05 },
    b2b: { label: 'B2B & Services', cpc: 30, convRate: 0.04 },
    retail: { label: 'Retail & Restaurants', cpc: 10, convRate: 0.06 },
  };

  const selectedConfig = industryConfig[industry];

  // Calculations
  const estimatedClicks = Math.floor(adSpend / selectedConfig.cpc);
  const estimatedConversions = Math.floor(estimatedClicks * selectedConfig.convRate);
  const estimatedRevenue = estimatedConversions * avgTicket;
  const netProfit = estimatedRevenue - adSpend;
  const roiMultiplier = adSpend > 0 ? (estimatedRevenue / adSpend).toFixed(1) : '0';

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 px-5 md:px-12 overflow-hidden bg-dark">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(26,86,219,0.12)_0%,transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(245,158,11,0.05)_0%,transparent_50%)]" />
      
      {/* Geometric Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Brand Value Prop */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-brand/10 border border-brand/35 text-brand-light text-xs font-black tracking-widest uppercase mb-6 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            🇮🇳 Hubballi, Karnataka · Pan-India
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-white leading-[0.82] mb-6">
            Grow your<br />business with<br />
            <span className="text-brand block mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-500">
              Smart Digital<br />Systems
            </span>
          </h1>

          <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-lg mb-8">
            WebMuseHub helps businesses generate more leads and sales through high-converting websites, performance marketing, and automated customer workflows — custom-built for real, measurable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-12">
            <a
              href="#final-cta"
              className="bg-brand hover:bg-white hover:text-black text-white font-bold px-8 py-4.5 border border-brand hover:border-white text-center flex items-center justify-center gap-3 font-display uppercase text-xs tracking-wider transition-all duration-350"
            >
              <Phone size={14} />
              Book Free Strategy Call
            </a>
            <a
              href="#services"
              className="border border-white/15 hover:border-white bg-transparent hover:bg-white/5 text-white font-bold px-8 py-4.5 text-center flex items-center justify-center gap-2 font-display uppercase text-xs tracking-wider transition-all duration-350"
            >
              See Our Services
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Social Proof / Stats */}
          <div className="flex items-center gap-8 border-t border-white/15 pt-8 w-full max-w-lg">
            <div>
              <div className="font-display font-black text-2xl md:text-4xl text-white tracking-tighter">50+</div>
              <div className="text-[10px] text-white/50 font-bold mt-1 uppercase tracking-widest">Projects Completed</div>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div>
              <div className="font-display font-black text-2xl md:text-4xl text-white tracking-tighter">100%</div>
              <div className="text-[10px] text-white/50 font-bold mt-1 uppercase tracking-widest">Satisfaction</div>
            </div>
            <div className="w-px h-10 bg-white/15" />
            <div>
              <div className="font-display font-black text-2xl md:text-4xl text-white tracking-tighter">3-IN-1</div>
              <div className="text-[10px] text-white/50 font-bold mt-1 uppercase tracking-widest">Design · Dev · Ads</div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Brand Calculator / ROI Simulator */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-dark2 border border-white/15 rounded-none p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand text-white text-[10px] font-black uppercase tracking-widest shadow-md">
              <Sparkles size={11} />
              Growth Simulator
            </div>

            <div className="mb-6">
              <h3 className="font-display font-black text-xl uppercase tracking-tight text-white">Estimate Your Growth</h3>
              <p className="text-xs text-white/50 mt-1">See what a precision WebMuseHub campaign can unlock for you.</p>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-5">
              {/* Select Industry */}
              <div>
                <label className="block text-[10px] font-bold text-white/80 uppercase tracking-widest mb-2.5">
                  Select Business Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(industryConfig).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setIndustry(key)}
                      className={`px-3 py-2.5 text-xs font-bold uppercase tracking-wider rounded-none text-center border transition-all ${
                        industry === key
                          ? 'bg-brand/15 text-white border-brand'
                          : 'bg-white/2 text-white/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Ad Budget */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[10px] font-bold text-white/80 uppercase tracking-widest">
                    Target Monthly Ad Spend
                  </label>
                  <span className="text-sm font-black text-brand-light">
                    {formatCurrency(adSpend)}
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-none appearance-none cursor-pointer accent-brand"
                />
                <div className="flex justify-between text-[9px] font-bold text-white/30 tracking-wider mt-1">
                  <span>₹10k</span>
                  <span>₹2.5L</span>
                  <span>₹5L</span>
                </div>
              </div>

              {/* Avg Ticket Value */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[10px] font-bold text-white/80 uppercase tracking-widest">
                    Average Order/Service Value
                  </label>
                  <span className="text-sm font-black text-brand-light">
                    {formatCurrency(avgTicket)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-none appearance-none cursor-pointer accent-brand"
                />
                <div className="flex justify-between text-[9px] font-bold text-white/30 tracking-wider mt-1">
                  <span>₹500</span>
                  <span>₹25k</span>
                  <span>₹50k</span>
                </div>
              </div>
            </div>

            {/* Outputs Grid */}
            <div className="bg-black rounded-none border border-white/10 p-4 mt-6 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[9px] uppercase font-bold text-white/40 tracking-wider block">
                  Est. Monthly Conversions
                </span>
                <span className="text-xl font-black text-white mt-1 block tracking-tight font-display">
                  {estimatedConversions} <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider font-sans">units</span>
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase font-bold text-white/40 tracking-wider block">
                  Projected ROI
                </span>
                <span className="text-xl font-black text-emerald-400 mt-1 block flex items-center gap-1 font-display tracking-tight">
                  <TrendingUp size={15} className="inline text-emerald-400" />
                  {roiMultiplier}x
                </span>
              </div>
              <div className="col-span-2 border-t border-white/10 pt-3 mt-1">
                <span className="text-[9px] uppercase font-bold text-white/40 tracking-wider block">
                  Projected Monthly Revenue
                </span>
                <span className="text-2xl font-black text-emerald-400 mt-1 block tracking-tighter font-display">
                  {formatCurrency(estimatedRevenue)}
                </span>
              </div>
            </div>

            <p className="text-[10px] text-text-muted text-center italic mt-4">
              *Projections are estimates based on standard conversion averages. Performance varies by actual market conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
