import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-4 right-4 p-3 bg-[#E5540A] text-black text-[24px] rounded-full hover:bg-[#ff8f57] cursor-pointer transition-transform transform hover:scale-110`}
    >
      <BsFillArrowUpCircleFill />
    </button>
  );
}
