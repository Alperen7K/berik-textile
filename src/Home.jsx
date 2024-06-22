import { Carousel, ConfigProvider } from "antd";
import { Footer, Navbar } from "./components";
import React from "react";
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
   4
   <div className=" min-h-screen py-8 sm:py-10">
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
  <div className="w-[90vw] sm:w-[90vw] md:w-[60vw] mx-auto space-y-1 py-4 relative overflow-hidden">
   <h1
    style={{ fontFamily: "" }}
    className="sm:text-[32px] text-[35px] text-center  oswald m-0 p-0 "
   >
    {title}
   </h1>
   <p className="roboto-light  lg:text-[20px] text-center text-koyu_gri">
    {desc}
   </p>
  </div>
 );
};
  