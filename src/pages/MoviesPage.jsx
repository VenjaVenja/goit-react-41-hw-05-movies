import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchSearchedMovie } from 'services/api';

export const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState('');

  useEffect(() => {
    if (searchFilm === '') {
      return;
    }

    fetchSearchedMovie(searchFilm).then(setFilms);
    // .catch(error => { setError(error) })
    // .finally()
  }, [searchFilm]);

  const onSearchFilm = searchFilm => {
    setSearchFilm(searchFilm);
  };

  return (
    <div>
      {<SearchBar onSubmit={onSearchFilm} />}
      {films &&
        films.map(({ id, title, original_name }) => (
          <ul key={id}>
            <li>
              <Link to={`/movies/${id}`}>{title || original_name}</Link>
            </li>
          </ul>
        ))}
    </div>
  );
};
