'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface CardProps {
  imageUrl: string;
  title: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, className }) => (
  <div 
    className={`relative overflow-hidden rounded-lg ${className} group`}
    data-aos="fade-up"
  >
    <Image
      src={imageUrl}
      alt={title}
      fill
      className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <h3 className="text-white text-lg sm:text-xl font-montserrat font-bold text-center px-2">{title}</h3>
    </div>
  </div>
);

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
        <Card imageUrl="/images/headerbg.webp" title="Beach Relaxation" className="h-48 sm:h-64" />
        <Card imageUrl="/images/jeremy-bishop-pikyGuAmwpM-unsplash.jpg" title="Surfing" className="h-48 sm:h-64" />
        <Card imageUrl="/images/ski.jpg" title="Skiing" className="h-48 sm:h-64" />
        
        {/* Second row */}
        <Card imageUrl="/images/kalen-emsley-G1qxBDxM8vE-unsplash.jpg" title="Mountaineering" className="h-48 sm:h-64" />
        <Card 
          imageUrl="/images/safari.jpg" 
          title="Safari" 
          className="h-48 sm:h-64 sm:col-span-2" 
        />
        
        {/* Third row */}
        <Card 
          imageUrl="/images/freestocks-_3Q3tsJ01nc-unsplash.jpg" 
          title="Shopping" 
          className="h-48 sm:h-64 sm:col-span-2" 
        />
        <Card imageUrl="/images/alex-munsell-auIbTAcSH6E-unsplash.jpg" title="Food Tasting" className="h-48 sm:h-64" />
      </div>
    </section>
  );
};

export default HolidayActivities;
