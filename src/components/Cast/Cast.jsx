import propTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCredits } from "services/api";
import { CastWrapper, NotificationText } from "./Cast.styled";

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w154';

export const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchCredits(movieId).then(setCast);
    }, [movieId]);
    
    return (
      <>
        {cast &&
          <CastWrapper>
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
          </CastWrapper>}
        {cast.length === 0 &&
          <NotificationText>Sorry. We don't have any cast for this movie</NotificationText>}
    </>
)
};

Cast.propTypes = {
  cast: propTypes.shape({
    id: propTypes.string.isRequired,
    original_name: propTypes.string.isRequired,
    character: propTypes.string.isRequired,
    profile_path: propTypes.string.isRequired,
  })
};