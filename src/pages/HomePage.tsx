import React, { useEffect } from 'react';
import Hero from '../components/Home/Hero';
import FeaturedServices from '../components/Home/FeaturedServices';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import Testimonials from '../components/Home/Testimonials';
import Stats from '../components/Home/Stats';
import CTASection from '../components/Home/CTASection';
import Layout from '../components/Layout/Layout';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'NewElectricWorld - Electrical & Solar Energy Solutions';
  }, []);

  return (
    <Layout>
      <Hero />
      <FeaturedServices />
      <Stats />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default HomePage;