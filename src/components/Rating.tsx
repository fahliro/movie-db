import { useSelector } from "react-redux";
import { RootState } from "../store";
import Stars from "./Stars";

const Rating = (): JSX.Element => {
  const movie = useSelector((state: RootState) => state.movies.movie);
  const { id } = movie;

  return (
    <>
      <div className="mr-3">Rate this movie :</div>
      <div className="text-xl grid grid-cols-5 gap-1">
        <Stars movieId={id} />
      </div>
    </>
  );
};

export default Rating;
