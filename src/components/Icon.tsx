import { Suspense } from "react";
import Loading from "./Loading";

const Icon = ({ value }: { value: string }): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <span className="material-symbols-outlined">{value}</span>
    </Suspense>
  );
};

export default Icon;
