import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";

import ContactMeImage from "../Assets/ContactMe.png";

export default function ContactMe() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log("Form data submitted:", state);
  };

  return (
    <div
      id="Contact"
      className="bg-[#000] px-[16%] py-[50px] xl:flex xl:items-center"
    >
      <div className="xl:w-[70%] xl:my-[50px]">
        <div className="pb-[30px] flex items-center">
          <div className="about-me-text border-2 border-[#E5540A] w-[50px] h-[40px] "></div>
          <h3 className="text-[#fff] bg-[#000] m-[-40px] p-[2.5px]">
            Contact Me
          </h3>
        </div>
        <div className="bg-[#1E1E1E] w-[100%] xl:w-[70%] rounded-[15px] flex justify-between items-center px-[20px] py-[10px]">
          <div className="bg-[#E5540A] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
            <BsTelephoneFill />
          </div>
          <div>
            <h3 className="font-bold text-[18px] text-[#FFF]">
              +233 (0) 50 00 000
            </h3>
          </div>
        </div>
        <div className="bg-[#1E1E1E] w-[100%] xl:w-[70%]  rounded-[15px] mt-[20px] flex justify-between items-center px-[20px] py-[10px]">
          <div className="bg-[#E5540A] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
            <BsTelephoneFill />
          </div>
          <div>
            <h3 className="font-bold text-[20px] text-[#FFF]">
              email@gmail.com
            </h3>
          </div>
        </div>
        <div className="mt-[20px]">
          <h2 className="text-[#fff] font-bold text-[30px]">
            Send Me an Email
          </h2>
          <form onSubmit={handleSubmit} className="text-[#fff] flex flex-col">
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              placeholder="Name"
              onChange={handleInputChange}
              required
              className="mt-[20px] w-[100%] xl:w-[70%]  h-[50px] px-[20px] rounded-[10px] text-[#FFF] bg-[#1E1E1E]"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              placeholder="Email"
              onChange={handleInputChange}
              required
              className="mt-[20px] w-[100%] xl:w-[70%]  h-[50px] px-[20px] rounded-[10px] text-[#FFF] bg-[#1E1E1E]"
            />

            <textarea
              id="message"
              name="message"
              rows="4"
              value={state.message}
              placeholder="Message"
              onChange={handleInputChange}
              required
              className="mt-[20px] w-[100%] xl:w-[70%]  px-[20px] rounded-[10px] text-[#FFF] bg-[#1E1E1E]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#E5540A] mt-[20px] w-[100%] xl:w-[70%]  px-[20px] h-[40px] rounded-[10px] "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="my-[50px] xl:w-auto xl:p-[50px] transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 duration-100">
        <img src={ContactMeImage} alt="" />
      </div>
    </div>
  );
}
