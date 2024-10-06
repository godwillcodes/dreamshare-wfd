'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Airplane from '../../global/Icons/Airplane';

interface Person {
  id: number;
  profile_path: string;
  name: string;
  known_for_department: string;
}

interface PartnerCardProps {
  person: Person;
  onClick: () => void;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ person, onClick }) => {
  const [biography, setBiography] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBiography = async () => {
      setLoading(true);

      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/person/${person.id}?api_key=${API_KEY}&language=en-US`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBiography(data.biography || 'No biography available.');
      } catch (error) {
        console.error('Error fetching biography:', error);
        setBiography('No biography available.');
      } finally {
        setLoading(false);
      }
    };

    fetchBiography();
  }, [person.id]);

  // Function to truncate the biography to a maximum of 80 characters
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div onClick={onClick} className="group">
      <Image
        className="mx-auto h-60 w-60 object-cover object-center rounded-full group-hover:opacity-80 transition-opacity duration-300"
        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
        alt={person.name}
        width={100}
        height={100}
        loading="lazy"
        quality={100}
        placeholder="blur"
        blurDataURL="/user-hands-svgrepo-com.svg"
      />
      {/* add an svg just below the image, with an svg,   */}
      <div className="relative ml-auto -mt-20 md:-mt-16 mr-5 w-16 h-16 border-4 border-white bg-[#B30002] rounded-full flex items-center justify-center">
        <Airplane />
      </div>

      <h3 className="mt-12 mb-4 text-[#444444] font-montserrat text-xl font-bold leading-7 tracking-tight text-gray-900">{person.name}</h3>
      {loading ? (
        <p className="text-base font-roboto leading-6 font-light text-gray-600">Loading biography...</p>
      ) : (
        <p className="text-base font-roboto leading-6 font-light text-gray-600 mt-2">
          {truncateText(biography, 80)}
        </p>
      )}
    </div>
  );
};

export default PartnerCard;
