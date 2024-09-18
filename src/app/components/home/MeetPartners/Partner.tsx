'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
    <li onClick={onClick} className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
      <div className="w-[120px] h-[120px] relative mx-auto">
        <div className="w-[120px] h-[120px] left-0 top-0 absolute">
          <Image
            className="w-[120px] h-[120px] left-0 top-0 absolute rounded-full object-cover"
            src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
            alt={person.name}
            width={120}
            height={120}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/user-hands-svgrepo-com.svg"
          />
          <Image
            className="w-[120px] h-[120px] left-0 top-0 absolute rounded-full object-cover"
            src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
            alt={person.name}
            width={120}
            height={120}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/user-hands-svgrepo-com.svg"
          />
          <Image
            className="w-[126px] h-[126px] left-[-3px] top-[-3px] absolute rounded-full object-cover"
            src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
            alt={person.name}
            width={126}
            height={126}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/user-hands-svgrepo-com.svg"
          />
        </div>
        <div className="w-8 h-8 left-[88px] top-[88px] absolute bg-[#ff4e50] rounded-full" />
        <div className="w-4 h-4 left-[96px] top-[96px] absolute bg-white rounded-full flex items-center justify-center">
          {/* Insert your SVG here */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-2 h-2 text-red-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>

        </div>
      </div>
      <h3 className="mt-6 mb-4 text-[#444444] font-montserrat text-xl font-bold leading-7 tracking-tight text-gray-900">{person.name}</h3>
      {loading ? (
        <p className="text-base font-roboto leading-6 font-light text-gray-600">Loading biography...</p>
      ) : (
        <p className="text-base font-roboto leading-6 font-light text-gray-600 mt-2">
          {truncateText(biography, 80)}
        </p>
      )}
    </li>
  );
};

export default PartnerCard;
