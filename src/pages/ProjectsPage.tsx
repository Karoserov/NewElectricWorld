import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import ProjectCard from '../components/Projects/ProjectCard';
import { projects } from '../data/projects';
import { Project } from '../types';

const ProjectsPage: React.FC = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    document.title = 'Our Projects - NewElectricWorld';
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  };

  return (
    <Layout>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our portfolio of completed electrical and solar installations,
            showcasing our expertise and commitment to quality.
          </p>
        </div>
      </section>

      {/* Projects Filters */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'solar', 'electrical', 'industrial', 'residential'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter === 'all' ? 'All Projects' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-500">
                No projects match your current filter. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Have a Similar Project in Mind?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us to discuss how we can help you with your electrical or solar energy project.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;