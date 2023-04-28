import React from "react";
import { Leftbar } from "../../components";
import MobileMenu from "../../components/mobileComp/MobileMenu";
import MobileTop from "../../components/mobileComp/MobileTop";
import { MdConstruction } from "react-icons/md";

const Explore = () => {
  return (
    <div className="flex">
      <MobileTop />
      <Leftbar />
      <div className="flex flex-col gap-3 justify-center items-center w-full min-h-[100vh]">
        <MdConstruction className="text-2xl text-gray-500" />
        <span className="text-3xl text-gray-700">Under Construction</span>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Explore;
