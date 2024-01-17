import { Link } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";

const WatchedList = (): JSX.Element => {
  return (
    <>
      <div className="bg-blue-400 px-10 py-5">
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
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default WatchedList;
