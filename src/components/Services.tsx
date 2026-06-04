import { ComponentType } from 'react';
import { services } from '../data/websiteData';
import { Globe, Megaphone, Palette, Cpu, Search, Smartphone, Check } from 'lucide-react';

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Globe: Globe,
  Megaphone: Megaphone,
  Palette: Palette,
  Cpu: Cpu,
  Search: Search,
  Smartphone: Smartphone,
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 md:px-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-display text-[10px] font-black tracking-widest text-brand uppercase bg-brand/10 border border-brand/35 px-4 py-1.5 rounded-none mb-4">
            Our Services
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-slate-800 mb-4">
            Custom Digital Solutions Built to Accelerate Your Online Growth
          </h2>
          <p className="text-sm md:text-base text-slate-800/60 leading-relaxed">
            We merge professional interface layout design, enterprise code development, and data-backed promotional strategy to generate tangible results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="relative bg-dark2 border border-slate-200 rounded-none p-8 hover:border-brand transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between"
              >
                {/* Visual Top Decorative Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-none bg-brand/10 border border-brand/35 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-slate-800 transition-all duration-300">
                    <IconComponent size={20} className="transition-transform duration-300 group-hover:scale-115" />
                  </div>

                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-slate-800 mb-3 group-hover:text-brand transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-800/50 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-5 mt-4">
                  <span className="text-[9px] uppercase font-bold text-slate-800/40 tracking-wider block mb-3">
                    What we offer
                  </span>
                  <ul className="flex flex-col gap-2.5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs text-slate-800/60 flex items-start gap-2">
                        <Check size={14} className="text-brand shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
