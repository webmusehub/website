import { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Random animation delay
      particle.style.animationDelay = Math.random() * 6 + 's';
      
      return particle;
    };

    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
      // Create initial particles
      for (let i = 0; i < 50; i++) {
        particlesContainer.appendChild(createParticle());
      }
    }

    return () => {
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return <div className="particles" />;
};

export default ParticleBackground;