import { Link } from "react-router-dom";
import { DEFAULT_IMAGE_URL } from "../constants";
import { ICard } from "../interfaces/Card";
import Favorite from "./Favorite";
import Star from "./Star";

const Card = ({
  props: { id, title, overview, poster_path, release_date },
}: ICard): JSX.Element => {
  return (
    <>
      <Link to={`/detail/${id}`}>
        <div className="rounded-lg shadow-xl shadow-slate-100 md:hover:scale-105 transition-all">
          <div
            style={{
              backgroundImage: `url(${DEFAULT_IMAGE_URL + poster_path})`,
            }}
            className="w-full h-40 bg-cover bg-center bg-no-repeat rounded-t-lg"
          >
            <div className="backdrop-brightness-50 h-full rounded-t-lg">
              <div className="absolute right-1 bottom-1 scale-75">
                <Favorite id={id} />
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="grid grid-flow-col justify-start gap-1">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="font-bold text-sm truncate" title={title}>
              {title}
            </div>
            <div className="text-xs mb-2">
              {new Date(release_date).getFullYear()}
            </div>
            <div className="text-xs truncate">{overview}</div>
            <div className="text-xs">Read more...</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
