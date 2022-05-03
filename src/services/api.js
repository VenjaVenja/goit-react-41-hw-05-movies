import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'aadcea8a3c7e0e5566343c1859f18989';

export const fetchTrendMovies = async () => {
  const trendUrl = 'trending/all/day?';
  const response = await axios.get(`${BASE_URL}${trendUrl}api_key=${API_KEY}`);
  const results = response.data.results;
  return results;
};

export const fetchSearchedMovie = async searchFilm => {
  const searchUrl = 'search/movie?';
  const response = await axios.get(
    `${BASE_URL}${searchUrl}api_key=${API_KEY}&language=en-US&query=${searchFilm}&page=1&include_adult=true`
  );
  const results = response.data.results;
  return results;
};

export const fetchMovieById = async movieId => {
  const detailsUrl = 'movie/';
  const response = await axios.get(
    `${BASE_URL}${detailsUrl}${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const results = response.data;
  // console.log(results)
  return results;
};

export const fetchCredits = async movieId => {
  const creditsUrl = 'movie/';
  const response = await axios.get(
    `${BASE_URL}${creditsUrl}${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const results = response.data.cast;
  console.log(results);
  return results;
};

export const fetchReviews = async movieId => {
  const reviewsUrl = 'movie/';
  const response = await axios.get(
    `${BASE_URL}${reviewsUrl}${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const results = response.data.results;
  console.log(results);
  return results;
};
