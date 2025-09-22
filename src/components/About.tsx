import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every project is executed with meticulous attention to detail and strategic planning.',
      color: 'neon-cyan',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of trends and leverage cutting-edge technologies to deliver exceptional results.',
      color: 'neon-blue',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve their digital transformation goals.',
      color: 'neon-purple',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to quality ensures every project exceeds expectations and drives success.',
      color: 'neon-pink',
    },
  ];

  const stats = [
    { number: '200+', label: 'Projects Delivered', suffix: '' },
    { number: '150+', label: 'Happy Clients', suffix: '' },
    { number: '99', label: 'Success Rate', suffix: '%' },
    { number: '24/7', label: 'Support Available', suffix: '' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="hero-text">About WebMuseHub</span>
            </h2>
            <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
              We are a forward-thinking digital agency specializing in creating futuristic, 
              high-performance digital experiences that drive business growth.
            </p>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Founded on the principle that great design and robust technology should work hand in hand, 
              we've been helping businesses transform their digital presence for over 5 years. Our team 
              of experts combines creative vision with technical expertise to deliver solutions that not 
              only look amazing but perform exceptionally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover-glow transition-all duration-300 hover:scale-105">
                Our Story
              </button>
              <button className="glass px-8 py-3 rounded-lg border border-card-border hover-glow transition-all duration-300 hover:scale-105">
                Meet the Team
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center hover-glow">
                <div className="text-3xl md:text-4xl font-bold hero-text mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-foreground/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            <span className="hero-text">Our Values</span>
          </h3>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            The principles that guide everything we do and help us deliver exceptional results for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center glass rounded-2xl p-6 hover-glow transition-all duration-500 hover:scale-105 group"
              data-cursor-hover
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-${value.color}/10 flex items-center justify-center mb-6 glow-${value.color.split('-')[1]} group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className={`w-8 h-8 text-${value.color}`} />
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-foreground">
                {value.title}
              </h4>
              
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 hero-text">Our Mission</h3>
            <p className="text-xl text-foreground/80 leading-relaxed">
              "To empower businesses with cutting-edge digital solutions that not only meet today's 
              challenges but anticipate tomorrow's opportunities. We believe in creating digital experiences 
              that are not just functional, but transformational."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;