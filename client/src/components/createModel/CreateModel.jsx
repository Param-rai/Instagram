import React, { useEffect } from "react";
import { BiMoviePlay } from "react-icons/bi";
import { BsClockHistory, BsGrid } from "react-icons/bs";

const CreateModel = ({ setCreate }) => {
  useEffect(() => {
    const createModel = document.querySelector(".createModel");
    createModel?.addEventListener("click", (e) => {
      if (!e.target.closest(".createCard")) {
        setCreate(false);
      }
    });
  }, []);

  return (
    <div className="createModel fixed w-full h-full top-0 left-0 flex justify-center items-center bg-black/30">
      <div className="createCard flex flex-col items-center justify-center bg-white z-50 shadow-lg rounded-lg">
        <li className="flex gap-2 items-center cursor-pointer pl-[70px] py-2 w-[200px] text-center border-b border-gray-200">
          <BiMoviePlay /> Reels
        </li>
        <li className="flex gap-2 items-center cursor-pointer pl-[70px] py-2 w-[200px] text-center border-b border-gray-200">
          <BsGrid /> Post
        </li>
        <li className="flex gap-2 items-center cursor-pointer pl-[70px] py-2 w-[200px] text-center">
          <BsClockHistory /> Story
        </li>
      </div>
    </div>
  );
};

export default CreateModel;
