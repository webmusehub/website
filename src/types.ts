export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  substeps: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  metric: string;
  emoji: string;
  url?: string;
}

export interface Testimonial {
  author: string;
  initials: string;
  role: string;
  text: string;
  background?: string;
}

export interface Industry {
  name: string;
  emoji: string;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  website?: string;
  service: string;
  date: string;
  timeSlot: string;
  createdAt: string;
  status: 'confirmed' | 'cancelled';
}
