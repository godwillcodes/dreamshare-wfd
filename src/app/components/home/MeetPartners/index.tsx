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
  // We're playing celebrity matchmaker here!
  const [people, setPeople] = useState<Person[]>([]);
  // Is the VIP room (modal) open? Probably not, you're not on the list.
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Time to stalk some celebrities... I mean, fetch data from TMDB
    const fetchPeople = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      // If this key doesn't work, blame the intern
      const url = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('People API Response:', data);
        setPeople(data.results);
      } catch (error) {
        console.error('Paparazzi failed to get the shots Sir:', error);
      }
    };

    fetchPeople();
  }, []);

  // The chosen ones. They made it to the front page!
  const initialPeople = people.slice(0, 4);
  // The B-list. They're in the modal. Hey, at least they made it!
  const remainingPeople = people.slice(4);

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Meet a partner for your best holiday</h2>
          {/* Warning: Partners may not actually go on holiday with you */}
        </div>
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {initialPeople.map((person) => (
            <PartnerCard
              key={person.id}
              person={person}
              onClick={() => console.log(`You clicked on ${person.name}. They're not interested.`)}
            />
          ))}
        </ul>
        <div className="text-center mx-auto my-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-base font-bold text-[#ff4e50] border-2 border-[#ff4e50] px-6 py-2 rounded-full
            transition-all duration-150 ease-in-out transform hover:scale-105 hover:bg-white hover:text-gray-700 hover:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-md hover:shadow-lg"
            role="button"
            aria-label="See other partners"
          >
            See other partners
            {/* AKA: "I'm not satisfied with these options" */}
          </button>
        </div>
      </div>
      <PartnersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        people={remainingPeople}
        // Where dreams of meeting celebrities go to... stay dreams
      />
    </div>
  );
};

export default MeetPartners;
