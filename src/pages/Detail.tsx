import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Favorite from "../components/Favorite";
import Rating from "../components/Rating";
import Review from "../components/Review";

const Detail = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <Carousel
        title="John Wick 3:"
        subTitle="Parabellum"
        image="https://images7.alphacoders.com/101/1012576.jpg"
      />
      <div className="md:p-10 md:mb-32 md:mx-0 md:mt-0 mx-5 mt-5 pb-28">
        <div className="grid grid-cols-2 mb-8 md:mb-10">
          <div className="grid justify-start items-end">
            <Link to="/">
              <div
                // onClick={() => dispatch(reset())}
                className="bg-slate-50 px-10 py-2 rounded-lg md:hover:bg-slate-100 transition-all"
              >
                Back
              </div>
            </Link>
          </div>
          <div className="grid justify-end items-center">
            <Favorite />
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg p-10 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut numquam
          modi odit pariatur minus eum qui molestias, culpa, maiores laudantium
          rerum officia quaerat. Harum et quae quam iusto esse vitae.
        </div>
        <div className="text-sm mb-5 grid grid-flow-col items-center justify-start">
          <Rating />
        </div>
        <div className="mb-2">
          <textarea
            rows={3}
            className="w-full focus:outline-0 border-2 border-solid border-slate-100 p-3 rounded-lg focus:border-blue-400 transition-all"
            placeholder="Write a review"
          />
        </div>
        <div className="grid justify-end mb-10">
          <div className="bg-blue-400 text-white px-5 py-2 rounded-lg md:hover:bg-blue-500 cursor-pointer transition-all">
            Add review
          </div>
        </div>
        <div className="text-xl mb-5">Reviews :</div>
        <Review />
        <Review />
      </div>
    </>
  );
};

export default Detail;
