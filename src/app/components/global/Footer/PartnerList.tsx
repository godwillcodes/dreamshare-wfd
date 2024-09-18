import React from 'react';

// Define the structure of the person data.
interface Person {
  id: number;
  name: string;
}

// Main component to display a list of popular people.
export default async function PartnersList() {
  // Initialize people variable to store fetched data
  let people = [];
  try {
    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY; // Make sure your API key is securely set
    const url = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`;

    // Fetch the data from the server
    const response = await fetch(url, {
      cache: 'force-cache', // Cache the response to reduce server load and speed up repeated requests
    });

    if (!response.ok) {
      throw new Error('Network response was not ok'); // Handle potential errors from the fetch request
    }

    const data = await response.json();
    people = data.results.slice(0, 6); // Limit to 6 people to keep the data manageable
  } catch (error) {
    console.error('Error fetching people:', error); // Log errors to understand what went wrong
    // You might want to handle this differently, maybe set an error state or similar
  }

  // Render the list of people
  return (
    <ul className="font-roboto space-y-3 text-center md:text-left flex md:block ">
      {people.map((person: Person) => (
        <li key={person.id} className="md:mr-4">
          <a href="#" className="text-black hover:underline hover:underline-offset-8 hover:text-red-500 text-base">
            {person.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
