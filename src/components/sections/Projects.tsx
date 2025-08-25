'use client';

import { useState } from 'react';
import Image from 'next/image';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
      image: '/projects/ecommerce.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      link: '#',
      github: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: '/projects/taskmanager.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Next.js and Tailwind CSS.',
      image: '/projects/portfolio.jpg',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
                  {/* Replace with actual project images */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Project Image
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 