import Star from "./Star";

const Rating = (): JSX.Element => {
  //skip this feature
  return (
    <>
      <div className="mr-3">Rate this movie :</div>
      <div className="text-xl grid grid-cols-5 gap-1">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </>
  );
};

export default Rating;
