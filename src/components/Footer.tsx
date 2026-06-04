import { Heart, Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="WebMuseHub Footer" className="relative bg-dark pt-20 pb-12 border-t border-white/10 px-5 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
        
        {/* Brand Block */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <a href="#" className="font-display font-black text-xl md:text-2xl tracking-tighter text-white uppercase mb-4">
            WEB<span className="text-brand">MUSE</span>HUB
          </a>
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed mb-6 max-w-sm">
            Helping businesses across Karnataka and India grow online with high-converting websites, data-informed performance marketing, and automated customer follow-up pipelines.
          </p>
          <div className="flex flex-col gap-2 border-t border-white/10 pt-5 w-full">
            <div className="flex items-start gap-2.5 text-xs text-white/50">
              <MapPin size={14} className="text-brand shrink-0 mt-0.5" />
              <span className="text-xs font-bold uppercase tracking-wider">Vidyanagar, Hubballi, Karnataka – 580021, India</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/50">
              <Mail size={14} className="text-brand shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider">info@webmusehub.com</span>
            </div>
          </div>
        </div>

        {/* Services Links */}
        <div className="lg:col-span-2.5">
          <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-4">Services</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#services" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand transition-colors">Web Development</a></li>
            <li><a href="#services" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand transition-colors">Performance Ads</a></li>
            <li><a href="#services" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand transition-colors">SEO Services</a></li>
            <li><a href="#services" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand transition-colors">Branding & Layout</a></li>
            <li><a href="#services" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand transition-colors">AI & CRM Automations</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="lg:col-span-2.5">
          <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-4">Company</h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#about" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand transition-colors">About Us</a></li>
            <li><a href="#portfolio" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand transition-colors">Our Portfolios</a></li>
            <li><a href="#process" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand transition-colors">Our Roadmap</a></li>
            <li><a href="#testimonials" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand transition-colors">Client Log</a></li>
            <li><a href="#industries" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-brand transition-colors">Industries</a></li>
          </ul>
        </div>

        {/* Action/Contact Links */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-white mb-4">Contact Hotlines</h4>
            <ul className="flex flex-col gap-2.5 mb-6">
              <li><a href="tel:+917892489273" className="text-xs text-brand font-black hover:underline uppercase tracking-wider">+91 78924 89273</a></li>
              <li><a href="https://wa.me/917892489273" className="text-xs text-emerald-400 font-black hover:underline uppercase tracking-wider">WhatsApp Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-black text-[10px] text-white/40 uppercase tracking-widest mb-3">Connect With Us</h4>
            <div className="flex gap-2">
              <a href="#" className="p-2 bg-transparent border border-white/10 rounded-none text-white/70 hover:text-white hover:bg-brand hover:border-brand transition-all duration-200" aria-label="Follow on Instagram">
                <Instagram size={14} />
              </a>
              <a href="#" className="p-2 bg-transparent border border-white/10 rounded-none text-white/70 hover:text-white hover:bg-brand hover:border-brand transition-all duration-200" aria-label="Connect on LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="#" className="p-2 bg-transparent border border-white/10 rounded-none text-white/70 hover:text-white hover:bg-brand hover:border-brand transition-all duration-200" aria-label="Watch on YouTube">
                <Youtube size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom Block */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
        <p className="text-xs font-bold uppercase tracking-wider text-white/40">
          &copy; {currentYear} WebMuseHub. All Rights Reserved. Managed in Hubballi, Karnataka, India.
        </p>
        <p className="text-[10px] text-white/35 flex items-center justify-center gap-1.5 uppercase font-bold tracking-widest">
          Engineered with <Heart size={10} className="text-brand fill-brand animate-pulse" /> for Indian SMBs · Privacy Policy · Terms
        </p>
      </div>
    </footer>
  );
}
