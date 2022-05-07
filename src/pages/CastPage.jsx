import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCredits } from "services/api";
import { CastWrapper } from "./cast.styled";

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w154';

export const CastPage = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchCredits(movieId).then(setCast);
    }, [movieId]);
    
    return (
      <>
      
      <CastWrapper className="cast">
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
      </CastWrapper>
      {/* {cast.length !== 0 && <GoBack href="movies" label="back" />} */}
    </>
)
};