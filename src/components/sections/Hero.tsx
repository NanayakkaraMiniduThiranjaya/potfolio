import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Minidu Thiranjaya</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
          Software Engineer
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          I build exceptional digital experiences with a focus on performance,
          accessibility, and user experience. Passionate about creating innovative
          solutions to complex problems.
        </p>
        <div className="flex gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 