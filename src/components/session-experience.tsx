'use client';
import React, { useState } from 'react';

function ExperienceSection() {
  const [expanded, setExpanded] = useState(null);

  const toggleProject = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  const experiences = [
    {
      company:
        'Vietstats Economic Data Analytics and Policy Strategy Consulting Co., Ltd',
      logo: 'VS',
      period: ' August 2024 – Present',
      role: 'Data Analyst',
      desc: [
        'Developed and automated data processing workflows using Python, Excel, and Google Apps Script to collect, clean, and transform large-scale economic datasets, reducing processing time by 50% and improving overall work efficiency.',
        'Designed scalable data processing procedures and standardized input templates to optimize data collection while ensuring long-term data consistency and accuracy.',
        'Built interactive dashboards to analyze the performance of 27 banks, and created industry-level overview dashboards by aggregating financial data from publicly listed companies on the HNX and HOSE stock exchanges, providing strategic insights for Vietstats’ B2B clients.',
        'Conduct web traffic analysis (GA4), provide performance overview of each stages (acquisition, engagement, conversion).',
        'Building engagement and retention (cohort) framework, and planning on digital channel (google, facebook, email) to tap on the touchpoints.',
        'Authored analytical reports on key sectors, offering policy insights and development strategies for government and business decision-making.',
      ],
    },
    {
      company: 'YouNet Media',
      logo: 'DC',
      period: 'January 2024 - Jun 2024',
      role: 'Data Analyst Intern',
      desc: [
        'Created and maintained dashboards to track project progress and provide insights for management.',
        'Measured operational efficiency and key metrics for NLP model development.',
        'Recommended system and process improvements to increase productivity and stability.',
        'Contributed to data modeling and insights generation to optimize workflows and aid decision-making.',
      ],
    },
  ];

  return (
    <div className="space-y-8 relative z-998">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center text-blue-700 dark:text-white font-bold text-xl">
                {exp.logo}
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                  {exp.company}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>
            </div>
            <span className="text-blue-700 dark:text-blue-400 font-semibold mt-2 md:mt-0">
              {exp.role}
            </span>
          </div>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-2 mt-2">
            {exp.desc.map((i, descIndex) => (
              <li key={descIndex}>{i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
