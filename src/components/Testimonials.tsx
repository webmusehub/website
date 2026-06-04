import { testimonials } from '../data/websiteData';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-5 md:px-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-display text-[10px] font-black tracking-widest text-brand uppercase bg-brand/10 border border-brand/35 px-4 py-1.5 rounded-none mb-4">
            Testimonials
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-slate-800 mb-4">
            Hear From Our Clients
          </h2>
          <p className="text-sm md:text-base text-slate-800/50 leading-relaxed">
            Real outcomes from real business leaders who scaled with our web optimization and performance marketing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testi, i) => (
            <div
              key={i}
              className="bg-dark2 border border-slate-200 rounded-none p-8 relative flex flex-col justify-between hover:border-brand transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-slate-800/5 pointer-events-none">
                <Quote size={40} />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-5 text-brand">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="text-xs">★</span>
                  ))}
                </div>

                <blockquote className="text-sm text-slate-800/70 leading-relaxed mb-6 font-medium">
                  "{testi.text}"
                </blockquote>
              </div>

              <div className="border-t border-slate-200 pt-5 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-none flex items-center justify-center text-slate-800 text-xs font-black shrink-0 ${testi.background || 'bg-brand'}`}>
                  {testi.initials}
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-slate-800 leading-tight">{testi.author}</div>
                  <div className="text-[10px] uppercase font-bold text-slate-800/40 mt-1 leading-none">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
