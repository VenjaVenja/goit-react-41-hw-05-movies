import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { fetchMovieById } from 'services/api';

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    // const [error, setError] = useState(null);

    const params = useParams();
  console.log(params);
  console.log(movieId)

  useEffect(() => {
    fetchMovieById(movieId)
      .then(setMovie)
      // .catch(error => {
      //   setError(error);
      // })
      // .finally();
  }, [movieId]);

  return (
    <>
      {movie && <MovieInfo movie={movie} movieId={movieId} />}
      <Outlet />
    </>
  );
};
