import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { IMovie } from "../interfaces/Movie";
import { RootState } from "../store";
const Card = lazy(() => import("../components/Card"));
const Header = lazy(() => import("../components/Header"));

const WatchedList = (): JSX.Element => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const watched = useSelector((state: RootState) => state.movies.watched);

  const watchedMovies = movies.filter((movie: IMovie) =>
    watched.includes(movie.id)
  );

  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-blue-400 px-5 md:px-10 py-5">
        <Header />
      </div>
      <div className="md:p-10 md:mb-32 md:mx-0 md:mt-0 mx-5 mt-5 pb-28">
        <div className="grid grid-cols-2 items-center mb-5">
          <div className="font-bold text-lg md:text-xl">
            <span>Watched List</span>
          </div>
          <div className="grid justify-end">
            <Link to="/">
              <div className="bg-slate-50 px-10 py-2 rounded-lg hover:bg-slate-100 transition-all">
                Back
              </div>
            </Link>
          </div>
        </div>
        {watchedMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-4">
            {watchedMovies.map((movie: IMovie, index: number) => (
              <Card key={index} props={movie} />
            ))}
          </div>
        ) : (
          <div className="text-sm grid justify-center items-center">
            No watched movie yet
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default WatchedList;
