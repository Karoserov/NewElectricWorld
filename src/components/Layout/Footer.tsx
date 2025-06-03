import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Zap, Sun } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex">
                <Zap className="text-amber-500 h-6 w-6" />
                <Sun className="text-blue-300 h-6 w-6 -ml-1" />
              </div>
              <span className="font-bold text-xl text-white">NewElectricWorld</span>
            </Link>
            <p className="text-blue-200 mb-4">
              Professional electrical installations and solar energy solutions for residential,
              commercial, and industrial projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Solar Park Installation', path: '/services' },
                { name: 'Residential Solar Solutions', path: '/services' },
                { name: 'Industrial Electrical Systems', path: '/services' },
                { name: 'Commercial Building Electrical', path: '/services' },
                { name: 'Electrical Maintenance', path: '/services' },
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-300 mt-1 mr-2" />
                <span className="text-blue-200">
                  123 Main Street<br />
                  Sofia, 1000<br />
                  Bulgaria
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-300 mr-2" />
                <a href="tel:+35929876543" className="text-blue-200 hover:text-white transition-colors">
                  +359 2 987 6543
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-300 mr-2" />
                <a href="mailto:info@NewElectricWorld.bg" className="text-blue-200 hover:text-white transition-colors">
                  info@NewElectricWorld.bg
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} NewElectricWorld. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;