import React from "react";
import logo from "../assets/berik-textile.png";
import { LanguageSwitch } from "./LanguageSwitch";

export const Navbar = () => {
 return (
  <div className="w-full py-4 flex justify-center bg-white items-center fixed top-0 z-40 shadow-xl roboto-light">
   <div className="w-[90vw] sm:w-[95vw] flex justify-between items-center">
    <img src={logo} className=" w-48 sm:w-64 object-contain" />
    <LanguageSwitch />
   </div>
  </div>
 );
};
