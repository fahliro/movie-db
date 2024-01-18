import { IStar } from "../interfaces/Star";

const Star = ({
  index,
  disabled,
  isActive,
  handleHover,
  handleClick,
}: IStar): JSX.Element => {
  return (
    <>
      <div
        className={`cursor-pointer ${!disabled && "text-orange-400"} ${
          !disabled && "md:hover:scale-125"
        } transition-all pr-1`}
        onMouseOver={() => !disabled && handleHover({ type: 0, index })}
        onMouseLeave={() => !disabled && handleHover({ type: 1, index })}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          !disabled && handleClick({ e, index })
        }
      >
        {isActive ? "★" : "☆"}
      </div>
    </>
  );
};

export default Star;
