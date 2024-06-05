// "use client";

// import { useState } from "react";

// export default function HomePage() {
//   const [open, isOpen] = useState(false);
//   const [startAnimation, setStartAnimation] = useState(false);
//   return (
//     <div
//       className="flex justify-center items-center w-full h-[100vh] flex-col
//      bg-red-300"
//     >
//       <div className=" haha flex flex-col w-[200px] h-[500px] relative">
//         <div
//           // style={{ opacity: `${startAnimation == false ? "0" : "1"}` }}
//           // onClick={() => setStartAnimation((prev) => !prev)}
//           className="bottom-[200px] letter flex w-[200px] h-[130px] bg-yellow-300 absolute"
//         >
//           <div className="finish bg-green-200 w-[150px] h-[100px]"></div>
//         </div>
//         <div
//           className="flex w-[200px] h-[100px] bottom-0 absolute"
//           style={{ backgroundColor: open == false ? "red " : "blue" }}
//           onClick={() => {
//             // open == false ? isOpen(true) : isOpen(false);
//             isOpen((prev) => !prev);
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";

export default function Invitation() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="cute flex flex-col w-[100vw] h-[100vh] items-center justify-center bg-white relative gap-[20px]">
      <div
        onClick={() => setModalOpen(false)}
        style={{ display: `${modalOpen == false ? "none" : "flex"}` }}
        className="w-full h-full p-[30px]  absolute z-10 bg-black opacity-[0.7]"
      ></div>
      <div
        style={{ display: `${modalOpen == false ? "none" : "flex"}` }}
        className="gorgeous w-[90vw]  h-[85vh] max-w-[430px] bg-white absolute z-20 rounded-2xl px-[30px] py-[40px] flex-col items-center justify-center gap-[20px]"
      >
        <p
          style={{ textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF" }}
          className=" text-white font-serif font-normal text-5xl txt-shad"
        >
          Урилга
        </p>
        <div className="w-full h-[30%] flex  justify-center">
          {/* <Image src="/sticker1.webp" alt="sticker1" width={200} height={100} /> */}
          {/* <Image src="/sticker2.webp" alt="sticker2" width={200} height={100} /> */}
          <div
            style={{
              borderRadius: "12px",
              width: "fit-content",
              height: "fit-content",
              overflow: "hidden",
            }}
          >
            {" "}
            <Image src="/profile.jpg" alt="sticker3" width={170} height={100} />
          </div>
        </div>
        <div className="w-full h-[50%] flex flex-col gap-[10px] justify-between ">
          <p
            className=" text-center font-serif text-xl text-white font-semibold"
            style={{ textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF" }}
          >
            Эрхэм хүндэт таныг гэр бүлийн хамт Ууганбаярын Оюунзаяагийн "СЭВЛЭГ
            ҮРГЭЭХ ЁСЛОЛ"-д зочлон ирж ерөөл буянаа харлана уу хэмээн хүндэтгэн
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
      <p className="word text-blue-400 font-serif">Таньд урилга ирсэн байна</p>
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
    </div>
  );
}
