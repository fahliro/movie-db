/* eslint-disable react-hooks/exhaustive-deps */
import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch, Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { IMovie, IReview } from "../interfaces/Movie";
import { addMovie, addReview, removeMovie } from "../slices/Movie";
import { RootState } from "../store";
import { instance } from "../utils/api";
const Watched = lazy(() => import("../components/Watched"));
const Carousel = lazy(() => import("../components/Carousel"));
const Rating = lazy(() => import("../components/Rating"));
const Review = lazy(() => import("../components/Review"));

const Detail = (): JSX.Element => {
  const movie: IMovie = useSelector((state: RootState) => state.movies.movie);
  const { title, backdrop_path, overview, release_date } = movie;

  const dispatch: Dispatch<UnknownAction> = useDispatch();

  const { id } = useParams();
  const movieId: number = Number(id);

  const items = useSelector((state: RootState) => state.movies.reviews);
  const reviews = id
    ? items.filter((item: IReview) => item.movieId === movieId)
    : [];

  const watched = useSelector((state: RootState) => state.movies.watched);
  const isWatched = id ? watched.includes(movieId) : false;

  const [textReview, setTextReview] = useState<string>("");

  const getMovie = (): void => {
    instance.get(`/movie/${id}`).then((response) => {
      const { id, title, backdrop_path, poster_path, overview, release_date } =
        response.data;

      const movie_: IMovie = {
        id,
        title,
        backdrop_path,
        poster_path,
        overview,
        release_date,
      };

      dispatch(addMovie(movie_));
    });
  };

  useEffect(() => {
    getMovie();
    return () => {
      dispatch(removeMovie());
    };
  }, [id]);

  const handleAddReview = (): void => {
    if (textReview) {
      dispatch(
        addReview({
          review: textReview,
          date: new Date().toISOString().substring(0, 10),
          movieId: movieId,
          id: Math.random(),
        })
      );
      setTextReview("");
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <Carousel title={title} backdrop_path={backdrop_path} />
      <div className="md:p-10 md:mb-32 md:mx-0 md:mt-0 mx-5 mt-5 pb-28">
        <div className="grid grid-cols-2 mb-8 md:mb-10">
          <div className="grid justify-start items-end">
            <Link to="/">
              <div className="bg-slate-50 px-10 py-2 rounded-lg md:hover:bg-slate-100 transition-all">
                Back
              </div>
            </Link>
          </div>
          <div className="grid justify-end items-center">
            {movieId && <Watched id={movieId} />}
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-10 mb-5">
          <div className="text-xs font-bold mb-5">{release_date}</div>
          <div>{overview}</div>
        </div>
        {isWatched && (
          <>
            <div className="text-sm mb-5 grid grid-flow-col items-center justify-start">
              <Rating />
            </div>
            <div className="mb-2">
              <textarea
                rows={3}
                value={textReview}
                onChange={(e) => setTextReview(e.target.value)}
                className="w-full focus:outline-0 border-2 border-solid border-slate-100 p-3 rounded-lg focus:border-blue-400 transition-all"
                placeholder="Write a review"
              />
            </div>
            <div className="grid justify-end mb-10">
              <div
                className="bg-blue-400 text-white px-5 py-2 rounded-lg md:hover:bg-blue-500 cursor-pointer transition-all"
                onClick={handleAddReview}
              >
                Add review
              </div>
            </div>
            <div className="text-xl mb-5">Reviews :</div>
            {reviews.length > 0 ? (
              reviews.map((review: IReview, index: number) => (
                <Review key={index} props={review} />
              ))
            ) : (
              <div className="text-sm grid justify-center items-center">
                No review yet
              </div>
            )}
          </>
        )}
      </div>
    </Suspense>
  );
};

export default Detail;
