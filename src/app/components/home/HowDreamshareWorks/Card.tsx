'use client';

import React from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

interface DreamshareCardProps {
  posterPath: string;
  title: string;
  overview: string;
  releaseDate: string;
  'data-aos'?: string; // Optional, to allow for AOS attribute
  'data-aos-delay'?: string; // Optional, for delay in animation
}

const DreamshareCard: React.FC<DreamshareCardProps> = React.memo(({ posterPath, title, overview, releaseDate, 'data-aos': aos, 'data-aos-delay': aosDelay }) => {
  return (
    <div
      data-aos={aos}
      data-aos-delay={aosDelay}
      className="relative h-[400px] shadow-2xl rounded-lg overflow-hidden card-bg group transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        fill
        className="object-cover"
        priority
        placeholder="blur"
        blurDataURL={`https://image.tmdb.org/t/p/w500${posterPath}?blurred`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
        <div className="bg-[#FF4E50] text-white py-2 px-6 rounded-full self-start group-hover:bg-[#FF2A2A] transition-colors duration-300 ease-in-out">
          <h3 className="text-sm font-montserrat uppercase font-light">{new Date(releaseDate).getFullYear()}</h3>
        </div>
        <h3 className="text-xl font-montserrat font-bold text-white py-6">{title}</h3>
        <p className="text-white font-roboto text-base line-clamp-3">{overview}</p>
      </div>
    </div>
  );
});

DreamshareCard.displayName = 'DreamshareCard';

export default DreamshareCard;
