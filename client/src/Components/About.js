import React from "react";

import AboutMeImage from "../Assets/AboutMe.png";

export default function About() {
  return (
    <div
      id="About"
      className="px-[62px] py-[62px] flex  md:px-[110px] lg:px-[60px] lg:py-[100px] xl:px-[150px] 2xl:px-[400px] 2xl:pt-[160px]"
    >
      <div className="lg:flex  lg:flex-row-reverse lg:items-center lg:justify-center ">
        <div className="about-me-info flex-1">
          <div className="pb-[30px] flex items-center">
            <div className="about-me-text border-2 border-[#E5540A] w-[50px] h-[40px] "></div>
            <h3 className="bg-[#fff] m-[-40px] p-[3px]">About Me</h3>
          </div>
          <h2 className="text-[32px] font-bold leading-[40px]  pb-[30px]">
            Discover me! Get to know who I am.
          </h2>
          <p className="font-[16px] leading-[30px] pb-[70px] opacity-80">
            On teada-tuntud fakt, et lehe kujunduse vaatamisel juhib selle
            loetav sisu lugeja tähelepanu kõrvale. Lorem Ipsumi kasutamise mõte
            seisneb selles, et sellel on enam-vähem normaalne jaotus tähti,
            mitte nagu korduvatel sõnadel "sisu siin, sisu siin", nähes välja
            nagu tavaline loetav tekst. Paljud tekstiredaktorid ja veebilehtede
            valmistamise programmid kasutavad Lorem Ipsumit vaikimisi
            mudeltekstina, ja trükkides otsingusse "lorem ipsum" võib leida
            veebilehti, mida ei ole veel nende õige sisuga täidetud. Aastatega
            on tekkinud mitmeid versioone, mõnikord kogemata, mõnikord
          </p>
          <div className="flex justify-center  lg:justify-start">
            <button className="text-[#000] bg-[#E5540A] px-[20px] py-[10px]  mr-[20px] lg:px-[30px] lg:py-[15px] lg:mr-[20px]">
              <a href="#Contact">Contact Me</a>
            </button>

            <button className="text-[#000]  bg-[#E5540A] px-[20px] py-[10px] lg:px-[30px] lg:py-[15px]">
              Read More...
            </button>
          </div>
        </div>
        <div className=" mt-[60px] flex-1 xl:mr-[40px] lg:mt-0">
          <img
            src={AboutMeImage}
            alt="About Me"
            className="lg:h-[500px] lg:w-auto xl:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
