import Reveal from '../Reveal';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
          </Reveal>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal className="space-y-6">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I&apos;m an organized and efficient person with an enquiring mind and also I&apos;m a good listener. 
                Eager to leverage my education and learnings to tackle challenges and make a positive impact.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                A quick learner with excellent communication skills and a collaborative mindset, 
                seeking an entry-level opportunity to grow and develop within a supportive team.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Strengths</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Team Collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Quick Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-400">Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal className="space-y-6">
            <div className="relative group bg-white/80 dark:bg-gray-700/60 p-6 rounded-2xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-600 overflow-hidden">
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex justify-center">
                <Image
                  src="/about.png"
                  alt="About Me"
                  width={320}
                  height={320}
                  className="rounded-xl object-cover shadow-2xl ring-1 ring-gray-200/60 dark:ring-gray-600/60 transition-transform duration-300 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About; 