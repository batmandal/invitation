"use client";

import Image from "next/image";
import { useState } from "react";

export default function Invitation() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="cute flex flex-col w-[100vw] h-[100vh] max-h-[120vh] items-center justify-center  relative gap-[20px]">
      <div
        onClick={() => setModalOpen(false)}
        style={{ display: `${modalOpen == false ? "none" : "flex"}` }}
        className="w-full h-full p-[30px]  absolute z-10 bg-black opacity-[0.7]"
      ></div>
      <div
        style={{ display: `${modalOpen == false ? "none" : "flex"}` }}
        className="gorgeous w-[90vw]  h-[85vh] max-h-[100vh] max-w-[430px]  absolute z-20 rounded-2xl px-[30px] py-[40px] flex-col items-center justify-center gap-[20px]"
      >
        <p
          style={{ textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF" }}
          className=" text-white font-serif font-normal text-5xl txt-shad"
        >
          Урилга
        </p>
        <div className="w-full h-[30%] flex  justify-center">
          <div
            style={{
              borderRadius: "12px",
              width: "fit-content",
              height: "fit-content",
              overflow: "hidden",
            }}
          >
            <Image src="/profile.jpg" alt="sticker3" width={170} height={100} />
          </div>
        </div>
        <div className="w-full h-[50%] flex flex-col gap-[10px] justify-between ">
          <p
            className=" text-center font-serif text-xl text-white font-semibold"
            style={{ textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF" }}
          >
            Эрхэм хүндэт таныг гэр бүлийн хамт Ууганбаярын Оюунзаяагийн СЭВЛЭГ
            ҮРГЭЭХ ЁСЛОЛ-д зочлон ирж ерөөл буянаа харлана уу хэмээн хүндэтгэн
            урьж байна.
          </p>
          <div>
            <p
              className="text-white font-serif text-xl font-medium"
              style={{ textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF" }}
            >
              Хэзээ: 2024 оны 6-р сарын 9нд
            </p>
            <p
              className="text-white font-serif text-xl font-medium"
              style={{ textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF" }}
            >
              Хаана: Encanto town, ENCANTO SPORT COMPLEX, 11-р давхарт
            </p>
          </div>
        </div>
      </div>

      <div
        onClick={() => setModalOpen(true)}
        className="lttr w-fit h-fit top-[320px] "
      >
        <Image
          alt="letter"
          src="/letter-removebg-preview.png"
          width={150}
          height={100}
        />
      </div>
      <p className="word text-blue-400 font-serif">Таньд урилга ирсэн байна</p>
    </div>
  );
}
