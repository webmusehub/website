import { CheckCircle2, Award, Users, Compass } from 'lucide-react';

export default function About() {
  const values = [
    { label: 'Excellence', color: 'bg-brand' },
    { label: 'Collaboration', color: 'bg-accent' },
    { label: 'Innovation', color: 'bg-emerald-500' },
    { label: 'Results-Driven', color: 'bg-purple-500' }
  ];

  return (
    <section id="about" className="py-24 px-5 md:px-12 bg-dark2 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block - Mission and Vision Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1">
            <div className="bg-dark border border-slate-200 rounded-none p-6 md:p-8 hover:border-brand transition-all duration-300">
              <span className="text-[10px] font-black text-brand uppercase tracking-widest block mb-2 leading-none">
                Our Mission
              </span>
              <h3 className="font-display font-black text-lg uppercase tracking-tight text-slate-800 mb-3">
                Empower Indian SMBs to Dominate the Digital Economy
              </h3>
              <p className="text-sm text-slate-800/50 leading-relaxed">
                We combine visual storytelling, custom programming, and analytics to elevate businesses from basic setups to enterprise-level performers — creating customer acquisitions on demand.
              </p>
            </div>

            <div className="bg-dark border border-slate-200 rounded-none p-6 md:p-8 hover:border-brand transition-all duration-300">
              <span className="text-[10px] font-black text-brand uppercase tracking-widest block mb-2 leading-none">
                Our Vision
              </span>
              <h3 className="font-display font-black text-lg uppercase tracking-tight text-slate-800 mb-3">
                The Preferred Growth Accelerator in Karnataka
              </h3>
              <p className="text-sm text-slate-800/50 leading-relaxed">
                To build high-performance infrastructure that powers regional business scale, proving that top-tier digital transformation can be engineered affordably and executed locally.
              </p>
            </div>

            {/* Core Values Pills Grid */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((v) => (
                <div key={v.label} className="bg-dark border border-slate-200 rounded-none p-4 flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-none ${v.color} shrink-0`} />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block - Brand Story & Metrics */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-block font-display text-[10px] font-black tracking-widest text-brand uppercase bg-brand/10 border border-brand/35 px-4 py-1.5 rounded-none mb-4">
              About WebMuseHub
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-slate-800 mb-6">
              Driving Growth with Technology, Strategy & Creative Excellence
            </h2>
            
            <div className="text-sm text-slate-800/60 leading-relaxed flex flex-col gap-4">
              <p>
                Founded in 2025, WebMuseHub was built around a singular idea: regional Indian enterprises deserve access to first-class software products and smart advertisement pipelines without bloated consultant overheads.
              </p>
              <p>
                Based in Hubballi-Dharwad, Karnataka, we operate as a full-service collaborative hub. We craft ultra-fast, search-optimized business frontlines, deploy precise search & social targeted campaigns, and configure automation workflows to eliminate team manual labor.
              </p>
              <p>
                By blending software craftsmanship and conversions copywriting, we give brands the tools they need to convert attention into verified business transactions.
              </p>
            </div>

            {/* Metrics Footer */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 mt-8 w-full">
              <div>
                <strong className="block font-display text-2xl md:text-4xl font-black text-brand tracking-tighter">2025</strong>
                <span className="text-[9px] text-slate-800/40 uppercase font-bold tracking-widest">Launched</span>
              </div>
              <div>
                <strong className="block font-display text-2xl md:text-4xl font-black text-brand tracking-tighter">10+</strong>
                <span className="text-[9px] text-slate-800/40 uppercase font-bold tracking-widest">Active clients</span>
              </div>
              <div>
                <strong className="block font-display text-2xl md:text-4xl font-black text-brand tracking-tighter">7+</strong>
                <span className="text-[9px] text-slate-800/40 uppercase font-bold tracking-widest">Sectors served</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
