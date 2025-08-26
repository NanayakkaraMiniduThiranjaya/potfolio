'use client';

import Reveal from '../Reveal';

const Projects = () => {
  const certificates = [
    {
      title: 'Building AI Agents and Apps with Azure AI Foundry',
      issuer: 'Styava',
      issueDate: 'Issued Mar 2025',
      skills: ['Azure AI', 'AI Agents', 'AI Applications'],
      credentialLink: 'https://www.linkedin.com/in/minidu-thiranjaya-988113320/details/certifications/1756226365107/single-media-viewer/?type=DOCUMENT&profileId=ACoAAFEstrgBfAxIuc-92el0nRy56zGQtFtqVNE',
      type: 'Participation Certificate',
    },
    {
      title: 'Java Object-Oriented Programming',
      issuer: 'LinkedIn',
      issueDate: 'Issued Nov 2024',
      skills: ['Java', 'Object-Oriented Programming (OOP)'],
      credentialLink: 'https://www.linkedin.com/learning/certificates/dc760c335891a25d908506bb99f96799fbbaea249728fcdbf256b6695d933342?accountId=76664938&u=76664938&success=true&authUUID=xCXJJjYyTyyqtAkMDbLJag%3D%3D',
    },
    {
      title: 'Node.js Essential Training',
      issuer: 'LinkedIn',
      issueDate: 'Issued Nov 2024',
      skills: ['Node.js'],
      credentialLink: 'https://www.linkedin.com/learning/certificates/ee25ec467fd2e10bfdcbd84bf7a6633b92fb643504d29a1611963e405566717b?u=76664938',
    },
    {
      title: 'React.js Essential Training',
      issuer: 'LinkedIn',
      issueDate: 'Issued Nov 2024',
      skills: ['React.js'],
      credentialLink: 'linkedin.com/learning/certificates/effb272b42e6359ff9f80cf506d7b213fcf19d88e5c6ca72e0dcb71ceea017e5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BjKoscm2%2FT2K2KV3HtAvhUA%3D%3D',
    },
    {
      title: 'Spring Boot 2.0 Essential Training',
      issuer: 'LinkedIn',
      issueDate: 'Issued Nov 2024',
      skills: ['Spring Boot'],
      credentialLink: 'https://www.linkedin.com/learning/certificates/050136cc7ee75d99e0e55f40749a5678de9bac6e0e586528ab83034fed69b585?u=76664938',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Licenses & Certifications</h2>
          </Reveal>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {certificates.map((certificate, index) => (
            <Reveal key={index}>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {certificate.issuer === 'Styava' ? (
                      <img
                        src="/Styava.jpg"
                        alt="Styava Logo"
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">in</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {certificate.title}
                    </h3>
                    {certificate.type && (
                      <div className="inline-block px-2 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-medium rounded-full mb-2">
                        {certificate.type}
                      </div>
                    )}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {certificate.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                      {certificate.issueDate}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certificate.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={certificate.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      Show credential
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
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

export default Projects; 