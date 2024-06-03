"use client";

import { useState } from "react";

export default function Invitation() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div
      style={
        {
          // backgroundImage: url("https://www.pinterest.com/pin/774124923051832/"),
        }
      }
      className="cute flex flex-col w-[100vw] h-[100vh] items-center justify-center bg-white relative"
    >
      <div
        onClick={() => setModalOpen(false)}
        style={{ display: `${modalOpen == false ? "none" : "flex"}` }}
        className="w-full h-full p-[30px]  absolute z-10 bg-black opacity-[0.7]"
      ></div>
      <div
        style={{ display: `${modalOpen == false ? "none" : "flex"}` }}
        className="w-[90vw]  h-[70vh] bg-white absolute z-20 rounded-2xl"
      ></div>
      <p className="text">tanid urilga irsen bn</p>
      <div
        onClick={() => setModalOpen(true)}
        className="bg-red-300 w-[200px] h-[200px] top-[300px] absolute"
      >
        <img
          alt="letter"
          // width={"100%"}
          src="https://i.pinimg.com/564x/df/f6/2c/dff62cd1dc6ea125ff164b5ff0151ea8.jpg"
        />
      </div>
    </div>
  );
}
