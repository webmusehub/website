import { Code, Palette, TrendingUp, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'MERN Stack Development',
      description: 'Full-stack web applications built with MongoDB, Express.js, React, and Node.js for maximum performance and scalability.',
      features: ['Custom Web Apps', 'API Development', 'Database Design', 'Cloud Deployment'],
      color: 'neon-cyan',
    },
    {
      icon: Palette,
      title: 'WordPress Development',
      description: 'Professional WordPress websites with custom themes, plugins, and e-commerce solutions tailored to your business needs.',
      features: ['Custom Themes', 'Plugin Development', 'E-commerce Setup', 'SEO Optimization'],
      color: 'neon-blue',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to boost your online presence and drive conversions through multiple digital channels.',
      features: ['SEO & SEM', 'Social Media', 'Content Strategy', 'Analytics'],
      color: 'neon-purple',
    },
    {
      icon: Smartphone,
      title: 'Graphic Design',
      description: 'Stunning visual designs that capture your brand essence and create memorable experiences for your audience.',
      features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Digital Assets'],
      color: 'neon-pink',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="hero-text">Our Services</span>
          </h2>
          <p className="text-xl text-foreground/85 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions powered by cutting-edge technology and creative innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-strong rounded-2xl p-8 card-hover group relative overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-cursor-hover
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />
              
              <div className={`w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-8 glow-${service.color.split('-')[1]} group-hover:scale-110 transition-transform duration-300 shadow-floating`}>
                <service.icon className={`w-8 h-8 text-primary-foreground`} />
              </div>

              <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-foreground/75 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-foreground/70">
                    <div className={`w-2 h-2 rounded-full bg-${service.color} mr-4 glow-${service.color.split('-')[1]} animate-pulse-glow`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-glass-border-bright">
                <button className={`text-${service.color} font-bold hover:text-${service.color}-bright transition-all duration-300 hover:translate-x-2 flex items-center gap-2`}>
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;