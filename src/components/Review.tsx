const Review = (): JSX.Element => {
  return (
    <>
      <div className="bg-slate-50 rounded-lg p-5 text-sm mb-2 grid grid-cols-12">
        <div className="col-span-11">
          <div className="font-bold">You</div>
          <div className="text-xs mb-2">15/01/2024</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className="grid justify-end">
          <span className="cursor-pointer md:hover:text-red-400 transition-all">
            ✖
          </span>
        </div>
      </div>
    </>
  );
};

export default Review;
