/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addWatched,
  removeRateByMovieId,
  removeReviewByMovieId,
  removeWatched,
} from "../slices/Movie";
import { RootState } from "../store";
import Loading from "./Loading";
const Love = lazy(() => import("./Love"));

const Favorite = ({ id }: { id: number }): JSX.Element => {
  const dispatch = useDispatch();

  const watched = useSelector((state: RootState) => state.movies.watched);
  const isWatched = watched.includes(id);

  const handleRemoveWatched = (): void => {
    dispatch(removeWatched(id));
    dispatch(removeReviewByMovieId(id));
    dispatch(removeRateByMovieId(id));
  };

  const handleFavorite = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault();

    isWatched ? handleRemoveWatched() : dispatch(addWatched(id));
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-10 h-10 grid justify-center items-center relative">
        <div className="w-10 h-10 bg-slate-50 peer rounded-full cursor-pointer"></div>
        <div onClick={(e) => handleFavorite(e)}>
          <Love isWatched={isWatched} />
        </div>
      </div>
    </Suspense>
  );
};

export default Favorite;
