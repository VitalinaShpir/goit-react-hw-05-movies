import axios from 'axios';

const API_KEY = '07963d2019ee0b9d4fdf7c301fce0cf6';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async signal => {
  const response = await axios.get('trending/movie/day', {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data.results;
};

export const getMoviesByQuery = async (query, signal) => {
  const response = await axios.get('search/movie', {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      include_adult: false,
      page: 1,
    },
  });

  return response.data.results;
};

export const getMovieDetails = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}`, {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data;
};

export const getCast = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data.cast;
};

export const getReviews = async (movieId, signal) => {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    signal,
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });

  return response.data.results;
};