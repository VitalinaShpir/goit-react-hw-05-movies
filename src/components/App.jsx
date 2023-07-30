import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import { HomePage } from "../pages/HomePage/HomePage";
import { Movies } from "../pages/Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews.styled";

export const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path='movies' element={<Movies />} />

      <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
  </Routes>
  );
};


