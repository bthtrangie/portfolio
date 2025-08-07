'use client';

import AnimatedBackground from '@/components/background-animation';
import React, { useEffect, useState, createContext } from 'react';
import SessionProjects from '@/components/session-projects';
import ExperienceSection from '@/components/session-experience';

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const saved =
      typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved) setTheme(saved);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') localStorage.setItem('theme', next);
      return next;
    });
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="h-[70px] bg-transparent">
        <div className="container mx-auto px-4 h-[60px] flex items-center justify-between">
          <nav className="flex items-center space-x-8">
            <a href="/" className="text-white font-bold text-xl">
              Portfolio
            </a>
            <ul className="flex space-x-8">
              <li>
                <a className="text-white/80" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-white/80" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-white/80" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="text-white/80" href="#resume">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4"></div>
        </div>
      </header>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`z-999 fixed top-4 left-0 right-0 flex justify-center pointer-events-none transition-all duration-300`}
      >
        <header
          className={`z-1000 w-full max-w-5xl mx-auto h-[60px] flex items-center justify-between px-6 transition-all duration-300 pointer-events-auto
            ${
              isScrolled
                ? 'bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-2xl border border-black/10 dark:border-white/10 shadow-lg'
                : 'bg-transparent'
            }
          `}
          style={{
            boxShadow: isScrolled ? '0 4px 32px 0 rgba(0,0,0,0.18)' : 'none',
          }}
        >
          <nav className="flex items-center space-x-8">
            <a
              href="/"
              className="font-bold text-xl text-black dark:text-white"
            >
              Portfolio
            </a>
            <ul className="flex space-x-6">
              <li>
                <a
                  className="text-black/80 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector('#about')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Summary
                </a>
              </li>
              <li>
                <a
                  className="text-black/80 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector('#skills')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="text-black/80 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector('#experience')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="text-black/80 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector('#projects')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-black/80 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                  href="#education"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector('#education')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Education
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full  border-none outline-none bg-black/10 dark:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="#fbbf24"
                    d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0-20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm10 9h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM4 12a1 1 0 0 1-1-1H2a1 1 0 1 1 0 2h1a1 1 0 0 1 1-1Zm14.95 7.07a1 1 0 0 1-1.41 0l-.7-.7a1 1 0 1 1 1.41-1.42l.7.71a1 1 0 0 1 0 1.41ZM6.11 6.11a1 1 0 0 1-1.41 0l-.7-.7A1 1 0 1 1 5.4 4l.7.7a1 1 0 0 1 0 1.41Zm12.02 0a1 1 0 0 1 0-1.41l.7-.7A1 1 0 1 1 20 5.4l-.7.7a1 1 0 0 1-1.18.01ZM4.22 19.78a1 1 0 0 1 0-1.41l.7-.71a1 1 0 1 1 1.41 1.42l-.7.7a1 1 0 0 1-1.41 0Z"
                  />
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="#fff"
                    d="M17.75 15.5A6.75 6.75 0 0 1 8.5 6.25a.75.75 0 0 0-.75-.75A8 8 0 1 0 18 19.25a.75.75 0 0 0-.75-.75Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>
      </div>
      <main className="h-full w-full min-h-[1438px] bg-violet-100 dark:bg-[#111111ab] transition-colors duration-300">
        <section className="max-w-5xl mx-auto w-full px-4 relative flex flex-col items-center justify-center pt-32 pb-16 text-center z-51">
          <div className="flex flex-col  items-center justify-center gap-10 w-full">
            <div className="flex flex-col items-center justify-center  flex-1 z-10 w-full">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-white/20 shadow-lg mb-6 bg-gradient-to-br from-blue-100/60 to-purple-100/60 dark:from-blue-500/30 dark:to-purple-500/30">
                <img
                  src="/avatar.jpg"
                  alt="Bùi Thị Huyền Trang"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-black/50 via-blue-300 to-purple-700 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-2 drop-shadow-lg h-[100px]">
                Bùi Thị Huyền Trang
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4 tracking-wide">
                Data Analyst
              </h2>
              <h3 className="text-black-700 dark:text-white-500 mb-4">
                Ho Chi Minh city, Viet Nam
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-4">
                <a
                  href="/BÙI THỊ HUYỀN TRANG-hcm.pdf"
                  download
                  className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT SECTION */}
        <section id="about" className="py-8 max-w-5xl mx-auto w-full px-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">
            Professional Summary
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Collected and curated over 1 million economic data records covering
            micro, macro, sectoral, and regional indicators, forming a core
            asset that enables Vietstats to provide comprehensive and reliable
            datasets.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Automated data workflows with Python, Excel, and Google Apps Script
            to collect and clean large economic datasets, cutting processing
            time by 50% and boosting efficiency.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Designed scalable data processing procedures and standardized input
            templates to optimize data collection while ensuring long-term data
            consistency and accuracy.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Built interactive dashboards to analyze the performance of 27 banks,
            and created industry-level overview dashboards by aggregating
            financial data from publicly listed companies on the HNX and HOSE
            stock exchanges, providing strategic insights for Vietstats’ B2B
            clients.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Conduct web traffic analysis (GA4), provide performance overview of
            each stages (acquisition, engagement, conversion).
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Building engagement and retention (cohort) framework, and planning
            on digital channel (google, facebook, email) to tap on the
            touchpoints.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Authored analytical reports on key sectors, offering policy insights
            and development strategies for government and business
            decision-making.
          </p>

          <p className="text-gray-500 dark:text-gray-100">
            <b>Career Objective:</b> Aspiring Data Analyst seeking to leverage
            expertise in Python, Excel, and Google Apps Script to drive
            data-driven decision-making and optimize business processes. With a
            strong foundation in Economic Mathematics from the University of
            Economics and Law, Vietnam National University HCMC (GPA 3.3/4.0),
            and hands-on experience in automating data workflows and building
            interactive dashboards at Vietstate Economic Data Analytics, I aim
            to contribute to innovative organizations by delivering actionable
            insights and scalable data solutions.
          </p>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-12 max-w-5xl mx-auto w-full px-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">
            Education
          </h2>
          <div className="bg-white/90 dark:bg-white/5 rounded-xl shadow-md p-6 border border-gray-200 dark:border-white/10">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-1">
              University of Economics and Law - Vietnam National University HCMC
              (2020 - 2024)
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Bachelor’s Degree in Faculty of Economic Mathematics
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Program: High-Quality Program
            </p>
            <p className="text-gray-700 dark:text-gray-300">GPA: 3.3 / 4.0</p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-12 max-w-5xl mx-auto w-full px-4">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">
            Core Skills
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              'Quantitative Analysis',
              'Logical Thinking & Problem-Solving',
              'Data Analysis',
              'Economic Reasoning',
              'Research & Self-Learning',
              'Working Under Pressure',
              'Teamwork',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-gradient-to-r dark:from-blue-500/80 dark:to-purple-500/80 dark:text-white text-sm font-semibold shadow hover:scale-105 transition-transform cursor-default border border-blue-200 dark:border-none"
              >
                {skill}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">
            Technical Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                Languages
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Python</li>
                <li>SQL</li>
                <li>Excel (VBA)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                Data Analysis Tools
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Excel (Advanced)</li>
                <li>Power BI</li>
                <li>Looker Studio</li>
                <li>Canva</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                Databases
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>SQL Server</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-1">
                Statistics & Modeling
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li>Economic Analysis</li>
                <li>Market Trend Analysis</li>
                <li>Statistical Analysis</li>
                <li>Hypothesis Testing</li>
                <li>Machine Learning Basics (Scikit-learn)</li>
              </ul>
            </div>
          </div>
        </section>
        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          className="py-12 max-w-5xl mx-auto w-full px-4"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">
            Professional Experience
          </h2>

          <ExperienceSection />
        </section>
        {/* EDUCATION SECTION */}
        <section id="projects" className="py-12 max-w-5xl mx-auto w-full px-4">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">
            Personal Project
          </h2>
          <SessionProjects />
        </section>
      </main>
      <AnimatedBackground />
    </ThemeContext.Provider>
  );
}
