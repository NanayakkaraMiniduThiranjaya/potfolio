import Reveal from '../Reveal';

const Experience = () => {
  const experiences = [
    {
      company: 'Digisa',
      logo: 'Dí',
      title: 'Web Development Intern',
      employmentType: 'Full-time',
      duration: 'Jun 2024 - Aug 2024 · 3 mos',
      location: '55/B, Makola North, Makola, Sri Lanka.',
      workArrangement: 'On-site',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          </Reveal>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Reveal key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{experience.logo}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                      {experience.company} · {experience.employmentType}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                      {experience.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {experience.location} · {experience.workArrangement}
                    </p>
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

export default Experience;
