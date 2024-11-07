import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="overflow-hidden flex-grow flex justify-center p-2 md:px-12 py-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
