import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: 'Why Us', href: '#why' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-12 h-20 flex items-center justify-between border-b transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-white/10'
          : 'bg-dark/80 backdrop-blur-sm border-white/5'
      }`}
    >
      <a href="#" className="font-display font-black text-2xl tracking-tighter uppercase text-white">
        Web<span className="text-brand">Muse</span>Hub
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#final-cta"
          className="bg-white hover:bg-brand text-black hover:text-white px-5 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-200"
        >
          <PhoneCall size={13} />
          Book Free Call
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-1.5 rounded-none bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 right-0 bg-dark border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-xl animate-fade-in md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold uppercase tracking-widest text-white/70 py-3 border-b border-white/5 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#final-cta"
            onClick={() => setIsOpen(false)}
            className="bg-white text-black hover:bg-brand hover:text-white mt-1 px-4 py-3.5 font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
          >
            <PhoneCall size={15} />
            Book Free Call
          </a>
        </div>
      )}
    </nav>
  );
}
