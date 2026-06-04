import { industries } from '../data/websiteData';

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-5 md:px-12 bg-dark2 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block font-display text-[10px] font-black tracking-widest text-brand uppercase bg-brand/10 border border-brand/35 px-4 py-1.5 rounded-none mb-4">
            Industries Served
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white mb-2">
            Digital Scaling for Diverse Sectors
          </h2>
          <p className="text-xs md:text-sm text-white/50 uppercase tracking-widest mt-2">
            We adapt conversion frameworks and advertising formulas to fit the specialized nuances of each marketplace.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="bg-dark border border-white/10 rounded-none p-5 text-center flex flex-col items-center justify-center transition-all duration-300 hover:border-brand select-none"
            >
              <span className="text-2xl mb-2.5 filter drop-shadow">{ind.emoji}</span>
              <span className="text-xs font-black uppercase tracking-wider text-white">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
