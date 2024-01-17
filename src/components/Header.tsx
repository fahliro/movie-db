import { Link, useLocation } from "react-router-dom";

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const isWatchedList = pathname === "/watched-list";

  return (
    <div className="grid grid-cols-12 text-white items-center">
      <div className="font-bold col-span-6">
        <Link to="/">Movie DB</Link>
      </div>
      <div className="text-sm grid col-span-6 justify-end grid-flow-col">
        {!isWatchedList && (
          <div className="mr-3 md:mr-5">
            <Link to="/watched-list">Watched List</Link>
          </div>
        )}
        <div className="cursor-pointer">Hi, Buddy</div>
      </div>
    </div>
  );
};

export default Header;
