'use client';

import React, { useState } from 'react';
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
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(people.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, people.length);
  const paginatedPeople = people.slice(startIndex, endIndex);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold font-montserrat text-gray-900">Other Partners</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto flex-grow p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {paginatedPeople.map((person) => (
              <div key={person.id} className="flex flex-col items-center">
                <Image
                  className="w-32 h-32 rounded-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.name}
                  width={128}
                  height={128}
                />
                <h3 className="mt-2 font-montserrat text-sm font-medium text-gray-900">{person.name}</h3>
                <p className="text-xs font-roboto text-gray-500">{person.known_for_department}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between p-4 border-t border-gray-200">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-[#B30002] text-white px-4 py-2 rounded-md hover:bg-[#ff4e50] disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-700">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="bg-[#B30002] text-white px-4 py-2 rounded-md hover:bg-[#ff4e50] disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersModal;
