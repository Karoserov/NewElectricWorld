import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Dynamically get the icon component
  const IconComponent = Icons[service.icon as keyof typeof Icons] || Icons.Zap;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <IconComponent className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        <Link 
          to={`/services#${service.id}`} 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors text-sm"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;