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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Our Services</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Comprehensive digital solutions powered by cutting-edge technology and creative innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-6 hover-glow transition-all duration-500 hover:scale-105 group"
              data-cursor-hover
            >
              <div className={`w-12 h-12 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-6 glow-${service.color.split('-')[1]} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 text-${service.color}`} />
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>

              <p className="text-foreground/70 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-foreground/60">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${service.color} mr-3 glow-${service.color.split('-')[1]}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-card-border">
                <button className={`text-${service.color} font-semibold hover:underline transition-colors`}>
                  Learn More →
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