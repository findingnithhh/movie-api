import React, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const url = "https://imdb8.p.rapidapi.com/auto-complete?q=game";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "541145e656mshb56a45ade3d8b03p199aa4jsn0b5e20f2ecf4",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies(result.d);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie Suggestions</h1>
      <ul>
        {movies.map((item) => (
          <div key={item.id}>
            <img src={item.i.imageUrl} alt="" />
            <p>{item.l}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
