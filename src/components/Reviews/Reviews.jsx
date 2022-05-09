import propTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/api";
import { ReviewsWrapper, NotificationText } from "./Reviews.styled";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchReviews(movieId).then(setReviews);
    }, [movieId]);
  
    return (
        <ReviewsWrapper>
          {reviews && 
            <ul>
              {reviews.map(({ id, author, content }) => (
                <li id={id}>
                  <h4>{author}</h4>
                  <p>{content}</p>
                </li>
              ))}
            </ul>}
        {reviews.length === 0 &&
          <NotificationText>Sorry. We don't have any reviews for this movie</NotificationText>}
        </ReviewsWrapper>
    );
};

Reviews.propTypes = {
  reviews: propTypes.shape({
    id: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    content: propTypes.string.isRequired
  })
};