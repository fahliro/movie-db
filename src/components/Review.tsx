import { useDispatch } from "react-redux";
import { IReview } from "../interfaces/Movies";
import { removeReview } from "../slices/Movies";

const Review = ({ props }: { props: IReview }): JSX.Element => {
  const dispatch = useDispatch();
  const handleRemoveReview = (): void => {
    dispatch(removeReview({ idReview: props.idReview }));
  };
  return (
    <>
      <div className="bg-slate-50 rounded-lg p-5 text-sm mb-2 grid grid-cols-12">
        <div className="col-span-11">
          <div className="font-bold">You</div>
          <div className="text-xs mb-2">{props.date}</div>
          <div>{props.review}</div>
        </div>
        <div className="grid justify-end">
          <span
            className="cursor-pointer md:hover:text-red-400 transition-all"
            onClick={handleRemoveReview}
          >
            ✗
          </span>
        </div>
      </div>
    </>
  );
};

export default Review;
