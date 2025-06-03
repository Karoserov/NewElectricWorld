import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4">
            <Link 
              to={`/projects/${project.id}`} 
              className="inline-flex items-center text-white font-medium"
            >
              View Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mr-2 ${
            project.category === 'solar' 
              ? 'bg-amber-100 text-amber-800' 
              : project.category === 'electrical' 
              ? 'bg-blue-100 text-blue-800'
              : project.category === 'industrial'
              ? 'bg-purple-100 text-purple-800'
              : 'bg-green-100 text-green-800'
          }`}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.shortDescription}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(project.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {project.location}
          </div>
        </div>
        <Link 
          to={`/projects/${project.id}`} 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          View Details
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;