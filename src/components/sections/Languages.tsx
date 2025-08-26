'use client';

import { useState } from 'react';
import Reveal from '../Reveal';

type SkillItem = { name: string; slug: string };

type Category = {
  key: string;
  label: string;
  items: SkillItem[];
};

const iconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const categories: Category[] = [
  {
    key: 'languages',
    label: 'Programming Languages',
    items: [
      { name: 'Python', slug: 'python' },
      { name: 'Java', slug: 'java' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'HTML', slug: 'html5' },
      { name: 'CSS', slug: 'css3' },
    ],
  },
  {
    key: 'frameworks',
    label: 'Frameworks & Libraries',
    items: [
      { name: 'React', slug: 'react' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'Nuxt.js', slug: 'nuxtdotjs' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
      { name: 'Bootstrap', slug: 'bootstrap' },
      { name: 'Framer Motion', slug: 'framer' },
      { name: 'React Native', slug: 'react' },
    ],
  },
  {
    key: 'databases',
    label: 'Databases',
    items: [
      { name: 'MySQL', slug: 'mysql' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'Firebase', slug: 'firebase' },
      { name: 'Supabase', slug: 'supabase' },
      { name: 'PostgreSQL', slug: 'postgresql' },
    ],
  },
  {
    key: 'version',
    label: 'Version Control',
    items: [
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
    ],
  },
  {
    key: 'uiux',
    label: 'UI/UX Design',
    items: [
      { name: 'Figma', slug: 'figma' },
      { name: 'Framer', slug: 'framer' },
      { name: 'Adobe Photoshop', slug: 'adobephotoshop' },
      { name: 'Canva', slug: 'canva' },
    ],
  },
  {
    key: 'project',
    label: 'Project Management Tools',
    items: [
      { name: 'Jira', slug: 'jira' },
      { name: 'ClickUp', slug: 'clickup' },
      { name: 'Notion', slug: 'notion' },
      { name: 'MS 365', slug: 'microsoftoffice' },
    ],
  },
  {
    key: 'editors',
    label: 'Code Editors & IDEs',
    items: [
      { name: 'VS Code', slug: 'visualstudiocode' },
      { name: 'IntelliJ IDEA', slug: 'intellijidea' },
      { name: 'PyCharm', slug: 'pycharm' },
      { name: 'Android Studio', slug: 'androidstudio' },
      { name: 'GitHub Codespaces', slug: 'github' },
      { name: 'CodeBlocks', slug: 'codeblocks' },
    ],
  },
  {
    key: 'devops',
    label: 'AI Integrated DevOps Tools',
    items: [
      { name: 'GitHub Copilot', slug: 'github' },
      { name: 'Cursor AI', slug: 'cursor' },
      { name: 'Windsurf', slug: 'windsurf' },
      { name: 'Kiro', slug: 'kiro' },
      { name: 'Void', slug: 'void' },
      { name: 'Pear AI', slug: 'pear' },
      { name: 'Trae', slug: 'trae' },
      { name: 'Continue.dev', slug: 'continue' },
      { name: 'V0 Dev', slug: 'v0' },
      { name: 'Lovable', slug: 'lovable' },
      { name: 'Replit', slug: 'replit' },
      { name: 'Bolt.new', slug: 'bolt' },
      { name: 'Kimi', slug: 'kimi' },
      { name: 'Firebase Studio', slug: 'firebase' },
      { name: 'Julius AI', slug: 'julius' },
      { name: 'Docker', slug: 'docker' },
    ],
  },
  {
    key: 'llms',
    label: 'Familiar LLMs',
    items: [
      { name: 'OpenAI', slug: 'openai' },
      { name: 'Anthropic', slug: 'anthropic' },
      { name: 'DeepSeek', slug: 'deepseek' },
      { name: 'Gemini', slug: 'google' },
      { name: 'Llama', slug: 'meta' },
    ],
  },
  {
    key: 'other',
    label: 'Other',
    items: [
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'Express.js', slug: 'express' },
    ],
  },
];

const Languages = () => {
  const [activeKey, setActiveKey] = useState<string>('languages');
  const activeCategory = categories.find((c) => c.key === activeKey) ?? categories[0];

  return (
    <section id="languages" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technical Skills & Technologies
            </h2>
          </Reveal>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveKey(cat.key)}
              className={`group px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                activeKey === cat.key
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-lg scale-105'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-800 hover:border-indigo-400 dark:hover:border-indigo-400 hover:scale-105'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {activeCategory.items.map((item) => (
            <Reveal key={item.name}>
              <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={iconUrl(item.slug)}
                      alt={`${item.name} icon`}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.name}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
