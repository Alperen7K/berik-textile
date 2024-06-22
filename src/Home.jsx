import { Carousel, ConfigProvider } from "antd";
import { Footer, Navbar } from "./components";
import React, { useRef } from "react";
import landing_1 from "./assets/landing-1.jpg";
import landing_2 from "./assets/landing-2.jpg";
import landing_3 from "./assets/landing-3.jpg";
import { useTranslation } from "react-i18next";

export const Home = () => {
 const [t] = useTranslation("general");
 return (
  <>
   <Navbar />
   <div className="min-h-screen w-full">
    <ConfigProvider
     theme={{
      components: {
       Carousel: {
        arrowSize: 32,
        dotHeight: 8,
        dotActiveWidth: 36,
       },
      },
     }}
    >
     <Carousel autoplay draggable arrows>
      <img
       className="w-full min-h-screen max-h-screen object-cover select-none"
       src={landing_1}
      />
      <img
       className="w-full min-h-screen max-h-screen object-cover select-none"
       src={landing_2}
      />
      <img
       className="w-full min-h-screen max-h-screen object-cover select-none"
       src={landing_3}
      />
     </Carousel>
    </ConfigProvider>
   </div>
   <div className=" min-h-screen py-8 sm:py-10  divide-y-2 divide-acik_gri/60">
    <TextSection title={t("about.title")} desc={t("about.desc")} />
    <TextSection title={t("versatility.title")} desc={t("versatility.desc")} />
    <TextSection title={t("commitment.title")} desc={t("commitment.desc")} />
    <TextSection title={t("quality.title")} desc={t("quality.desc")} />
    <TextSection title={t("edge.title")} desc={t("edge.desc")} />
    <TextSection title={t("together.title")} desc={t("together.desc")} />
   </div>
   <Footer />
  </>
 );
};

const TextSection = ({ title, desc }) => {
 return (
  <div className="w-[90vw] sm:w-[90vw] md:w-[85vw] mx-auto space-y-2 sm:space-y-6 py-4 sm:py-14 relative overflow-hidden">
   <h1 className="sm:text-[52px] text-[35px] font-bold m-0 p-0 font-engravers">
    {title}
   </h1>
   <p className="font-swiss lg:text-[20px] text-justify text-koyu_gri">
    {desc}
   </p>
  </div>
 );
};
