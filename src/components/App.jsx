import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Container } from "./Container/Container.styled";
import { Loader } from "./Loader/Loader";
import { NotFoundPage } from "pages/NotFoundPage";

// import { HomePage } from "pages/HomePage";
// import { MoviesPage } from "pages/MoviesPage";
// import { MovieDetailsPage } from "pages/MovieDetailsPage";
// import { CastPage } from "pages/CastPage";
// import { ReviewsPage } from "pages/ReviewsPage";


// import HomePage from "pages/HomePage";
// import MoviesPage from "pages/MoviesPage";
// import MovieDetailsPage from "pages/MovieDetailsPage";
// import CastPage from "pages/CastPage";
// import ReviewsPage from "pages/ReviewsPage";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const MoviesPage = lazy(() => import("../pages/MoviesPage.jsx"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage.jsx"));
const CastPage = lazy(() => import("pages/CastPage.jsx"));
const ReviewsPage = lazy(() => import("pages/ReviewsPage.jsx"));


export const App = () => {

  return (
    <Suspense fallback={<Loader/>}>
    <Container>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />}></Route>
              <Route path="reviews" element={<ReviewsPage />}></Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Container>
      </Suspense>
  );
};
