/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense, lazy, useEffect, useState } from "react";
import { DEFAULT_IMAGE_URL } from "../constants";
import { ICarousel } from "../interfaces/Carousel";
import Loading from "./Loading";
const Header = lazy(() => import("./Header"));

const Carousel = ({ backdrop_path, title }: ICarousel): JSX.Element => {
  const [hasSubtitle, setHasSubtitle] = useState<boolean>(false);

  const ogTitle = title.split(":")[0];
  const subtitle = title.split(":")[1];

  useEffect(() => setHasSubtitle(Boolean(subtitle)), [title]);

  return (
    <Suspense fallback={<Loading />}>
      <div
        style={{ backgroundImage: `url(${DEFAULT_IMAGE_URL + backdrop_path})` }}
        className={`bg-blue-100 h-72 md:h-96 bg-cover bg-no-repeat bg-center`}
      >
        <div className="backdrop-brightness-[35%] h-full md:px-10 md:pb-20 px-5 pb-16 pt-5 md:pt-5">
          <Header />
          <div className="text-white grid content-end h-full">
            <div className="text-3xl md:text-5xl font-bold mb-1">
              {hasSubtitle ? ogTitle : title}
            </div>
            {hasSubtitle && (
              <div className="text-2xl md:text-3xl">{subtitle}</div>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Carousel;
