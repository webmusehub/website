import { useEffect, useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => resolve();
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export default function Hero() {
  const globeRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;

    async function initVanta() {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
      await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js');
      if (cancelled || !globeRef.current) return;
      vantaRef.current = window.VANTA.GLOBE({
        el: globeRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x2D6BE4,
        color2: 0x93c5fd,
        backgroundColor: 0xF5F3EE,
        size: 1.5,
      });
    }

    initVanta();
    return () => {
      cancelled = true;
      if (vantaRef.current) { vantaRef.current.destroy(); vantaRef.current = null; }
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 px-5 md:px-12 overflow-hidden bg-dark">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(26,86,219,0.12)_0%,transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_80%,rgba(245,158,11,0.05)_0%,transparent_50%)]" />

      {/* Geometric Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Vanta Globe — full hero background */}
      <div
        ref={globeRef}
        className="hidden lg:block absolute inset-0 z-0"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Brand Value Prop */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-slate-800 leading-[0.82] mb-6">
            Grow your<br />business with<br />
            <span className="text-brand block mt-1.5">
              Smart Digital<br />Systems
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-800/75 leading-relaxed max-w-lg mb-8">
            WebMuseHub helps businesses generate more leads and sales through high-converting websites, performance marketing, and automated customer workflows — custom-built for real, measurable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-12">
            <a
              href="#final-cta"
              className="bg-brand hover:bg-white hover:text-black text-white font-bold px-8 py-4.5 border border-brand hover:border-slate-800 text-center flex items-center justify-center gap-3 font-display uppercase text-xs tracking-wider transition-all duration-350"
            >
              <Phone size={14} />
              Book Free Strategy Call
            </a>
            <a
              href="#services"
              className="border border-slate-200 hover:border-slate-800 bg-transparent hover:bg-slate-50 text-slate-800 font-bold px-8 py-4.5 text-center flex items-center justify-center gap-2 font-display uppercase text-xs tracking-wider transition-all duration-350"
            >
              See Our Services
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Social Proof / Stats */}
          <div className="flex items-center gap-8 border-t border-slate-200 pt-8 w-full max-w-lg">
            <div>
              <div className="font-display font-black text-2xl md:text-4xl text-slate-800 tracking-tighter">50+</div>
              <div className="text-[10px] text-slate-800/50 font-bold mt-1 uppercase tracking-widest">Projects Completed</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="font-display font-black text-2xl md:text-4xl text-slate-800 tracking-tighter">100%</div>
              <div className="text-[10px] text-slate-800/50 font-bold mt-1 uppercase tracking-widest">Satisfaction</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="font-display font-black text-2xl md:text-4xl text-slate-800 tracking-tighter">3-IN-1</div>
              <div className="text-[10px] text-slate-800/50 font-bold mt-1 uppercase tracking-widest">Design · Dev · Ads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
