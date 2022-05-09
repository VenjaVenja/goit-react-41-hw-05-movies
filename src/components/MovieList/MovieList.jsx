import propTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrendMovies } from "services/api";
import { Wrapper, HeadingText, FilsList, FilmsListItem } from "./MovieList.styled";


export const MovieList = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
 
  useEffect(() => {
    fetchTrendMovies().then(setFilms)}, []);

  return (
    <Wrapper>
      <HeadingText>Trending films</HeadingText>
      {films &&
        <FilsList>
          {films.map(({ id, title, original_name }) => (
            <FilmsListItem key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}>
                {title || original_name}
              </Link>
            </FilmsListItem>
          ))}
        </FilsList>}
    </Wrapper>
  );
};

MovieList.propTypes = {
  films: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    original_name: propTypes.string.isRequired,
  }),
  location: propTypes.object,
};