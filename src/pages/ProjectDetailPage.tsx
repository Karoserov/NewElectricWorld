import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, User, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout/Layout';
import { projects } from '../data/projects';
import { Project } from '../types';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (id) {
      const foundProject = projects.find(p => p.id === id);
      
      if (foundProject) {
        setProject(foundProject);
        document.title = `${foundProject.title} - NewElectricWorld`;

        // Find related projects (same category, excluding current)
        const related = projects
          .filter(p => p.category === foundProject.category && p.id !== id)
          .slice(0, 3);
        setRelatedProjects(related);
      }
    }
  }, [id]);

  const handlePrevImage = () => {
    if (project) {
      setActiveImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (project) {
      setActiveImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h2 className="text-2xl font-bold text-gray-700">Project not found</h2>
          <p className="text-gray-600 mt-4 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Project Header */}
      <section className="pt-32 pb-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-200 hover:text-white mb-4"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-100">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              {new Date(project.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              {project.location}
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              {project.client}
            </div>
            <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
              project.category === 'solar' 
                ? 'bg-amber-500/20 text-amber-200' 
                : project.category === 'electrical' 
                ? 'bg-blue-500/20 text-blue-200'
                : project.category === 'industrial'
                ? 'bg-purple-500/20 text-purple-200'
                : 'bg-green-500/20 text-green-200'
            }`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={project.images[activeImageIndex]} 
                alt={`${project.title} - Image ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 text-blue-900" />
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 text-blue-900" />
                </button>
              </>
            )}
          </div>

          {project.images.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Thumbnails for larger screens */}
          {project.images.length > 1 && (
            <div className="hidden md:grid grid-cols-4 gap-4 mt-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-colors ${
                    index === activeImageIndex ? 'border-blue-600' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Project Description</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">{project.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Project Details</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-semibold w-32 text-gray-700">Client:</span>
                    <span className="text-gray-600">{project.client}</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32 text-gray-700">Location:</span>
                    <span className="text-gray-600">{project.location}</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32 text-gray-700">Completion:</span>
                    <span className="text-gray-600">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                      })}
                    </span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-32 text-gray-700">Category:</span>
                    <span className="text-gray-600">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Project Highlights</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Completed on schedule and within budget</li>
                  <li>Used high-quality materials and components</li>
                  <li>Followed all safety regulations and standards</li>
                  <li>Achieved excellent energy efficiency ratings</li>
                  <li>Received high client satisfaction rating</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map(relatedProject => (
                <Link 
                  key={relatedProject.id}
                  to={`/projects/${relatedProject.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedProject.images[0]} 
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-blue-900 mb-2">{relatedProject.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedProject.shortDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProjectDetailPage;