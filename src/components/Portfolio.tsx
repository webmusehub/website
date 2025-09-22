import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'wordpress', name: 'WordPress' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
  ];

  const projects = [
    {
      id: 1,
      title: 'TechFlow SaaS Platform',
      category: 'web',
      description: 'A comprehensive SaaS platform built with MERN stack featuring real-time analytics and user management.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'E-commerce WordPress Site',
      category: 'wordpress',
      description: 'Custom WordPress e-commerce solution with advanced filtering and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity package including logo design, color palette, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=500&h=300&fit=crop',
      tags: ['Branding', 'Logo Design', 'UI/UX', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'marketing',
      description: 'Multi-channel marketing campaign that increased client conversions by 300%.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop',
      tags: ['SEO', 'Social Media', 'PPC', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Crypto Trading Dashboard',
      category: 'web',
      description: 'Real-time cryptocurrency trading dashboard with advanced charting and portfolio management.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'WebSocket', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Restaurant WordPress Theme',
      category: 'wordpress',
      description: 'Custom responsive WordPress theme for restaurants with online ordering system.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
      tags: ['WordPress', 'Custom Theme', 'Responsive', 'SEO'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Our Portfolio</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Explore our latest projects and see how we've helped businesses transform their digital presence
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground glow-cyan'
                    : 'glass border border-card-border hover:border-primary/50'
                }`}
                data-cursor-hover
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden group hover-glow transition-all duration-500 hover:scale-105"
              data-cursor-hover
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow"
                    data-cursor-hover
                  >
                    <ExternalLink className="w-4 h-4 text-neon-cyan" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow"
                    data-cursor-hover
                  >
                    <Github className="w-4 h-4 text-neon-cyan" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface rounded-full text-xs text-foreground/80 border border-card-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="glass px-8 py-4 rounded-lg font-semibold border border-card-border hover-glow transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;