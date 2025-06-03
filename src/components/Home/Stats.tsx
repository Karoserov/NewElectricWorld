import React, { useEffect, useState } from 'react';
import { Users, Calendar, Building, Zap } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  duration: number;
}

const Stats: React.FC = () => {
  const [isInView, setIsInView] = useState(false);

  const stats: Stat[] = [
    {
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      value: 150,
      label: 'Projects Completed',
      duration: 2000,
    },
    {
      icon: <Building className="h-8 w-8 text-blue-500" />,
      value: 25,
      label: 'MW Solar Installed',
      suffix: '+',
      duration: 2500,
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      value: 98,
      label: 'Satisfied Clients',
      suffix: '%',
      duration: 1500,
    },
    {
      icon: <Calendar className="h-8 w-8 text-purple-500" />,
      value: 13,
      label: 'Years Experience',
      duration: 1000,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="flex justify-center items-baseline">
                <span className="text-4xl font-bold text-blue-900">
                  {isInView ? stat.value : 0}
                </span>
                {stat.suffix && <span className="text-2xl text-blue-900">{stat.suffix}</span>}
              </div>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;