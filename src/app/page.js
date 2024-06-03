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
    <div className="cute flex flex-col w-[100vw] h-[100vh] items-center justify-center bg-white relative">
      <div
        onClick={() => setModalOpen(false)}
        style={{ display: `${modalOpen == false ? "none" : "flex"}` }}
        className="w-full h-full p-[30px]  absolute z-10 bg-black opacity-[0.7]"
      ></div>
      <div
        style={{ display: `${modalOpen == false ? "none" : "flex"}` }}
        className="gorgeous w-[90vw]  h-[70vh] bg-white absolute z-20 rounded-2xl"
      ></div>
      <p className="text">tanid urilga irsen bn</p>
      <div
        onClick={() => setModalOpen(true)}
        className=" w-[200px] h-[200px] top-[300px] absolute"
      >
        <Image
          alt="letter"
          height={"100%"}
          src="letter-removebg-preview.png"
          width={"100%"}
        />
      </div>
    </div>
  );
}
