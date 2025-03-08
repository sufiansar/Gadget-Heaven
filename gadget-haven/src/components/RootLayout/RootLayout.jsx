import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
