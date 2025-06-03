import React, { useEffect } from 'react';
import { Zap } from 'lucide-react';
import Layout from '../components/Layout/Layout';
import ServiceCard from '../components/Services/ServiceCard';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services - NewElectricWorld';
    
    // Scroll to specific service if hash is present
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <Layout>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive electrical and solar energy solutions for every need.
            Professional service from start to finish.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From residential solar installations to industrial electrical systems, 
              we provide a wide range of services to meet your energy needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Service Details</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our services in detail and discover how we can help you
              with your electrical and solar energy needs.
            </p>
          </div>

          {services.map(service => (
            <div 
              key={service.id} 
              id={service.id}
              className="bg-white rounded-lg shadow-md p-8 mb-8 scroll-mt-32"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              {/* Key Benefits */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">Key Benefits</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Professional installation by certified technicians</li>
                  <li>High-quality materials and components</li>
                  <li>Comprehensive warranty and after-sales support</li>
                  <li>Energy-efficient solutions to reduce costs</li>
                  <li>Compliance with all safety regulations and standards</li>
                </ul>
              </div>

              {/* Our Process */}
              <div>
                <h4 className="text-xl font-semibold text-blue-800 mb-3">Our Process</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Initial consultation and assessment</li>
                  <li>Detailed proposal and quotation</li>
                  <li>Design and planning</li>
                  <li>Installation and implementation</li>
                  <li>Testing and quality assurance</li>
                  <li>Handover and after-sales support</li>
                </ol>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote for your project.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;