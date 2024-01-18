/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { IMovie } from "../interfaces/Movie";
import { addMovies } from "../slices/Movie";
import { RootState } from "../store";
import { instance } from "../utils/api";
const Card = lazy(() => import("../components/Card"));
const Carousel = lazy(() => import("../components/Carousel"));

const List = (): JSX.Element => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const dispatch = useDispatch();

  const [activeCarousel, setActiveCarousel] = useState<number>(1);

  useEffect(() => {
    const carouselInterval = setInterval(
      () => setActiveCarousel((value: number) => value + 1),
      8000
    );

    return () => clearInterval(carouselInterval);
  }, []);

  useEffect(() => {
    if (activeCarousel > 3) setActiveCarousel(1);
  }, [activeCarousel]);

  const renderCarousel = (): JSX.Element => {
    switch (activeCarousel) {
      case 1:
        return (
          <Carousel
            title={movies[9].title}
            backdrop_path={movies[9].backdrop_path}
          />
        );
      case 2:
        return (
          <Carousel
            title={movies[13].title}
            backdrop_path={movies[13].backdrop_path}
          />
        );
      default:
        return (
          <Carousel
            title={movies[18].title}
            backdrop_path={movies[18].backdrop_path}
          />
        );
    }
  };

  const getMovies = (): void => {
    instance.get(`/movie/popular`).then((response) => {
      const results = response.data.results;
      const movies_: IMovie = results.map((result: any) => {
        const {
          id,
          title,
          backdrop_path,
          poster_path,
          overview,
          release_date,
        } = result;

        return {
          id,
          title,
          backdrop_path,
          poster_path,
          overview,
          release_date,
        };
      });

      dispatch(addMovies(movies_));
    });
  };

  useEffect(() => getMovies(), []);

  return (
    <Suspense fallback={<Loading />}>
      {movies.length > 0 && renderCarousel()}
      <div className="md:p-10 md:mb-20 md:mx-0 md:mt-0 mx-5 mt-5 pb-28">
        <div className="mb-5 font-bold text-lg md:text-xl">Featured Movie</div>
        {movies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-4">
            {movies.map((movie: IMovie, index: number) => (
              <Card key={index} props={movie} />
            ))}
          </div>
        ) : (
          <div className="text-sm grid justify-center items-center">
            No movie available
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default List;
