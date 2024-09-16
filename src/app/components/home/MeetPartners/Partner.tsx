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

  // Function to truncate the biography to a maximum of 20 characters
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <li onClick={onClick} className="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
      <Image
        className="mx-auto h-56 w-56 rounded-full object-cover"
        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
        alt={person.name}
        width={224}
        height={224}
        loading="lazy"
        placeholder="blur"
        blurDataURL="/user-hands-svgrepo-com.svg"
      />
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
