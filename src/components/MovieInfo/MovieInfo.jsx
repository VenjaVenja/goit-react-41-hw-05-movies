import { Link, NavLink, useLocation } from "react-router-dom";

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';



export const MovieInfo = ({ movie, movieId }) => {

  const location = useLocation();
  console.log(location)

  return (
    <>
      <Link to={location?.state?.from ?? '/'}>Go back</Link>

      <div className="decription">
        <img
          src={`${BASE_IMG_URL}${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
          <p>{`User Score: ${movie.vote_average * 10}%`}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <p>{movie.genres.map(ganre => `${ganre.name}`)}</p>
        </div>
      </div>
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`}
            state={{from: location.state.from}}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}
            state={{from: location.state.from}}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <hr />
    </>
  )
};
