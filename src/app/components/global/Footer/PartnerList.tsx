'use client';

import React, { useEffect, useState } from 'react';

interface Person {
  id: number;
  name: string;
}

const PartnersList: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPeople = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY; // Ensure the API key is correctly set in your environment variables
      const url = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Limit the number of people to 5
        setPeople(data.results.slice(0, 6));
      } catch (error) {
        setError('Failed to fetch people');
        console.error('Error fetching people:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-red-400 py-6">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 py-6">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <ul className="font-roboto space-y-3">
      {people.map((person) => (
        <li key={person.id}>
          <a href="#" className="text-[#999999] text-base">
            {person.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PartnersList;
