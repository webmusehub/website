import { useState } from 'react';
import { portfolioItems } from '../data/websiteData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Religious Services', 'Agritech', 'Education', 'Automation', 'Productivity SaaS'];

  const filteredItems = activeTab === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="portfolio" className="py-24 px-5 md:px-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-block font-display text-[10px] font-black tracking-widest text-brand uppercase bg-brand/10 border border-brand/35 px-4 py-1.5 rounded-none mb-4">
              Our Work
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-slate-800 mb-2">
              Recent Case Studies
            </h2>
            <p className="text-sm text-slate-800/50 max-w-xl">
              From spiritual platforms to AI-powered SaaS — see the digital products we've built across diverse industries.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-none text-[10px] font-black uppercase tracking-widest border transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-white border-slate-800 text-black'
                    : 'bg-transparent border-slate-200 text-slate-800/60 hover:border-slate-800/30 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark2 border border-slate-200 rounded-none overflow-hidden hover:border-brand transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between no-underline"
            >
              <div>
                {/* Simulated Thumbnail */}
                <div className="h-44 bg-gradient-to-br from-brand/20 via-brand/5 to-orange-500/10 flex items-center justify-center text-4xl select-none group-hover:scale-105 transition-transform duration-500">
                  <span className="drop-shadow-md">{item.emoji}</span>
                </div>

                <div className="p-6">
                  <div className="text-[9px] font-bold tracking-widest text-brand uppercase mb-2">
                    {item.category}
                  </div>
                  <h3 className="font-display font-black text-lg uppercase tracking-tight text-slate-800 mb-2 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-800/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-slate-200 bg-white/1 mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-400 font-sans">
                  <CheckCircle2 size={13} className="shrink-0" />
                  <span>{item.metric}</span>
                </div>
                <span className="text-slate-800/30 group-hover:text-brand transition-colors duration-200">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </a>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-800/40 text-xs uppercase tracking-widest font-black">
              No matching case studies found in {activeTab}. Check back soon!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
