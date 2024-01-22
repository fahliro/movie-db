/* eslint-disable react-hooks/exhaustive-deps */
import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch, Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { VISIBILITY, VISIBILITY_OFF } from "../constants";
import {
  addWatched,
  removeRateByMovieId,
  removeReviewByMovieId,
  removeWatched,
} from "../slices/Movie";
import { RootState } from "../store";
import { handleIsWatchedListPage } from "../utils/formatter";
import Loading from "./Loading";
const Icon = lazy(() => import("./Icon"));

const Watched = ({ id }: { id: number }): JSX.Element => {
  const watched: number[] = useSelector(
    (state: RootState) => state.movies.watched
  );
  const dispatch: Dispatch<UnknownAction> = useDispatch();

  const { pathname } = useLocation();
  const isWatchedListPage: boolean = handleIsWatchedListPage({ pathname });

  const [icon, setIcon] = useState<string>(VISIBILITY);
  const [isHover, setIsHover] = useState<boolean>(false);

  const isWatched: boolean = watched.includes(id);

  useEffect(() => {
    isWatched
      ? isHover || isWatchedListPage
        ? setIcon(VISIBILITY_OFF)
        : setIcon(VISIBILITY)
      : setIcon(VISIBILITY);
  }, [isWatched, isHover]);

  const handleRemoveWatched = (): void => {
    dispatch(removeWatched(id));
    dispatch(removeReviewByMovieId(id));
    dispatch(removeRateByMovieId(id));
  };

  const handleWatched = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault();

    isWatched ? handleRemoveWatched() : dispatch(addWatched(id));
  };

  return (
    <Suspense fallback={<Loading />}>
      <div
        onClick={(e) => handleWatched(e)}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`${
          isWatched
            ? `${
                isWatchedListPage ? "bg-red-400" : "bg-green-400"
              } text-white hover:bg-red-400`
            : "bg-slate-50 hover:bg-green-400 hover:text-white"
        } w-10 h-10 grid justify-center items-center rounded-full cursor-pointer transition-all`}
      >
        <Icon value={icon} />
      </div>
    </Suspense>
  );
};

export default Watched;
