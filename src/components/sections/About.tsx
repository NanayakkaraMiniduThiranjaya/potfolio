const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate Software Engineer with a strong foundation in full-stack development
              and a keen interest in building scalable applications. With expertise in modern
              technologies and best practices, I strive to create efficient and user-friendly
              solutions.
            </p>
            <p className="text-lg">
              My journey in software development began with [Your Background]. Since then,
              I've worked on various projects ranging from web applications to [Other Types of Projects].
              I'm particularly interested in [Your Interests/Specializations].
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me [Your Hobbies/Interests]. I believe in
              continuous learning and staying updated with the latest technologies and industry trends.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                  [Years] of experience in software development
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                  [Number] projects completed
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                  [Degree/Education] background
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                  Based in [Location]
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 