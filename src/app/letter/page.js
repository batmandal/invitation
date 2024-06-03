"use client";
import { useState } from "react";
import "tailwindcss/tailwind.css";

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => setIsOpen(null), 600);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative mx-auto mt-36 h-[375px] w-[350px] overflow-hidden">
      <div
        className={`relative mx-auto h-[60px] w-[94px] cursor-pointer rounded-md bg-[#f36363] transition-shadow ${
          isOpen ? "" : "animate-wiggle"
        }`}
        onClick={toggleLetter}
      >
        <div
          className={`absolute left-0 right-0 top-0 mx-auto h-0 w-0 border-x-[45px] border-b-[45px] border-transparent border-b-[#f36363] transition-transform ${
            isOpen ? "transform -translate-y-[45px]" : ""
          }`}
        />
        <div
          className={`absolute left-0 right-0 top-[310px] mx-auto h-[50px] w-[90px] rounded-sm border-2 border-transparent bg-[#f1f0c3] transition-transform ${
            isOpen ? "hidden" : ""
          }`}
        />
        <div
          className={`absolute left-0 right-0 top-[30px] mx-auto h-[70px] w-[70px] rotate-45 border-4 border-[#e65454] bg-[#f36363]`}
        />
        <div
          className={`absolute left-0 right-0 top-[-45px] mx-auto h-[70px] w-[70px] rotate-45 border-4 border-[#e65454] bg-[#f36363]`}
        />
      </div>
      <div
        className={`relative mx-auto w-[90px] bg-[#f1f0c3] rounded-sm ${
          isOpen === null
            ? ""
            : isOpen
            ? "animate-upthenscale"
            : "animate-scalethendown"
        }`}
      >
        <div
          className={`p-6 font-sans font-bold text-[#545454] opacity-0 ${
            isOpen ? "animate-waitfade" : ""
          }`}
        >
          <div
            className="absolute right-2 top-1 cursor-pointer"
            onClick={toggleLetter}
          >
            x
          </div>
          Hey Y'all,
          <br />
          <br />
          Have a good day!
          <br />
          <br />
          Chris
        </div>
      </div>
    </div>
  );
};

export default Letter;
