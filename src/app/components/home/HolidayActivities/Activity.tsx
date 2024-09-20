import React from 'react';
import Image from 'next/image';

interface ActivityProps {
  imageUrl: string;
  title: string;
  className?: string;
}

const Activity: React.FC<ActivityProps> = ({ imageUrl, title, className }) => (
  <div 
    className={`relative overflow-hidden rounded-lg ${className} group`}
    data-aos="fade-up"
  >
    <Image
      src={imageUrl}
      alt={title}
      fill
      priority
      className="absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <h3 className="text-white text-lg sm:text-xl font-montserrat font-bold text-center px-2">{title}</h3>
    </div>
  </div>
);

export default Activity;
