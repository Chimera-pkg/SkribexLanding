import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-40 px-10 md:px-36 xl:px-80 bg-[#0E0C15]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
