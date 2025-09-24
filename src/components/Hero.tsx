import { ArrowRight, Zap, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Animated Badge */}
          <div className="inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-xl mb-8 hover-glow-strong animate-float">
            <Zap className="w-4 h-4 text-neon-cyan animate-pulse-glow" />
            <span className="text-sm font-semibold tracking-wide">Future-Ready Digital Solutions</span>
          </div>

          {/* Enhanced Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-slide-up">
            <span className="hero-text block mb-2">Transform Your</span>
            <span className="text-gradient-secondary block">Digital Presence</span>
          </h1>

          {/* Enhanced Subheading */}
          <p className="text-xl md:text-2xl text-foreground/85 mb-16 max-w-3xl mx-auto leading-relaxed font-light animate-slide-in-left">
            We craft cutting-edge digital experiences with futuristic design, 
            advanced technology, and innovative marketing strategies that propel your brand into the future.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <button 
              className="group btn-primary text-primary-foreground px-10 py-5 rounded-xl font-bold hover-glow-strong flex items-center gap-3 text-lg shadow-floating"
              data-cursor-hover
            >
              <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Launch Your Project
              <ArrowRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
            </button>
            
            <button 
              className="glass-strong px-10 py-5 rounded-xl font-bold border border-glass-border-bright hover-tilt transition-all duration-300 text-lg shadow-elevated hover:shadow-floating"
              data-cursor-hover
            >
              View Our Work
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            {[
              { number: '200+', label: 'Projects Completed', icon: '🚀' },
              { number: '150+', label: 'Happy Clients', icon: '💫' },
              { number: '5+', label: 'Years Experience', icon: '⚡' },
              { number: '24/7', label: 'Support Available', icon: '🛡️' },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center glass-subtle p-6 rounded-xl hover-scale card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black hero-text mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-foreground/70 text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;