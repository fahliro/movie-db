import { ICarousel } from "../interfaces/Carousel";
import Header from "./Header";

const Carousel = ({ image, title, subTitle }: ICarousel): JSX.Element => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`bg-blue-100 h-72 md:h-96 bg-cover bg-no-repeat bg-center`}
    >
      <div className="backdrop-brightness-[35%] h-full md:px-10 md:pb-20 px-5 pb-16 pt-5 md:pt-5">
        <Header />
        <div className="text-white grid content-end h-full">
          <div className="text-3xl md:text-5xl font-bold">{title}</div>
          <div className="text-2xl md:text-3xl">{subTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
