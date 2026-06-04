import { ComponentType } from 'react';
import { whyChooseUs } from '../data/websiteData';
import { MapPin, BarChart3, Layers, MessageSquareText, Lightbulb, IndianRupee } from 'lucide-react';

// Icon lookup object
const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  MapPin: MapPin,
  BarChart3: BarChart3,
  Layers: Layers,
  MessageSquareText: MessageSquareText,
  Lightbulb: Lightbulb,
  IndianRupee: IndianRupee,
};

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24 px-5 md:px-12 bg-dark border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-display text-[10px] font-black tracking-widest text-brand uppercase bg-brand/10 border border-brand/35 px-4 py-1.5 rounded-none mb-4 animate-pulse">
            Why WebMuseHub
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white mb-4">
            Why Businesses Choose WebMuseHub
          </h2>
          <p className="text-sm md:text-base text-white/60 leading-relaxed">
            We build digital systems that help businesses attract clients, generate leads, and scale revenue — with full engineering excellence and complete performance transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Lightbulb;
            return (
              <div
                key={index}
                className="bg-dark2 border border-white/10 rounded-none p-8 hover:border-brand transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-none bg-brand/10 border border-brand/35 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <IconComponent size={20} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-black text-lg uppercase tracking-tight text-white mb-2.5 group-hover:text-brand transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
