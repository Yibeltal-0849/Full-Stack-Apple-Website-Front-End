import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";

function SharedHeaderAndFooter() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedHeaderAndFooter;
