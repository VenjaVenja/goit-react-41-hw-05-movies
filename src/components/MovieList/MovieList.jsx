import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrendMovies } from "services/api";


export const MovieList = () => {
  const [films, setFilms] = useState([]);

  const location = useLocation();
  console.log('MovieList ', location);
 
  useEffect(() => {
    fetchTrendMovies().then(setFilms)
      // .catch(error => {
      //   setError(error);
      // })
      // .finally();
  }, []);

  return (
    <>
      <h2>Trending films</h2>
      {films &&
        films.map(({id, title, original_name}) => (
          <ul key={id}>
            <li>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}>
                {title || original_name}
              </Link>
            </li>
          </ul>
        ))}
    </>
  );
};