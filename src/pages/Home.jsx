import React from "react";
import Background from "../components/Background";

const Home = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="h-screen bg-[url('/images/background.jpg')]  bg-cover flex items-center justify-center ">
          <img
            src="/images/hbd1.png"
            className="inline-block mx-auto relative mb-[30px] w-[350px]"
          />
        </div>
        <div className="h-100 relative flex items-center justify-center bg-blue-200">
          <img
            src="/images/sticker-3.png"
            className="absolute top-[15px] left-[10px] w-15 rotate-335"
          />
          <img
            src=" /images/sticker-2.png"
            className="absolute top-[15px] right-[10px] w-15 rotate-30"
          />
          <img
            src=" /images/sticker-1.png"
            className="absolute bottom-[130px] right-[10px] w-15 rotate-30"
          />
          <img
            src=" /images/sticker-4.png"
            className="absolute bottom-[76px] left-[27px] w-15 rotate-30"
          />
          <img
            src=" /images/sticker-8.png"
            className="absolute bottom-[10px]  w-30"
          />
          <img
            src="/images/M1.jpg"
            className=" w-50 border-10 border-white rounded-lg"
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-6 h-80 bg-cyan-100 relative">
          <p className=" text-lg font-bold text-purple-600 z-10">
            HAPPY BIRTHDAY MARIA
          </p>
          <p className=" text-[12px] font-bold text-purple-600 z-10">
            A small gift for you on your special day.
          </p>
          <p className=" text-sm font-bold text-purple-600 z-10 mb-15">
            I hope it brings a smile to your face.
          </p>
          <img
            src=" /images/sticker-13.png"
            className="absolute top-[25px] left-[10px] w-15 rotate-10"
          />
          <img
            src=" /images/sticker-10.png"
            className="absolute top-[-10px] right-[10px] w-12 "
          />
          <img
            src=" /images/sticker-5.png"
            className="absolute bottom-[-100px] right-[5px] w-30 "
          />
          <img
            src=" /images/sticker-12.png"
            className="absolute bottom-[-15px] left-[15px] w-23 rotate-50 z-100"
          />

          <img
            src=" /images/sticker-7.png"
            className=" absolute w-150 h-100 "
          />
        </div>
        <div className=" h-96  flex items-center justify-center relative">
          <img src="/images/confetti.gif" className="absolute w-full " />
          <img src="/images/cake.svg" className="absolute w-40 " />
          <img
            src="/images/gifts.png"
            className="absolute w-30 bottom-3 right-3"
          />
          <img
            src="/images/party.png"
            className="absolute w-30 bottom-3 left-3"
          />
          <img src="/images/cat.png" className="absolute w-30 top-3 left-3" />
        </div>
      </div>
    </>
  );
};

export default Home;
