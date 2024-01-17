import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div
      className={`md:grid md:justify-center md:h-screen bg-slate-100 overflow-auto text-slate-500`}
    >
      <div className={`bg-white md:w-[768px] relative`}>
        <Outlet />
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
