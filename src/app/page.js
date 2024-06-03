"use client";

import { useState } from "react";

export default function HomePage() {
  const [open, isOpen] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  return (
    <div
      className="flex justify-center items-center w-full h-[100vh] flex-col
     bg-red-300"
    >
      <div className=" haha flex flex-col w-[200px] h-[500px] relative">
        <div
          // style={{ opacity: `${startAnimation == false ? "0" : "1"}` }}
          // onClick={() => setStartAnimation((prev) => !prev)}
          className="bottom-[200px] letter flex w-[200px] h-[130px] bg-yellow-300 absolute"
        >
          <div className="finish bg-green-200 w-[150px] h-[100px]"></div>
        </div>
        <div
          className="flex w-[200px] h-[100px] bottom-0 absolute"
          style={{ backgroundColor: open == false ? "red " : "blue" }}
          onClick={() => {
            // open == false ? isOpen(true) : isOpen(false);
            isOpen((prev) => !prev);
          }}
        ></div>
      </div>
    </div>
  );
}
