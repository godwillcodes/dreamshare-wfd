'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Activity from './Activity';

const HolidayActivities: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="mx-auto max-w-6xl py-6 px-4 sm:px-6 md:px-8">
      <h2 
        className="text-2xl sm:text-3xl font-montserrat font-bold mb-6 sm:mb-8 text-center"
        data-aos="fade-down"
      >
        Discover holiday activities ideas
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First row */}
        <Activity imageUrl="/images/headerbg.webp" title="Beach Relaxation" className="h-48 sm:h-64" />
        <Activity imageUrl="/images/jeremy-bishop-pikyGuAmwpM-unsplash.jpg" title="Surfing" className="h-48 sm:h-64" />
        <Activity imageUrl="/images/ski.jpg" title="Skiing" className="h-48 sm:h-64" />
        
        {/* Second row */}
        <Activity imageUrl="/images/kalen-emsley-G1qxBDxM8vE-unsplash.jpg" title="Mountaineering" className="h-48 sm:h-64" />
        <Activity 
          imageUrl="/images/safari.jpg" 
          title="Safari" 
          className="h-48 sm:h-64 sm:col-span-2" 
        />
        
        {/* Third row */}
        <Activity 
          imageUrl="/images/freestocks-_3Q3tsJ01nc-unsplash.jpg" 
          title="Shopping" 
          className="h-48 sm:h-64 sm:col-span-2" 
        />
        <Activity imageUrl="/images/alex-munsell-auIbTAcSH6E-unsplash.jpg" title="Food Tasting" className="h-48 sm:h-64" />
      </div>
    </section>
  );
};

export default HolidayActivities;
