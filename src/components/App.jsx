import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

// import { HomePage } from "../pages/HomePage/HomePage";
// import { Movies } from "../pages/Movies/Movies";
// import MovieDetails from "./MovieDetails/MovieDetails";
// import Cast from "./Cast/Cast";
// import { Reviews } from "./Reviews/Reviews";
// import NotFound from "./NotFound/NotFound";

 const App = () => {
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
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/" />} />
  </Routes>
  );
};


export default App