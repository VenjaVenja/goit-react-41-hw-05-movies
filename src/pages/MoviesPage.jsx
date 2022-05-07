import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchSearchedMovie } from 'services/api';

export const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState('');
  const [, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log(location);
 
  useEffect(() => {
    if (searchFilm === '') {
      return;
    }

    fetchSearchedMovie(searchFilm).then(setFilms);
    // .catch(error => { setError(error) })
    // .finally()
  }, [searchFilm]);

  const { search } = location;
  console.log(search)


  const onSearchFilm = searchFilm => {
    setSearchFilm(searchFilm);
    setSearchParams({query: searchFilm})
  };

  return (
    <div>
      {<SearchBar onSubmit={onSearchFilm} />}
      {films &&
        films.map(({ id, title, original_name }) => (
          <ul key={id}>
            <li>
              <Link
                to={`/movies/${id}`}
                // state={{ from: location }}
                state={{ from: location.pathname + location.search }}
              >
                {title || original_name}
              </Link>
            </li>
          </ul>
        ))}
    </div>
  );
};
