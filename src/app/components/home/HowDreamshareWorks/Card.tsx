import React from 'react';
import Image from 'next/image';

interface DreamshareCardProps {
  posterPath: string;
  title: string;
  overview: string;
  releaseDate: string;
}

// Memoize the component to avoid unnecessary re-renders
const DreamshareCard: React.FC<DreamshareCardProps> = React.memo(({ posterPath, title, overview, releaseDate }) => {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden card-bg group transition-transform duration-300 ease-in-out transform hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        layout="fill"
        objectFit="cover"
        priority
        placeholder="blur"
        blurDataURL={`https://image.tmdb.org/t/p/w500${posterPath}?blurred`} // Optional: Add a blurred placeholder image URL
      />
      <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
        <div className="bg-[#FF4E50] text-white py-2 px-6 rounded-full self-start group-hover:bg-[#FF2A2A] transition-colors duration-300 ease-in-out">
          <h3 className="text-sm font-montserrat uppercase font-light">{new Date(releaseDate).getFullYear()}</h3>
        </div>
        <h3 className="text-xl font-montserrat font-bold text-white py-6">{title}</h3>
        <p className="text-white font-roboto text-sm line-clamp-3">{overview}</p>
      </div>
    </div>
  );
});

export default DreamshareCard;
