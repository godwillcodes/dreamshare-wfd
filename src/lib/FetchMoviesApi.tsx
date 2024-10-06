'use server';

export async function fetchTopRatedMovies(page: number = 1) {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await response.json();
  return data.results;
}
