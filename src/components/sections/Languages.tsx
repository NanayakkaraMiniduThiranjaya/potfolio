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
      { name: 'PostgreSQL', slug: 'postgresql' }
    ]
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
      { name: 'Express.js', slug: 'express' }
    ],
  },
];

const Languages = () => {
  const [activeKey, setActiveKey] = useState<string>('languages');
  const activeCategory = categories.find((c) => c.key === activeKey) ?? categories[0];

  return (
    <section id="languages" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Technical Skills & Technologies</h2>
          </Reveal>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveKey(cat.key)}
              className={`px-4 py-2 rounded-full text-sm transition-colors border ${
                activeKey === cat.key
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-gray-800/10 dark:bg-gray-700/40 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {activeCategory.items.map((item) => (
            <Reveal key={item.name}>
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-md border border-gray-200 dark:border-gray-700">
                {/* Using img for remote icons to avoid Next Image domain config */}
                <img
                  src={iconUrl(item.slug)}
                  alt={`${item.name} icon`}
                  className="w-6 h-6 object-contain"
                />
                <span className="font-medium text-gray-900 dark:text-gray-100">{item.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
