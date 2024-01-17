import Love from "./Love";

const Favorite = (): JSX.Element => {
  return (
    <div className="w-10 h-10 grid justify-center items-center relative">
      <div className="w-10 h-10 bg-slate-50 peer rounded-full cursor-pointer"></div>
      <Love />
    </div>
  );
};

export default Favorite;
