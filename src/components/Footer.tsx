import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: ['Web Development', 'WordPress', 'Digital Marketing', 'Graphic Design'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Case Studies', 'Documentation', 'Support'],
    },
  ];

  return (
    <footer className="border-t border-card-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold hero-text mb-4">
              WebMuseHub
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Crafting the future of digital experiences with innovative technology and creative design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow transition-all duration-300 hover:scale-110"
                  data-cursor-hover
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-neon-cyan" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                      data-cursor-hover
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © 2024 WebMuseHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors" data-cursor-hover>
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors" data-cursor-hover>
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors" data-cursor-hover>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;