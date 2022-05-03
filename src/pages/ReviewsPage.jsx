import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/api";

// const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

export const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchReviews(movieId).then(setReviews);
    }, [movieId]);
  
  console.log(reviews)
  
    return (
        <>
            
        <h2>DEEEEEEE</h2>
      {/* <ul className="cast">
        {cast.map(({ id, original_name, character, profile_path }) => {
          return (
            profile_path && (
              <li key={id}>
                <img
                  src={`${BASE_IMG_URL}${profile_path}`}
                  alt={original_name}
                ></img>
                <h4>{original_name}</h4>
                <p>{`Character: ${character}`}</p>
              </li>
            )
          );
        })}
      </ul> */}
      {/* {cast.length !== 0 && <GoBack href="movies" label="back" />} */}
    </>
)
};