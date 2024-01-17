/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Favorite from "../components/Favorite";
import Rating from "../components/Rating";
import Review from "../components/Review";
import { IMovie } from "../interfaces/Movies";
import { addMovie } from "../slices/Movies";
import { RootState } from "../store";
import { instance } from "../utils/api";

const Detail = (): JSX.Element => {
  const movie = useSelector((state: RootState) => state.movies.movie);
  const { title, backdrop_path, overview } = movie;

  const dispatch = useDispatch();

  const { id } = useParams();

  const getMovie = (): void => {
    instance.get(`/movie/${id}`).then((response) => {
      const { id, title, backdrop_path, poster_path, overview, release_date } =
        response.data;

      const item: IMovie = {
        id,
        title,
        backdrop_path,
        poster_path,
        overview,
        release_date,
      };

      dispatch(addMovie({ movie: item }));
    });
  };

  useEffect(() => getMovie(), [id]);

  return (
    <>
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
            <Favorite />
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-10 mb-5">{overview}</div>
        <div className="text-sm mb-5 grid grid-flow-col items-center justify-start">
          <Rating />
        </div>
        <div className="mb-2">
          <textarea
            rows={3}
            className="w-full focus:outline-0 border-2 border-solid border-slate-100 p-3 rounded-lg focus:border-blue-400 transition-all"
            placeholder="Write a review"
          />
        </div>
        <div className="grid justify-end mb-10">
          <div className="bg-blue-400 text-white px-5 py-2 rounded-lg md:hover:bg-blue-500 cursor-pointer transition-all">
            Add review
          </div>
        </div>
        <div className="text-xl mb-5">Reviews :</div>
        <Review />
        <Review />
      </div>
    </>
  );
};

export default Detail;
