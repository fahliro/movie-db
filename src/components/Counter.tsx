import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slices/Counter";
import { RootState } from "../store";

const Counter = (): JSX.Element => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {count}
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Substract</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default Counter;
