import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Industries from './components/Industries';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-dark text-slate-800 min-h-screen selection:bg-brand/35 selection:text-slate-800">
      {/* Precision Fixed Navigation */}
      <Navbar />

      {/* Hero Header with Embedded Live Growth Simulator */}
      <Hero />

      {/* Why Choose Us Features */}
      <WhyChooseUs />

      {/* Responsive Services Matrix */}
      <Services />

      {/* 4-Step Client Delivery Roadmap */}
      <Process />

      {/* Filterable Portfolio Case Studies */}
      <Portfolio />

      {/* About Section - Story, Values, Mission/Vision */}
      <About />

      {/* Client Feedback Board */}
      <Testimonials />

      {/* Emojis based Industry Chips */}
      <Industries />

      {/* Collaborative Strategy Call Scheduler with localStorage persistence */}
      <FinalCTA />

      {/* Multi-column Brand Footer */}
      <Footer />
    </div>
  );
}
