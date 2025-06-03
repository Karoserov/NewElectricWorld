export interface Project {
  id: string;
  title: string;
  category: 'electrical' | 'solar' | 'industrial' | 'residential';
  description: string;
  shortDescription: string;
  images: string[];
  date: string;
  location: string;
  client: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio?: string;
}