/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { IMovie } from "../interfaces/Movies";
import { addMovies } from "../slices/Movies";
import { RootState } from "../store";
import { instance } from "../utils/api";

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
      const items: IMovie = results.map((result: any) => {
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

      dispatch(addMovies({ movies: items }));
    });
  };

  useEffect(() => getMovies(), []);

  return (
    <>
      {movies.length > 0 && renderCarousel()}
      <div className="md:p-10 md:mb-20 md:mx-0 md:mt-0 mx-5 mt-5 pb-28">
        <div className="mb-5 font-bold text-lg md:text-xl">Featured Movie</div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-4">
          {movies.map((movie: IMovie, index: number) => (
            <Card key={index} props={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
