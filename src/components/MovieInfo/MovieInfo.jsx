import propTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import {
  NavLinkBtn,
  NavLinksList,
  MovieCardWrapper,
  Description,
  GoBackBtn,
  BackBtnWrapper,
  AdditionalHeading,
  AdditionalWrapper
} from "./MovieInfo.styled";

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

export const MovieInfo = ({ movie, movieId }) => {

  const location = useLocation();
 
  return (
    <>
      <BackBtnWrapper>
      <GoBackBtn to={location?.state?.from ?? '/'}>Go back</GoBackBtn>
      </BackBtnWrapper>

      <MovieCardWrapper>
        <img
          src={`${BASE_IMG_URL}${movie.poster_path}`}
          alt={movie.title}
        />
        <Description>
          <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
          <p>{`User Score: ${movie.vote_average * 10}%`}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <p>{movie.genres.map(ganre => `${ganre.name} `)}</p>
        </Description>
      </MovieCardWrapper>
  
      <AdditionalWrapper>
        <AdditionalHeading>Additional information</AdditionalHeading>
        <NavLinksList>
          <NavLinkBtn>
            <NavLink to={`/movies/${movieId}/cast`}
            state={{from: location.state.from}}>Cast</NavLink>
          </NavLinkBtn>
          <NavLinkBtn>
            <NavLink to={`/movies/${movieId}/reviews`}
            state={{from: location.state.from}}>Reviews</NavLink>
          </NavLinkBtn>
        </NavLinksList>
      </AdditionalWrapper>
    </>
  )
};

MovieInfo.propTypes = {
  movie: propTypes.shape({
    poster_path: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    release_date: propTypes.string.isRequired,
    vote_average: propTypes.number.isRequired,
    overview: propTypes.string.isRequired,
    genres: propTypes.arrayOf({
      name: propTypes.string.isRequired,
    }).isRequired
  }),
  movieId: propTypes.string.isRequired,
  location: propTypes.func,
};