import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Loading from "./Loading";
const Stars = lazy(() => import("./Stars"));

const Rating = (): JSX.Element => {
  const movie = useSelector((state: RootState) => state.movies.movie);
  const { id } = movie;

  return (
    <Suspense fallback={<Loading />}>
      <div className="mr-3">Rate this movie :</div>
      <Stars movieId={id} />
    </Suspense>
  );
};

export default Rating;
