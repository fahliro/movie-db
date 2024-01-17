import { Link } from "react-router-dom";
import Love from "./Love";
import Star from "./Star";

const Card = (): JSX.Element => {
  return (
    <>
      <Link to="/detail">
        <div className="rounded-lg shadow-xl shadow-slate-100 md:hover:scale-105 transition-all">
          <div
            style={{
              backgroundImage: `url(https://images7.alphacoders.com/101/1012576.jpg)`,
            }}
            className="w-full h-40 bg-cover bg-center bg-no-repeat rounded-t-lg"
          >
            <div className="backdrop-brightness-75 h-full rounded-t-lg">
              <div className="absolute right-5 bottom-5">
                <Love />
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="grid grid-flow-col justify-start gap-1 mb-2">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className="font-bold text-sm">John Wick: Parabellum</div>
            <div className="text-xs mb-2">2019</div>
            <div className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
