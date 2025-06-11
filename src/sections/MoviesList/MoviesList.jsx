// rest api: http://www.omdbapi.com/?s=superman&apikey=1f68c77e
// using this rest api, make a react component (with no styles for now) 
// for the most recnt movies, maybe you can have a array of "most recent" movies and 
// then seach it using the api: http://www.omdbapi.com/?s=<most recent>&apikey=1f68c77e
// make it simple, in react and javascript

import { useEffect, useState } from "react";

// Replace with your actual recent movie titles

const MoviesList = ({moviesList}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const allMovies = [];

      for (const title of moviesList) {
        try {
          console.log("gettin movies")
          const response = await fetch(
            `http://www.omdbapi.com/?s=${encodeURIComponent(title)}&apikey=1f68c77e`
          );

          if (!response.ok) throw new Error("Network response was not ok");

          const data = await response.json();

          if (data.Search) {
            const firstResult = data.Search[0];
            if (firstResult) allMovies.push(firstResult);
          }
        } catch (err) {
          console.error(`Error fetching for "${title}":`, err);
        }
      }

      setMovies(allMovies);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Most Recent Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <>
          <li key={index}>
            {movie.Title} ({movie.Year})
          </li>
          <img src={movie.Poster} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
