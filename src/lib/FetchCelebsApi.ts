// src/lib/FetchCelebsApi.ts

interface Person {
  id: number;
  profile_path: string;
  name: string;
  known_for_department: string;
}

export const fetchTopRatedCelebs = async (): Promise<Person[]> => {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // Fetch popular movies
  const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const movieResponse = await fetch(moviesUrl);

  if (!movieResponse.ok) {
    throw new Error('Network response was not ok');
  }

  const movieData = await movieResponse.json();
  const popularMovies = movieData.results;

  // Extract people from popular movies
  const peopleSet = new Set<Person>();

  for (const movie of popularMovies) {
    const movieCreditsUrl = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API_KEY}`;
    const creditsResponse = await fetch(movieCreditsUrl);
    if (!creditsResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const creditsData = await creditsResponse.json();

    for (const person of creditsData.cast) {
      // Optionally, filter out older people based on their 'known_for_department'
      if (person.known_for_department === "Acting") { // Adjust this based on your criteria
        peopleSet.add({
          id: person.id,
          profile_path: person.profile_path,
          name: person.name,
          known_for_department: person.known_for_department,
        });
      }
    }
  }

  return Array.from(peopleSet);
};
