import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchSearchedMovie } from 'services/api';

export const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const searchQuery = searchParams.get('query');

  console.log(searchQuery);

  
  useEffect(() => {
    if (searchFilm === '') {
      return;
    }
    fetchSearchedMovie(searchFilm).then(setFilms);
    // .catch(error => { setError(error) })
    // .finally()
  }, [searchFilm]);


  useEffect(() => {
    if (searchQuery === '' || searchQuery === null) {
      return;
    }
    fetchSearchedMovie(searchQuery).then(setFilms);
  }, [searchQuery]);
  


  const onSearchFilm = searchFilm => {
    setSearchFilm(searchFilm);
    setSearchParams({query: searchFilm})
  };

  return (
    <div>
      {<SearchBar onSubmit={onSearchFilm} />}
      {films && searchQuery &&
       <ul>
          {films.map(({ id, title, original_name }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location.pathname + location.search }}>
                {title || original_name}
              </Link>
            </li>
          ))}
        </ul>}
    </div>
  );
};
