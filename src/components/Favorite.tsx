/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { addWatched, removeWatched } from "../slices/Movies";
import { RootState } from "../store";
import Love from "./Love";

const Favorite = ({ id }: { id: number }): JSX.Element => {
  const dispatch = useDispatch();

  const watched = useSelector((state: RootState) => state.movies.watched);
  const isWatched = watched.includes(id);

  const handleFavorite = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    e.preventDefault();

    dispatch(
      isWatched ? removeWatched({ watched: id }) : addWatched({ watched: id })
    );
  };

  return (
    <div className="w-10 h-10 grid justify-center items-center relative">
      <div className="w-10 h-10 bg-slate-50 peer rounded-full cursor-pointer"></div>
      <div onClick={(e) => handleFavorite(e)}>
        <Love isWatched={isWatched} />
      </div>
    </div>
  );
};

export default Favorite;
