import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-blue-800/90"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Energy Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and discover how our electrical and solar 
            solutions can power your home or business more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;