'use client';

import { useEffect, useState } from 'react';
import Reveal from '../Reveal';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Reveal>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Minidu Thiranjaya
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
              Software Engineer & Full-Stack Developer
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Passionate about creating innovative solutions and building scalable applications. 
            Transforming ideas into reality through code and creativity.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/Minidu%20ThiranjayaResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </Reveal>
      </div>

      {/* Subtle parallax effect */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero; 