import { ComponentType } from 'react';
import { processSteps } from '../data/websiteData';
import { SearchCode, Map, Rocket, TrendingUp } from 'lucide-react';

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  SearchCode: SearchCode,
  Map: Map,
  Rocket: Rocket,
  TrendingUp: TrendingUp,
};

export default function Process() {
  return (
    <section id="process" className="py-24 px-5 md:px-12 bg-dark2 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-display text-[10px] font-black tracking-widest text-brand uppercase bg-brand/10 border border-brand/35 px-4 py-1.5 rounded-none mb-4">
            Our Process
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white mb-4">
            A Proven, 4-Step System Directed at Scalable Business Growth
          </h2>
          <p className="text-sm md:text-base text-white/50 leading-relaxed">
            We don't guess. We research, build, publish, and optimize using systematic workflows that convert strategy into revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = iconMap[step.icon] || Rocket;
            return (
              <div key={step.number} className="relative flex flex-col items-start bg-dark border border-white/5 p-6 md:p-8 rounded-none hover:border-brand transition-all duration-300">
                {/* Connecting Line (Desktop) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute lg:left-[110px] lg:right-[-20px] top-12 border-t border-dashed border-white/15 z-0" />
                )}

                <div className="flex justify-between items-center w-full mb-6 relative z-10">
                  <div className="font-display font-black text-5xl text-brand leading-[0.8] tracking-tighter">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 rounded-none bg-brand/10 border border-brand/35 flex items-center justify-center text-brand">
                    <IconComponent size={18} />
                  </div>
                </div>

                <h3 className="font-display font-black text-base uppercase tracking-tight text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-xs text-white/50 leading-relaxed mb-5">
                  {step.description}
                </p>

                <ul className="flex flex-col gap-1.5 border-t border-white/10 pt-4 w-full">
                  {step.substeps.map((sub, i) => (
                    <li key={i} className="text-[11px] text-white/45 flex items-start gap-1.5">
                      <span className="text-brand font-black">→</span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
