import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { team } from '../data/team';
import { User, Award, CheckCircle, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - NewElectricWorld';
  }, []);

  return (
    <Layout>
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get to know our company, our mission, and the team behind our success.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, NewElectricWorld has grown from a small local electrical 
                contractor to a leading provider of electrical and solar energy solutions 
                across Bulgaria. Our journey began with a simple mission: to deliver 
                high-quality electrical installations with exceptional customer service.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                As the demand for renewable energy grew, we expanded our services to include 
                solar energy solutions, helping businesses and homeowners reduce their carbon 
                footprint and energy costs. Today, we're proud to be at the forefront of the 
                clean energy transition in Bulgaria.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over 150 completed projects ranging from residential installations to 
                large-scale industrial systems, our experienced team continues to deliver 
                excellence in every project we undertake.
              </p>
            </div>
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg" 
                alt="Company team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide our work and define our approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
                title: 'Quality',
                description: 'We never compromise on quality, using only the finest materials and equipment in all our installations.'
              },
              {
                icon: <User className="h-10 w-10 text-blue-600" />,
                title: 'Customer Focus',
                description: 'We listen to our clients\' needs and work closely with them to deliver solutions that exceed expectations.'
              },
              {
                icon: <Award className="h-10 w-10 text-blue-600" />,
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from project planning to final installation and after-service.'
              },
              {
                icon: <Clock className="h-10 w-10 text-blue-600" />,
                title: 'Reliability',
                description: 'We deliver our projects on time and within budget, maintaining clear communication throughout the process.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who make our success possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification & Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Certifications & Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards through certifications and partnerships 
              with leading industry organizations and suppliers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
                <div className="text-center text-gray-500 font-semibold">
                  {index % 2 === 0 ? 'Partner Logo' : 'Certification'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;