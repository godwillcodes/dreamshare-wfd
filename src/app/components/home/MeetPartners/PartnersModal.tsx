'use client';

import React from 'react';
import Image from 'next/image';

interface Person {
  id: number;
  profile_path: string;
  name: string;
  known_for_department: string;
}

interface PartnersModalProps {
  isOpen: boolean;
  onClose: () => void;
  people: Person[];
}

const PartnersModal: React.FC<PartnersModalProps> = ({ isOpen, onClose, people }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold font-montserrat text-gray-900">Other Partners</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-grow p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {people.map((person) => (
              <div key={person.id} className="flex flex-col items-center">
                <Image
                  className="w-32 h-32 rounded-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.name}
                  width={128}
                  height={128}
                />
                <h3 className="mt-2 font-montserrat text-sm font-medium text-gray-900">{person.name}</h3>
                <p className="text-xs text-gray-500">{person.known_for_department}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersModal;
