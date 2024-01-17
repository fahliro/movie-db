import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <div className="grid grid-cols-12 text-white items-center">
      <div className="font-bold col-span-4">
        <Link to="/">Movie DB</Link>
      </div>
      <div className="text-sm grid col-span-8 grid-cols-8">
        <div className="col-span-5 md:col-start-4 md:col-span-3 grid justify-end">
          <Link to="/watched-list">Watched List</Link>
        </div>
        <div className="col-span-3 md:col-span-2 grid justify-end">
          <span className="cursor-pointer">Hi, Buddy</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
