import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrendMovies } from "services/api";


export const MovieList = () => {
  const [films, setFilms] = useState([]);
 
  useEffect(() => {
    fetchTrendMovies().then(setFilms)
      // .catch(error => {
      //   setError(error);
      // })
      // .finally();
  }, []);

  return (
    <>
      <h2>Trend films</h2>
      {films &&
        films.map(({id, title, original_name}) => (
          <ul key={id}>
            <li>
              <Link to={`/movies/${id}`}>
                {title || original_name}
              </Link>
            </li>
          </ul>
        ))}
    </>
  );
};