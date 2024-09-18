'use client';

import React, { useEffect, useState } from 'react';
import DreamshareCard from './Card'; // Update the import if the file path differs
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
}

const ChevronDownIcon: React.FC = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

const ChevronUpIcon: React.FC = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
  </svg>
);

const HowDreamshareWorks: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [visibleMovies, setVisibleMovies] = useState<number>(3);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [showSeeLess, setShowSeeLess] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // Start loading

      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(prevMovies => [...prevMovies, ...data.results]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchMovies();
  }, [page]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    // Update showSeeLess based on visibleMovies
    setShowSeeLess(visibleMovies > 9);
  }, [visibleMovies]);

  const handleSeeMore = () => {
    setVisibleMovies(prevVisible => prevVisible + 3);
    if (visibleMovies + 3 > movies.length) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleSeeLess = () => {
    setVisibleMovies(3);
  };

  return (
    <section className="mx-auto max-w-6xl py-6 px-8 md:px-0">
      <h2 className="text-left font-montserrat md:text-center lg:text-center text-2xl md:text-3xl font-bold py-8">
        How Dreamshare Works
      </h2>

      {loading && (
        <div className="text-center py-6">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-[#B30002] rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-500 mt-2">Loading...</p>
        </div>
      )}

      {!loading && (
        <>
          <div className="grid grid-cols-1 pt-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.slice(0, visibleMovies).map((movie, index) => (
              <DreamshareCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                releaseDate={movie.release_date}
                data-aos="fade-up"
                data-aos-delay={(index * 100).toString()} // Stagger delay for each card
              />
            ))}
          </div>

          <div className="text-center mt-8 flex justify-center gap-4">
            {visibleMovies < movies.length && !showSeeLess && (
              <button
                onClick={handleSeeMore}
                className="text-sm font-montserrat font-bold leading-6 text-white bg-[#B30002] px-6 py-2 rounded-full
                transition-all duration-150 ease-in-out transform hover:text-white hover:bg-[#ff4e50]
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-md hover:shadow-lg flex items-center gap-2"
              >
                See More
                <ChevronDownIcon />
              </button>
            )}

            {showSeeLess && (
              <button
                onClick={handleSeeLess}
                className="text-sm font-montserrat font-bold leading-6 text-white bg-[#B30002] px-6 py-2 rounded-full
                transition-all duration-150 ease-in-out transform hover:text-white hover:bg-[#ff4e50]
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-md hover:shadow-lg flex items-center gap-2"
              >
                See Less
                <ChevronUpIcon />
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default HowDreamshareWorks;
