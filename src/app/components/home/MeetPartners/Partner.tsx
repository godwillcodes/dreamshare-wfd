import React from 'react';
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
  return (
    <li onClick={onClick}>
      <Image
        className="mx-auto h-56 w-56 rounded-full object-cover"
        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
        alt={person.name}
        width={224}
        height={224}
      />
      <h3 className="mt-6 mb-4 text-[#444444] text-xl mont font-bold leading-7 tracking-tight text-gray-900">{person.name}</h3>
      <p className="text-base leading-6 font-light text-gray-600">{person.known_for_department}</p>
    </li>
  );
};

export default PartnerCard;
