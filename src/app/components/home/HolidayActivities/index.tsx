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
    data-aos="fade-up"
    className={`relative w-full md:h-[310px] h-[120px] shadow-2xl overflow-hidden rounded-lg transition-transform transform hover:scale-105 ${className}`}
  >
    <div className="relative w-full h-full">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill" // Use "fill" to ensure the image covers the container
        className="object-cover"
        placeholder="blur"
        blurDataURL={imageUrl} // Optionally use a low-quality placeholder
      />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#B30002]">
      <h3 className="text-white text-xl font-montserrat font-bold">{title}</h3>
    </div>
  </div>
);

const HolidayActivities: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Whether animation should happen only once or every time you scroll up/down
    });
  }, []);

  return (
    <section className="mx-auto max-w-6xl py-6 px-8 md:px-0">
      <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-8 text-center">Discover holiday activity ideas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card imageUrl="/jeremy-bishop-pikyGuAmwpM-unsplash.jpg" title="Beach Activities" className="h-full w-full" />
        <Card imageUrl="/freestocks-_3Q3tsJ01nc-unsplash.jpg" title="Shopping Spree" className="h-full w-full" />
        <Card imageUrl="/alex-munsell-auIbTAcSH6E-unsplash.jpg" title="Local Cuisine" className="h-full w-full" />
        <Card imageUrl="/ski.jpg" title="Skiing" className="col-span-1 h-full w-full" />
        <Card imageUrl="/peter-kasprzyk-5081CW5tuz0-unsplash.jpg" title="Sight Seeing" className="col-span-2 w-full h-full" />
        <Card imageUrl="/sneha-cecil-8wH5ug37nbk-unsplash.jpg" title="Cultural Experience" className="col-span-2 w-full h-full" />
        <Card imageUrl="/safari.jpg" title="Wildlife Safari" className="col-span-1 h-full w-full" />
      </div>
    </section>
  );
};

export default HolidayActivities;
