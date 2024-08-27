import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#0E0C15] px-10 py-5 md:px-48 xl:px-80 md:py-10">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="mb-8" />
          </Link>
          <div className="flex flex-col lg:flex-row justify-between text-[#D6D6D64D]">
            <div className="flex gap-2 mb-8">
              <Link to="/">home</Link>
              <Link to="/blogs">blog</Link>
              <Link to="/pricing">pricing</Link>
            </div>
            <div className="flex gap-2">
              <p>phone number</p>
              <p>Tiktraq@app.com</p>
              <p>Company address</p>
            </div>
            <div>submit feature/Bug</div>
          </div>
          <div className="flex gap-2">
            <p>instagram</p>
            <p>X</p>
            <p>Youtube</p>
          </div>
        </div>
        <hr className="mt-8 border-[#D6D6D64D]" />
        <h4 className="text-center mt-3 text-sm text-[#D6D6D64D]">
          &copy; 2024 Tiktraq
        </h4>
      </div>
    </>
  );
};

export default Footer;
