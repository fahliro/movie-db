import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const List = (): JSX.Element => {
  const dispatch = useDispatch();

  const [activeCarousel, setActiveCarousel] = useState<number>(1);

  useEffect(() => {
    const carouselInterval = setInterval(
      () => setActiveCarousel((value: number) => value + 1),
      8000
    );

    return () => clearInterval(carouselInterval);
  }, []);

  useEffect(() => {
    if (activeCarousel > 3) setActiveCarousel(1);
  }, [activeCarousel]);

  const renderCarousel = (): JSX.Element => {
    switch (activeCarousel) {
      case 1:
        return (
          <Carousel
            title="John Wick 3:"
            subTitle="Parabellum"
            image="https://images7.alphacoders.com/101/1012576.jpg"
          />
        );
      case 2:
        return (
          <Carousel
            title="Avengers:"
            subTitle="Age of ultron"
            image="https://wallpapercave.com/dwp1x/iptrxid.jpg"
          />
        );
      default:
        return (
          <Carousel
            title="The batman:"
            subTitle="Rise of gotham"
            image="https://images3.alphacoders.com/118/1185634.jpg"
          />
        );
    }
  };

  return (
    <>
      {renderCarousel()}
      <div className="md:p-10 md:mb-32 md:mx-0 md:mt-0 mx-5 mt-5 pb-28">
        <div className="mb-5 font-bold text-lg md:text-xl">Featured Movie</div>
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

export default List;
