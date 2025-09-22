import { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@webmusehub.com',
      color: 'neon-cyan',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      color: 'neon-blue',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      color: 'neon-purple',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface border border-card-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none input-glow transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface border border-card-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none input-glow transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-surface border border-card-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none input-glow transition-all duration-300"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface border border-card-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none resize-none input-glow transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover-glow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                data-cursor-hover
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Let's connect</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                We're always excited to work on new projects and help businesses achieve their digital goals. 
                Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-${info.color}/10 flex items-center justify-center glow-${info.color.split('-')[1]}`}>
                      <info.icon className={`w-6 h-6 text-${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-foreground/70">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Stay Updated</h3>
              <p className="text-foreground/70 mb-6">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-surface border border-card-border rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none input-glow transition-all duration-300"
                />
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover-glow transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;