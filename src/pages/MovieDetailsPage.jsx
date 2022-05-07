import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { fetchMovieById } from 'services/api';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // const [path, setPath] = useState('/');
    // const [error, setError] = useState(null);
  
  const location = useLocation();
  console.log('MovieDetailsPage ', location);

  // console.log(location.state.from.pathname)
  // console.log(location.state.from.search)
  // console.log(location.state.from.pathname + location.state.from.search)

  useEffect(() => {
    fetchMovieById(movieId)
      .then(setMovie)
      // .catch(error => {
      //   setError(error);
      // })
      // .finally();
  }, [movieId]);

  // useEffect(() => {
  //   setPath(location?.state?.from?.pathname + location?.state?.from?.search);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])
  
  // console.log(path);
  
  return (
    <>
      <Link to={location?.state?.from ?? '/'}>Go back</Link>
      {/* <button type="button" onClick={goBack}>Go Back</button> */}
      {movie && <MovieInfo movie={movie} movieId={movieId} />}
      <Outlet />
    </>
  );
};
