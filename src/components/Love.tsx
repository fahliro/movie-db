const Love = ({ isWatched }: { isWatched: boolean }): JSX.Element => {
  return (
    <div
      className={`text-2xl peer-hover:text-${
        isWatched ? "red" : "green"
      }-400 hover:text-${
        isWatched ? "red" : "green"
      }-400 cursor-pointer md:peer-hover:scale-125 md:hover:scale-125 absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 transition-all`}
    >
      {isWatched ? "✗" : "✓"}
    </div>
  );
};

export default Love;
