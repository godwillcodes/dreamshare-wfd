"use client";

import React, { useState } from "react";
import DreamshareCard from "./Card"; 
import { fetchTopRatedMovies } from "@/lib/FetchMoviesApi";
import { sendGTMEvent } from "@next/third-parties/google";
import ChevronDownIcon from "../../global/Icons/ChevronDownIcon";
import ChevronUpIcon from "../../global/Icons/ChevronUpIcon";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
}

const HowDreamshareWorks: React.FC<{ initialMovies: Movie[] }> = ({ initialMovies }) => {
  const [visibleMovies, setVisibleMovies] = useState<number>(3);
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Movie[]>(initialMovies);

  const handleSeeMore = async () => {
    const nextPage = page + 1;
    const newMovies = await fetchTopRatedMovies(nextPage);
    
    setMovies((prevMovies) => [...prevMovies, ...newMovies]);
    setVisibleMovies((prevVisible) => prevVisible + 3);
    setPage(nextPage);

    // Send GTM event for "See More"
    sendGTMEvent({
      event: "seeMoreMoviesClick",
      value: "seeMoreMoviesButton",
    });
  };

  const handleSeeLess = () => {
    setVisibleMovies(3);
  };

  return (
    <section className="mx-auto max-w-6xl bg-white py-6 px-8 md:px-0">
      <h2 className="font-montserrat text-black text-center text-2xl md:text-3xl font-bold py-8">
        How Dreamshare Works
      </h2>

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
        {visibleMovies < movies.length && (
          <button
            onClick={handleSeeMore}
            className="text-sm font-montserrat font-bold leading-6 text-white bg-[#B30002] px-6 py-2 rounded-full
      transition-all duration-150 ease-in-out transform hover:text-white hover:bg-[#ff4e50]
      focus:outline-none  shadow-md hover:shadow-lg flex items-center gap-2"
          >
            See More
            <ChevronDownIcon />
          </button>
        )}

        {visibleMovies > 3 && (
          <button
            onClick={handleSeeLess}
            className="text-sm font-montserrat font-bold leading-6 text-white bg-[#B30002] px-6 py-2 rounded-full
      transition-all duration-150 ease-in-out transform hover:text-white hover:bg-[#ff4e50]
      focus:outline-none  shadow-md hover:shadow-lg flex items-center gap-2"
          >
            See Less
            <ChevronUpIcon />
          </button>
        )}
      </div>
    </section>
  );
};

export default HowDreamshareWorks;
