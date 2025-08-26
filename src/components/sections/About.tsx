import Reveal from '../Reveal';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </Reveal>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                I&apos;m an organized and efficient person with an enquiring mind and also I&apos;m a good listener. 
                Eager to leverage my education and learnings to tackle challenges and make a positive impact.
              </p>
              
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                A quick learner with excellent communication skills and a collaborative mindset, 
                seeking an entry-level opportunity to grow and develop within a supportive team.
              </p>
              
              <div className="pt-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Key Strengths
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Problem Solving
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Team Collaboration
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Quick Learning
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Communication
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative glass rounded-3xl p-8 shadow-2xl">
                <div className="flex justify-center">
                  <div className="relative group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/about.png"
                      alt="About Me"
                      width={400}
                      height={400}
                      className="rounded-2xl shadow-2xl ring-2 ring-white/20"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About; 