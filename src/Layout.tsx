import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import useHandleNetwork from "./hooks/useHandleNetwork";

const Layout = (): JSX.Element => {
  const { network, isOnline } = useHandleNetwork();

  const renderNetworkMessage = (): JSX.Element => {
    const message: string = !isOnline
      ? "Unfortunately, you're offline. Check your connection."
      : "Welcome back! You're now online.";

    return (
      <div
        className={`text-xs px-3 py-1.5 ${
          isOnline ? "bg-green-500" : "bg-red-500"
        } text-white font-bold`}
      >
        {message}
      </div>
    );
  };

  return (
    <div
      className={`md:grid md:justify-center h-screen md:items-center bg-slate-100 overflow-auto text-slate-500`}
    >
      <div className={`bg-white md:w-[768px] relative`}>
        {network && renderNetworkMessage()}
        <Outlet />
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
