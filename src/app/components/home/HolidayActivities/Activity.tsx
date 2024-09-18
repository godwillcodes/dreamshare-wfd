// Activity.tsx
'use client';
import React from 'react';
import Image from 'next/image';

interface ActivityProps {
  imageUrl: string;
  title: string;
  className?: string;
}

const Activity: React.FC<ActivityProps> = ({ imageUrl, title, className }) => (
    <div
    data-aos="fade-up"
    className={`relative w-full md:h-[310px] h-[120px] shadow-2xl overflow-hidden rounded-lg transition-transform transform hover:scale-105 ${className}`}
  >
    <div className="relative w-full h-full">
      <Image
        src={imageUrl}
        alt={title}
        fill // Use fill to ensure the image covers the container
        style={{ objectFit: 'cover' }} // Use style for object-fit
        placeholder="blur"
        blurDataURL={imageUrl} // Optionally use a low-quality placeholder
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Adjust sizes as needed
      />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-70 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#B30002]">
      <h3 className="text-white text-xl font-montserrat font-bold">{title}</h3>
    </div>
  </div>
);

export default Activity;
