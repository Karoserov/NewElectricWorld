import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Industrial Solar Park - 5MW',
    category: 'solar',
    description: 'Complete installation of a 5MW solar park for industrial use. The project included full electrical system design, panel installation, inverter setup, and grid connection. The system now provides 60% of the client\'s total energy needs, significantly reducing their carbon footprint and energy costs.',
    shortDescription: '5MW solar park installation with complete electrical systems and grid integration.',
    images: [
      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg',
      'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg',
      'https://images.pexels.com/photos/421888/pexels-photo-421888.jpeg'
    ],
    date: '2023-08-15',
    location: 'Sofia Region, Bulgaria',
    client: 'Industrial Manufacturing Co.',
    featured: true
  },
  {
    id: '2',
    title: 'Commercial Building Electrical System',
    category: 'electrical',
    description: 'Complete electrical installation for a new 12-story office building. Our team designed and implemented all power systems, lighting, emergency power, and smart building controls. The project included energy-efficient solutions that resulted in a 30% reduction in power consumption compared to traditional systems.',
    shortDescription: 'Complete electrical systems for a modern 12-story commercial building.',
    images: [
      'https://images.pexels.com/photos/236722/pexels-photo-236722.jpeg',
      'https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg',
      'https://images.pexels.com/photos/3694341/pexels-photo-3694341.jpeg'
    ],
    date: '2023-05-20',
    location: 'Plovdiv, Bulgaria',
    client: 'Plovdiv Business Center',
    featured: true
  },
  {
    id: '3',
    title: 'Residential Solar Roof Installation',
    category: 'residential',
    description: 'Installation of solar panels on a residential property, covering 80% of the roof area. The system provides up to 12kW of power, making the house nearly energy-independent during daylight hours. Battery storage was also installed to provide power during evening hours and cloudy days.',
    shortDescription: '12kW residential solar installation with battery storage.',
    images: [
      'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
      'https://images.pexels.com/photos/4079820/pexels-photo-4079820.jpeg'
    ],
    date: '2023-11-10',
    location: 'Varna, Bulgaria',
    client: 'Private Residence'
  },
  {
    id: '4',
    title: 'Industrial Factory Electrical Upgrade',
    category: 'industrial',
    description: 'Complete overhaul of the electrical systems in a manufacturing facility. The project involved upgrading the main distribution boards, installing new cable management systems, implementing modern automation controls, and enhancing safety systems throughout the facility.',
    shortDescription: 'Factory electrical systems upgrade with modern automation controls.',
    images: [
      'https://images.pexels.com/photos/668296/pexels-photo-668296.jpeg',
      'https://images.pexels.com/photos/4481324/pexels-photo-4481324.jpeg'
    ],
    date: '2022-09-05',
    location: 'Burgas, Bulgaria',
    client: 'Burgas Manufacturing Ltd.',
    featured: true
  },
  {
    id: '5',
    title: 'Smart Home Electrical Systems',
    category: 'residential',
    description: 'Design and installation of complete smart home electrical systems for a luxury villa. The project included intelligent lighting controls, automated climate control, security systems integration, and voice-controlled home automation. All systems can be controlled remotely via smartphone.',
    shortDescription: 'Comprehensive smart home electrical and automation systems.',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/3183646/pexels-photo-3183646.jpeg'
    ],
    date: '2023-03-18',
    location: 'Sofia, Bulgaria',
    client: 'Private Residence'
  },
  {
    id: '6',
    title: 'Community Solar Farm Project',
    category: 'solar',
    description: 'Development of a 2MW community solar farm serving multiple residential and commercial clients. The project included site selection, system design, installation of over 4,000 solar panels, and connection to the local grid. The farm now provides clean energy to over 500 households in the area.',
    shortDescription: '2MW community solar farm providing energy to 500+ households.',
    images: [
      'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
      'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg'
    ],
    date: '2022-07-12',
    location: 'Ruse Region, Bulgaria',
    client: 'Ruse Energy Cooperative'
  }
];