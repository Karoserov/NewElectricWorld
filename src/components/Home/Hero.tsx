import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Powering the Future with Electrical Excellence
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Expert electrical installations and solar energy solutions for residential, 
            commercial, and industrial projects. Building a sustainable future with every connection.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/projects" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Scrolldown Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <div className="h-8 w-0.5 bg-white mb-2"></div>
        <span className="text-sm">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;