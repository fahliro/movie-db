import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRate } from "../interfaces/Movie";
import { IHandleClick, IHandleHover, IStars } from "../interfaces/Star";
import { addRate } from "../slices/Movie";
import { RootState } from "../store";
import Star from "./Star";

const Stars = ({ disabled, movieId }: IStars): JSX.Element => {
  const rates: IRate[] = useSelector((state: RootState) => state.movies.rates);
  const rate: IRate | undefined = rates.find(
    (rate: IRate) => rate.movieId === movieId
  );
  const rateValue: number = rate ? rate.rate : 0;

  const dispatch = useDispatch();

  const [active, setActive] = useState<number>(0);
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleHover = ({ type, index }: IHandleHover): void => {
    setActive(type === 0 ? index : 0);
    setIsHover(type === 0);
  };

  const handleClick = ({ e, index }: IHandleClick): void => {
    e.preventDefault();

    dispatch(
      addRate({
        rate: index,
        movieId,
        id: Math.random(),
      })
    );
  };

  const renderStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = [];

    for (let i: number = 1; i <= 5; i++)
      stars.push(
        <Star
          key={i}
          index={i}
          disabled={disabled}
          isActive={isHover ? i <= active : i <= rateValue}
          handleHover={handleHover}
          handleClick={handleClick}
        />
      );

    return stars;
  };

  return <div className="text-xl grid grid-cols-5">{renderStars()}</div>;
};

export default Stars;
