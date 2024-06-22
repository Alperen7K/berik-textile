import React from "react";
import logo from "../assets/berik-textile.png";
import { Mail } from "../assets/Mail";
import { X } from "../assets/X";
import { Linkedin } from "../assets/Linkedin";
export const Footer = () => {
 return (
  <div className="w-full border-t-[1px] border-acik_gri border-solid shadow-xl roboto-light">
   <div className="w-[90vw] sm:w-[95vw] mx-auto py-3 flex flex-col gap-y-4 md:flex-row md:justify-between items-center ">
    <img src={logo} className="w-56 sm:w-64 object-contain " />
    <div className="flex flex-col items-center gap-2">
     <a
      className="group px-2 text-[18px] flex items-center  text-koyu_gri group-hover:text-black duration-300"
      href="mailto:info@berik.biz"
     >
      <Mail className="size-6 fill-koyu_gri group-hover:fill-black duration-300 mr-1" />
      info@<strong>berik</strong>.biz
     </a>
     <div className="*:size-6 flex items-center gap-2">
      <a
       href="https://x.com/berikgirisim"
       target="_blank"
       rel="Berik Girişim X Hesabı"
      >
       <X className="fill-koyu_gri hover:fill-black duration-300" />
      </a>
      <a
       href="https://www.linkedin.com/company/berik-girisim/?trk=similar-pages"
       target="_blank"
       rel="Berik Girişim Linkedin Hesabı"
      >
       <Linkedin className="fill-koyu_gri hover:fill-black duration-300" />
      </a>
     </div>
    </div>
   </div>
   <h6 className="text-center text-gri border-t-[1px] border-acik_gri/50 border-solid py-1 text-[14px]">
    ©2024, Berik Girisim Textile
   </h6>
  </div>
 );
};
