'use client';

import React, { useEffect, useState } from 'react';
import DreamshareCard from './Card';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
}

const HowDreamshareWorks: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [visibleMovies, setVisibleMovies] = useState<number>(3);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('API Response:', data); // Console log the entire response
        setMovies(prevMovies => [...prevMovies, ...data.results]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [page]);

  const handleSeeMore = () => {
    setVisibleMovies(prevVisible => prevVisible + 3);
    if (visibleMovies + 3 > movies.length) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <section className="mx-auto max-w-6xl py-6 px-8 md:px-0">
      <h2 className="text-left font-montserrat md:text-center lg:text-center text-3xl font-bold py-8">
        How Dreamshare Works
      </h2>
      <div className="grid grid-cols-1 pt-4 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {movies.slice(0, visibleMovies).map((movie) => (
          <DreamshareCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
      {visibleMovies < movies.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleSeeMore}
            className="text-sm font-montserrat font-bold leading-6 text-white bg-[#B30002] px-6 py-2 rounded-full
          transition-all duration-150 ease-in-out transform   hover:text-white hover:border-[#ff4e50]
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-md hover:shadow-lg"
          >
            See More Cards
          </button>
        </div>
      )}
    </section>
  );
};

export default HowDreamshareWorks;
