'use client';
import React, { useLayoutEffect, useState } from 'react';

function SessionProjects() {
  const [innerWidth, setInnerWidth] = useState(0);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      setInnerWidth(width);
    };

    setInnerWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-12 max-w-5xl mx-auto">
      <ul className="space-y-8">
        <li className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="">
            <div className="space-y-5 relative z-10">
              <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 tracking-tight">
                Financial Analysis project using Power BI
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300  list-disc px-4">
                <li className="text-base">
                  Utilized Power Query to clean, transform, and shape datasets
                  from multiple sources, ensuring data accuracy and consistency
                  prior to visualization.
                </li>
                <li>
                  Developed advanced DAX measures and calculated columns to
                  build dynamic KPIs such as profit margins, cost ratios, and
                  growth rates for in-depth financial analysis.
                </li>
                <li>
                  Designed interactive Power BI dashboards with drill-down
                  features, enabling stakeholders to analyze key financial
                  metrics and evaluate bank and industry performance using data
                  from HOSE and HNX-listed companies
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-sm overflow-hidden">
              <embed
                src="/Project Báo cáo tài chính doanh nghiệp.pdf"
                width="100%"
                height="800px"
              ></embed>
            </div>
            <div className="flex justify-center mt-5">
              <a
                href="/BÙI THỊ HUYỀN TRANG-hcm.pdf"
                download
                className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Download Report Now!
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SessionProjects;
