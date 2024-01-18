import { useDispatch } from "react-redux";
import { IReview } from "../interfaces/Movie";
import { removeReview } from "../slices/Movie";

const Review = ({
  props: { id, date, review },
}: {
  props: IReview;
}): JSX.Element => {
  const dispatch = useDispatch();
  const handleRemoveReview = (): void => {
    dispatch(removeReview(id));
  };
  return (
    <>
      <div className="bg-slate-50 rounded-lg p-5 text-sm mb-2 grid grid-cols-12">
        <div className="col-span-11">
          <div className="font-bold">You</div>
          <div className="text-xs mb-2">{date}</div>
          <div>{review}</div>
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
