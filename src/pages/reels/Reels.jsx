import React from "react";
import { Leftbar } from "../../components";
import MobileMenu from "../../components/mobileComp/MobileMenu";
import { MdConstruction } from "react-icons/md";

const Reels = () => {
  return (
    <div className="Reels flex">
      <Leftbar />
      <div className="flex flex-col gap-3 justify-center items-center w-full min-h-[100vh]">
        <MdConstruction className="text-2xl text-gray-500" />
        <span className="text-3xl text-gray-700">Under Construction</span>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Reels;
