import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  title: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, className }) => (
  <div data-aos="fade-up" className={`relative overflow-hidden rounded-lg ${className}`}>
    <Image
      src={imageUrl}
      alt={title}
      fill
      className="absolute inset-0 -z-20 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <h3 data-aos="fade-up" className="text-white text-xl font-montserrat font-bold">{title}</h3>
    </div>
  </div>
);

const HolidayActivities: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl py-6 px-8 md:px-0">
      <h2 className="text-3xl font-montserrat font-bold mb-8 text-center">Discover holiday activity ideas</h2>
      
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First row */}
        <Card imageUrl="/headerbg.webp" title="Beach Relaxation" className="h-64" />
        <Card imageUrl="/headerbg.webp" title="Mountain Hiking" className="h-64" />
        <Card imageUrl="/headerbg.webp" title="City Tour" className="h-64" />
        
        {/* Second row */}
        <Card imageUrl="/headerbg.webp" title="Scuba Diving" className="col-span-1 h-64" />
        <Card imageUrl="/headerbg.webp" title="Cultural Experience" className="col-span-2 h-64" />
        
        {/* Third row */}
        <Card imageUrl="/headerbg.webp" title="Food Tasting" className="col-span-2 h-64" />
        <Card imageUrl="/headerbg.webp" title="Wildlife Safari" className="col-span-1 h-64" />
      </div>
    </section>
  );
};

export default HolidayActivities;
