import Reveal from '../Reveal';

const Skills = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Education</h2>
          </Reveal>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          <Reveal>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src="/globe1.png" /* replace with your Gurukula SVG path */
                  alt="Gurukula Logo"
                  className="h-10 w-10 object-contain opacity-80"
                />
                <h3 className="text-xl font-semibold">WE/KE/Gurukula National School</h3>
              </div>

              <div className="mt-6 space-y-6 text-gray-800 dark:text-gray-200">
                <div>
                  <p className="font-medium">GCE A/L Examination — Science Stream (2023)</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Passed all subjects</p>
                  
                </div>

                <div>
                  <p className="font-medium">GCE O/L Examination</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Passed all subjects</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src="/globe2.png" /* replace with your IIT SVG path */
                  alt="IIT Logo"
                  className="h-10 w-10 object-contain opacity-80"
                />
                <img
                  src="/globe3.webp" /* replace with your Gurukula SVG path */
                  alt="Gurukula Logo"
                  className="h-10 w-10 object-contain opacity-80"
                />
                <h3 className="text-xl font-semibold">INFORMATICS INSTITUTE OF TECNOLOGY (IIT)</h3>
              </div>

              <div className="mt-6 text-gray-800 dark:text-gray-200">
                <p className="font-medium">BEng (Hons) Software Engineering</p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  University of Westminster, UK — 4 years
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;