import { Service, ProcessStep, PortfolioItem, Testimonial, Industry } from '../types';

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Modern, high-performance websites designed to convert visitors into customers — fast, mobile-optimized, and built to rank.',
    icon: 'Globe',
    features: [
      'Business Websites',
      'Shopify E-commerce Stores',
      'Landing Pages for Lead Generation',
      'CMS & Website Management',
      'Performance & Speed Optimization'
    ]
  },
  {
    id: 'perf-marketing',
    title: 'Performance Marketing',
    description: 'Data-driven advertising campaigns designed to generate qualified leads and increase sales with measurable ROI.',
    icon: 'Megaphone',
    features: [
      'Meta Ads (Facebook & Instagram)',
      'Google Ads Campaigns',
      'Conversion Tracking Setup',
      'Campaign Optimization',
      'Analytics & Performance Reports'
    ]
  },
  {
    id: 'ui-ux',
    title: 'Branding & UI/UX Design',
    description: 'Strategic design that builds brand trust and improves the customer experience from first impression to conversion.',
    icon: 'Palette',
    features: [
      'Brand Identity Design',
      'UI/UX Design for Websites & Apps',
      'Conversion-Focused Layouts',
      'Wireframes & Prototypes',
      'Design Systems'
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Growth Systems',
    description: 'Smart automation systems that save time, improve customer engagement, and scale your business without extra headcount.',
    icon: 'Cpu',
    features: [
      'WhatsApp Automation',
      'Email Marketing Systems',
      'Lead Tracking & CRM Setup',
      'Customer Follow-up Automation',
      'Marketing Workflow Automation'
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Organic Growth',
    description: 'Rank higher on Google and get discovered by customers searching for your products and services in Hubballi and beyond.',
    icon: 'Search',
    features: [
      'Keyword Research & Strategy',
      'On-page & Technical SEO',
      'Local SEO for Hubballi Businesses',
      'Content Marketing & Blogs',
      'Google Business Profile Optimization'
    ]
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: "Custom Android, iOS, and hybrid mobile apps for businesses that need a powerful digital product in their customers' hands.",
    icon: 'Smartphone',
    features: [
      'Android App Development',
      'iOS App Development',
      'React Native / Hybrid Apps',
      'App UI/UX Design',
      'App Store Optimization'
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin by understanding your business, target audience, and growth goals in depth.',
    icon: 'SearchCode',
    substeps: [
      'Business & market analysis',
      'Understanding your target customers',
      'Identifying growth opportunities',
      'Reviewing current digital presence'
    ]
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We create a clear, customized digital growth strategy aligned with your business objectives.',
    icon: 'Map',
    substeps: [
      'Website or funnel planning',
      'Marketing strategy design',
      'Conversion optimization plan',
      'Advertising roadmap'
    ]
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Our team builds and launches digital systems designed for your growth — with speed, precision, and scalability.',
    icon: 'Rocket',
    substeps: [
      'Website or store development',
      'Marketing campaign setup',
      'Automation implementation',
      'Performance tracking setup'
    ]
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Growth doesn\'t stop after launch. We continuously monitor and improve to maximize long-term ROI.',
    icon: 'TrendingUp',
    substeps: [
      'Monitor campaign performance',
      'Analyse customer behaviour',
      'Optimise conversions and ads',
      'Scale successful strategies'
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'clothing-brand',
    title: 'Clothing Brand — Online Store',
    description: 'Full Shopify store with product catalogue, payment integration, and Meta Ads campaign for a fashion D2C brand.',
    category: 'E-commerce',
    metric: '340% increase in online sales in 60 days',
    emoji: '🛍️'
  },
  {
    id: 'real-estate',
    title: 'Real Estate — Lead Gen Website',
    description: 'High-converting property listing website with CRM integration and Google Ads campaign for a Hubballi real estate firm.',
    category: 'Web Development',
    metric: '120+ qualified leads in the first month',
    emoji: '🏠'
  },
  {
    id: 'skincare',
    title: 'Skincare Brand — Shopify + Ads',
    description: 'Branded Shopify storefront with influencer-ready design, email automation, and Instagram ad campaigns.',
    category: 'Performance Marketing',
    metric: '5.2x ROAS on Meta Ads in 45 days',
    emoji: '✨'
  },
  {
    id: 'b2b-logistics',
    title: 'B2B Logistics — SEO Initiative',
    description: 'Full search optimization campaign targeting long-tail commercial keywords to capture Indian trade logistics traffic.',
    category: 'SEO',
    metric: '#1 ranking for 18 primary keywords',
    emoji: '🚚'
  },
  {
    id: 'clinic-whatsapp',
    title: 'Healthcare Clinic — WhatsApp Automation',
    description: 'Automated booking assistant integration with immediate appointment scheduling, reducing staff handling time.',
    category: 'Automation',
    metric: '75% reduction in booking friction',
    emoji: '🏥'
  }
];

export const testimonials: Testimonial[] = [
  {
    author: 'Rajesh Kumar',
    initials: 'RK',
    role: 'Founder, D2C Clothing Brand',
    text: 'WebMuseHub built our Shopify store from scratch and set up our Meta Ads. Within 2 months we went from zero online sales to ₹3L+ monthly revenue. Incredible results.',
    background: 'bg-brand'
  },
  {
    author: 'Suresh Mathad',
    initials: 'SM',
    role: 'Director, Mathad Properties, Hubballi',
    text: 'Our new website started generating leads within the first week of going live. The team understood exactly what our real estate business needed and delivered beyond expectations.',
    background: 'bg-emerald-600'
  },
  {
    author: 'Anita Patil',
    initials: 'AP',
    role: 'Owner, Education Institute, Dharwad',
    text: 'The WhatsApp automation system they built has completely changed how we follow up with leads. We went from losing potential clients to closing 40% more deals — automatically.',
    background: 'bg-purple-600'
  }
];

export const industries: Industry[] = [
  { name: 'Real Estate', emoji: '🏠' },
  { name: 'Healthcare', emoji: '🏥' },
  { name: 'Education', emoji: '🎓' },
  { name: 'Restaurants', emoji: '🍽️' },
  { name: 'D2C Brands', emoji: '🛍️' },
  { name: 'Logistics', emoji: '🚚' },
  { name: 'Manufacturing', emoji: '🏭' }
];

export const whyChooseUs = [
  {
    title: 'Local Expertise, National Reach',
    description: 'Based in Hubballi, Karnataka. Serving startups, SMBs, and D2C brands across India with deep market understanding.',
    icon: 'MapPin'
  },
  {
    title: 'Results-First Approach',
    description: 'We measure success in leads, revenue, and growth — not just deliverables. Every project has clear KPIs from day one.',
    icon: 'BarChart3'
  },
  {
    title: 'Full-Stack Capabilities',
    description: 'Design, development, marketing, SEO, and AI automation under one roof. One agency, complete digital growth.',
    icon: 'Layers'
  },
  {
    title: 'Transparent Communication',
    description: 'Weekly updates, clear reporting, and open channels. You always know exactly what\'s being built and why.',
    icon: 'MessageSquareText'
  },
  {
    title: 'Innovation-Driven',
    description: 'We embrace modern tech — AI chatbots, automation workflows, performance campaigns — to keep you ahead of competitors.',
    icon: 'Lightbulb'
  },
  {
    title: 'Startup-Friendly Pricing',
    description: 'Agency-quality work at prices that make sense for Indian businesses. Flexible packages for every budget.',
    icon: 'IndianRupee'
  }
];

export const timeSlots = [
  '09:30 AM',
  '11:00 AM',
  '12:30 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
  '06:30 PM'
];
