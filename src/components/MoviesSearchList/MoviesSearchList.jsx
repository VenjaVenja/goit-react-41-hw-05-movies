import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchSearchedMovie } from 'services/api';
import {
  Wrapper,
  FilsList,
  FilmsListItem,
  NotificationText
} from './MoviesSearchList.styled';
import propTypes from 'prop-types';


export const MoviesSearchList = () => {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchFilm === '') {
      return;
    }
    fetchSearchedMovie(searchFilm).then(setFilms)}, [searchFilm]);

  useEffect(() => {
    if (searchQuery === '' || searchQuery === null) {
      return;
    }
    fetchSearchedMovie(searchQuery).then(setFilms)}, [searchQuery]);
  
  const onSearchFilm = searchFilm => {
    setSearchFilm(searchFilm);
    setSearchParams({query: searchFilm})
  };

  return (
    <Wrapper> 
      {<SearchBar onSubmit={onSearchFilm} />}
      {films.length ===0 && <NotificationText>Please enter search movie text </NotificationText>}
      {films && searchQuery &&
       <FilsList>
          {films.map(({ id, title, original_name }) => (
            <FilmsListItem key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location.pathname + location.search }}>
                {title || original_name}
              </Link>
            </FilmsListItem>
          ))}
        </FilsList>}

    </Wrapper>
  );
};

MoviesSearchList.propTypes = {
  filsm: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    original_name: propTypes.string.isRequired,
  }),
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
    search: propTypes.string.isRequired
  }),
  onSearchFilm: propTypes.func
};