import { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { fetchMovieById } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  
  useEffect(() => {
    fetchMovieById(movieId).then(setMovie)}, [movieId]);

  return (
    <>
      {!movie && <Loader/> && <Link to={`/`}>Oops, something went wrong. Please try again later.</Link>}
      {movie && <MovieInfo movie={movie} movieId={movieId} />}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
