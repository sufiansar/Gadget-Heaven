import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-[#9538E2] w-auto h-[500px] rounded-2xl">
        <NavBar></NavBar>
        <div>
          <Banner></Banner>
        </div>
      </div>

      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
