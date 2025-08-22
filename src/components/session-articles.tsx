'use client';
import { articles } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react';

function SessionArticles() {
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
    <section className=" max-w-5xl mx-auto">
      <ul className="space-y-8">
        {articles.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            target='_blank'
            className='flex gap-[40px] bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
          >
            <Image src={item.img} alt="image" width={260} height={200} />
            <div>
              <h3 className='text-2xl font-semibold text-orange-600 dark:text-orange-400 tracking-tight'>
                {item.name}
              </h3>
              <div className='mt-[20px] text-gray-700 dark:text-gray-300'>
                {item.date}
              </div>

            </div>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default SessionArticles;
