'use client';

import React, { useEffect, useState } from 'react';
import PartnerCard from './Partner';
import PartnersModal from './PartnersModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { sendGTMEvent } from '@next/third-parties/google'

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
    AOS.init({
      once: false,
      duration: 600,
      easing: 'ease-out-cubic',
    });

    const fetchPeople = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

      // Fetch top-rated movies
      const moviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
      
      try {
        const movieResponse = await fetch(moviesUrl);
        if (!movieResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const movieData = await movieResponse.json();
        const topMovies = movieData.results;

        // Extract people from top movies
        const peopleSet = new Set<Person>();

        for (const movie of topMovies) {
          const movieCreditsUrl = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`;
          const creditsResponse = await fetch(movieCreditsUrl);
          if (!creditsResponse.ok) {
            throw new Error('Network response was not ok');
          }
          const creditsData = await creditsResponse.json();
          
          for (const person of creditsData.cast) {
            peopleSet.add({
              id: person.id,
              profile_path: person.profile_path,
              name: person.name,
              known_for_department: person.known_for_department,
            });
          }
        }

        setPeople(Array.from(peopleSet));
      } catch (error) {
        console.error('Failed to get the people:', error);
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
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold tracking-tight text-gray-900">
            Meet a partner for your best holiday
          </h2>
        </div>
        {loading ? (
          <div className="flex flex-wrap justify-center mt-5 gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-60 h-60 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
        ) : (
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {initialPeople.map((person, index) => (
              <li key={person.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <PartnerCard
                  person={person}
                  onClick={() => console.log(`You clicked on ${person.name}. They're not interested.`)}
                />
              </li>
            ))}
          </ul>
        )}
        <div className="text-center mx-auto my-10" data-aos="fade-up" data-aos-delay="400">
          <button
           onClick={() => {
              // Open the modal
              setIsModalOpen(true);   
              // Send GTM event
              sendGTMEvent({ event: 'seeOtherPartnersClick', value: 'partnersModal' });
            }}
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
