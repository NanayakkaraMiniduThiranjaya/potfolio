'use client';

import Reveal from '../Reveal';

const Projects = () => {
  const projects = [
    {
      title: 'Centralized Digital Mining Management System for Sri Lanka (CeylonMine)',
      year: '2025',
      description: 'This project involved designing a centralized system for the digitization and management of mining industry processes. Key functionalities include licensing, royalty calculations, real-time compliance tracking, mapping of mining sites, and regulatory branches. The system aims to facilitate transparency and sustainability in the mining sector.',
      technologies: ['Next.js', 'Flask'],
      image: '/about.png', // Using existing image as fallback
    },
    {
      title: 'Real-Time Event Ticketing System',
      year: '2024',
      description: 'This project focused on developing a real-time event ticketing system. Users can book tickets, view events, and receive instant updates on ticket availability. The project emphasized handling real-time data, user authentication, and integrating dynamic features for a seamless user experience.',
      technologies: ['React.js', 'Node.js', 'Java'],
      image: '/about.png', // Using existing image as fallback
    },
    {
      title: 'Zero Hunger Website Development',
      year: 'March 2024',
      description: 'This project involved designing a responsive website for Zero Hunger Awareness. It was a collaborative effort with the Web Development team at the University of Westminster. The website features a shop interface, a feedback form, and a content page specifically on "Youth Engagement in Sustainable Food Systems."',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '/zero-hunger.png',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
          </Reveal>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-600">
                <div className="h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="fallback hidden items-center justify-center text-gray-400 text-sm">
                    Project Image
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                      {project.title}
                    </h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 