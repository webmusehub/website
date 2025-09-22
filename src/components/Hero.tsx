import { ArrowRight, Zap, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 hover-glow">
            <Zap className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-medium">Future-Ready Digital Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="hero-text">Transform Your</span>
            <br />
            <span className="text-foreground">Digital Presence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            We craft cutting-edge digital experiences with futuristic design, 
            advanced technology, and innovative marketing strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105 flex items-center gap-2"
              data-cursor-hover
            >
              <Rocket className="w-5 h-5" />
              Launch Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              className="glass px-8 py-4 rounded-lg font-semibold border border-card-border hover-glow transition-all duration-300 hover:scale-105"
              data-cursor-hover
            >
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '150+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold hero-text mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/60 text-sm">
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