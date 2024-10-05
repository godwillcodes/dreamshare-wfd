// pages/index.tsx
import React, { useState } from "react";
import DreamshareCard from "./Card"; // Update if file path differs
import { fetchMovies } from "../../../lib/FetchMoviesApi";
import ChevronDownIcon from "../../global/Icons/ChevronDownIcon";
import ChevronUpIcon from "../../global/Icons/ChevronUpIcon";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
}

interface HomeProps {
  initialMovies: Movie[];
}

const Home: React.FC<HomeProps> = ({ initialMovies }) => {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [visibleMovies, setVisibleMovies] = useState<number>(3);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [showSeeLess, setShowSeeLess] = useState<boolean>(false);

  const handleSeeMore = async () => {
    setVisibleMovies((prevVisible) => prevVisible + 3);

    if (visibleMovies + 3 > movies.length && !loading) {
      setLoading(true);

      try {
        const newMovies = await fetchMovies(page + 1);
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
        setPage(page + 1);
      } catch (error) {
        console.error("Error fetching more movies:", error);
      } finally {
        setLoading(false);
      }
    }
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
            data-aos-delay={(index * 100).toString()}
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
    </section>
  );
};

export const getServerSideProps = async () => {
  const initialMovies = await fetchMovies(1); // Fetch the first page on server side
  return {
    props: {
      initialMovies,
    },
  };
};

export default Home;
