import React, { useRef, useState } from "react";
import { Leftbar } from "../../components";
import MobileMenu from "../../components/mobileComp/MobileMenu";
import { BiComment } from "react-icons/bi";
import { FiHeart, FiMoreHorizontal, FiSend } from "react-icons/fi";
import { CgMusic } from "react-icons/cg";
import { BsPauseFill, BsPlay } from "react-icons/bs";

const Skeleton = () => {
  return (
    <div className="animate-pulse snap-start min-w-[410px] sm:max-w-[410px] min-h-[calc(100%-3.4rem)] sm:min-h-[100%] flex justify-center items-center mx-auto relative bg-gray-400 overflow-hidden">
      <div className=" animate-pulse actions flex flex-col items-center justify-center gap-6 absolute right-0 bottom-[5rem] z-10 p-2 text-white">
        <span className="min-h-[30px] w-[30px] bg-gray-200 rounded-lg"></span>
        <span className="min-h-[30px] w-[30px] bg-gray-200 rounded-lg"></span>
        <span className="min-h-[30px] w-[30px] bg-gray-200 rounded-lg"></span>
        <span className="min-h-[30px] w-[30px] bg-gray-200 rounded-lg"></span>
      </div>

      <div className="animate-pulse flex flex-col gap-1 absolute left-0 bottom-0 user text-white p-2 w-full">
        <div className="flex gap-2 items-center">
          <img
            src=""
            alt=""
            className="profile min-h-[30px] min-w-[30px] rounded-full bg-gray-200"
          />
          <span className="username min-h-[20px] w-[200px] bg-gray-200 rounded-full"></span>
        </div>
        <div className="desc"></div>
        <div className="music w-full flex items-center justify-between">
          <span className="min-h-[20px] w-[200px] bg-gray-200 rounded-full"></span>
          <span className="min-h-[30px] w-[30px] bg-gray-200 rounded-lg"></span>
        </div>
      </div>
    </div>
  );
};

function Reel() {
  const videoRef = useRef(null);
  const [more, setMore] = useState(false);

  return (
    <div className="snap-start w-full min-w-[100vw] sm:min-w-[410px] sm:max-w-[410px] min-h-[100vh] flex justify-center items-center mx-auto relative bg-black overflow-hidden">
      <video
        ref={videoRef}
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width="100%"
        style={{ aspectRatio: "9/16" }}
        loop
      ></video>
      <div className="actions flex flex-col items-center justify-center gap-6 absolute right-0 bottom-[8rem] sm:bottom-[5rem] z-10 p-2 text-white">
        <span className="flex flex-col items-center justify-center gap-1 cursor-pointer">
          <FiHeart className="text-[1.8rem]" />
          44k
        </span>
        <span className="flex flex-col items-center justify-center gap-1 cursor-pointer">
          <BiComment className="text-[1.8rem]" />
          4k
        </span>
        <span className="flex flex-col items-center justify-center gap-1 cursor-pointer">
          <FiSend className="text-[1.7rem]" />
          <span></span>
        </span>
        <span className="flex flex-col items-center justify-center gap-1 cursor-pointer">
          <FiMoreHorizontal className="text-[1.7rem]" />
          <span></span>
        </span>
      </div>
      <div className="user flex flex-col gap-1 absolute left-0 bottom-[3.5rem] sm:bottom-0 p-2 text-white w-full">
        <div className="flex gap-2 items-center">
          <img
            src=""
            alt=""
            className="profile min-h-[30px] min-w-[30px] rounded-full bg-gray-300"
          />
          <span className="username text-lg">
            <b>Vicky Arora</b>
          </span>
          <button className="text-white cursor-pointer">follow</button>
        </div>
        <div className="desc flex gap-2 items-end">
          <p
            className={`flex text-white w-[70%] transition-all duration-400 ease-in-out ${
              !more
                ? "truncate h-[24px]"
                : "h-[200px] overflow-y-auto scrollbar-hide"
            }`}
            id="showMoreText"
          >
            this is some desc this is some desc this is some desc this is some
            this is some desc this is some desc this is some desc this is some
            this is some desc this is some desc this is some desc this is some
            this is some desc this is some desc this is some desc this is some
            this is some desc this is some desc this is some desc this is some
            this is some desc this is some desc this is some desc this is some
            this is some desc this is some desc this is some desc this is some
            desc
          </p>
          <span
            className="text-gray-400 cursor-pointer"
            onClick={() => setMore((prev) => !prev)}
          >
            {!more ? "more" : "less"}
          </span>
        </div>
        <div className="music w-full flex justify-between">
          <span className="flex items-center gap-2">
            <CgMusic />
            <span>This is some song choose by somenone</span>
          </span>
          <BsPlay className="animate-bounce text-[2rem]" />
          {/* <BsPauseFill className="animate-bounce text-[2rem]" /> */}
        </div>
      </div>
    </div>
  );
}

function AllReels() {
  return (
    <div className="snap-y snap-mandatory mx-auto flex flex-col h-[100vh] pb-[3.4rem] overflow-y-scroll scrollbar-hide">
      <Reel />
      <Reel />
      <Reel />
    </div>
  );
}

const Reels = () => {
  return (
    <div className="Reels flex">
      <Leftbar />
      <AllReels />
      <MobileMenu />
    </div>
  );
};

export default Reels;
