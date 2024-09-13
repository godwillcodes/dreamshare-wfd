'use client';

import React, { useEffect, useState } from 'react';
import PartnerCard from './Partner';
import PartnersModal from './PartnersModal';

interface Person {
  id: number;
  profile_path: string;
  name: string;
  known_for_department: string;
}

const MeetPartners: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPeople(data.results);
      } catch (error) {
        console.error('Paparazzi failed to get the shots Sir:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  const initialPeople = people.slice(0, 4);
  const remainingPeople = people.slice(4);

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-montserrat font-bold tracking-tight text-gray-900">Meet a partner for your best holiday</h2>
        </div>
        {loading ? (
          <div className="flex flex-wrap justify-center gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-60 h-80 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        ) : (
          <ul role="list" className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {initialPeople.map((person) => (
              <PartnerCard
                key={person.id}
                person={person}
                onClick={() => console.log(`You clicked on ${person.name}. They're not interested.`)}
              />
            ))}
          </ul>
        )}
        <div className="text-center mx-auto my-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm font-montserrat font-bold leading-6 text-white bg-[#B30002] px-6 py-2 rounded-full
              transition-all duration-150 ease-in-out transform hover:text-white hover:bg-[#ff4e50]
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-md hover:shadow-lg"
            role="button"
            aria-label="See other partners"
          >
            See other partners
          </button>
        </div>
      </div>
      <PartnersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        people={remainingPeople}
      />
    </div>
  );
};

export default MeetPartners;
