import {
  BiMessageAdd,
  BiSearch,
  BiStar,
  BiUserCheck,
  BiUserPlus,
} from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiHeart, FiPlusSquare, FiSettings } from "../../icons";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const MobileTop = () => {
  const location = useLocation();
  const [option, setOption] = useState(false);
  const { username, postId } = useParams();

  return (
    <div className="flex sm:hidden bg-white z-50 fixed top-0 left-0 justify-between p-2 w-full border-y border-gray-100 h-12">
      {location.pathname === "/explore" && (
        <div className="relative searchBox flex justify-end items-center border border-slate-400 rounded-md w-[90%] m-auto">
          <BiSearch
            className={`text-sm text-gray-400 absolute top-[7.40px] left-2 transition-all duration-300 ease-in-out`}
          />
          <input
            type="text"
            placeholder="Search"
            className="text-sm p-1 outline-none w-full rounded-md pl-[43%] focus:pl-[1.6rem] transition-all duration-300 ease-in-out"
          />
        </div>
      )}

      {location.pathname === "/" && (
        <>
          <div className="relative ">
            <div className="image flex items-center">
              <img
                src="https://www.bananaip.com/wp-content/uploads/2016/11/Instagram_logo.svg_.png"
                alt=""
                className="w-[100px]"
              />
              <span
                onClick={() => setOption((prev) => !prev)}
                className="cursor-pointer"
              >
                <RiArrowDropDownLine className="text-2xl font-thin" />
              </span>
            </div>
            <div
              className={` absolute top-2 left-[100%] bg-white text-black rounded-sm shadow-lg transition-all duration-300 ease-out z-10 ${
                option ? "block" : "hidden"
              }`}
            >
              <div className="flex gap-2 items-center justify-between py-1 px-3">
                <span>Followings</span>
                <span>
                  <BiUserCheck className="font-thin" />
                </span>
              </div>
              <div className="flex gap-2 items-center justify-between py-1 px-3">
                <span>Favourites</span>
                <span>
                  <BiStar className="font-thin" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex text-xl gap-3 p-2">
            <FiPlusSquare />
            <FiHeart />
          </div>
        </>
      )}

      {location.pathname === "/messages" && (
        <div className="flex items-center justify-between w-full px-2">
          <MdOutlineArrowBackIosNew
            className="text-md"
            onClick={() => window.history.back()}
          />
          <span className="flex items-center">
            paramraii
            <i>
              <RiArrowDropDownLine className="text-2xl" />
            </i>
          </span>
          <BiMessageAdd className="text-xl" />
        </div>
      )}

      {location.pathname === `/profile/${username}` && (
        <div className="flex items-center justify-between w-full px-2">
          <FiSettings className="text-xl" />
          <span className="flex items-center">
            Profile
            <i>
              <RiArrowDropDownLine className="text-2xl font-thin" />
            </i>
          </span>
          <BiUserPlus className="text-xl" />
        </div>
      )}

      {location.pathname === `/p/${postId}` && (
        <div className="flex items-center justify-between w-full px-2">
          <MdOutlineArrowBackIosNew
            className="text-md"
            onClick={() => window.history.back()}
          />
          <span className="flex items-center">Photo</span>
          <span></span>
        </div>
      )}

      {location.pathname === `/p/${postId}/comments` && (
        <div className="flex items-center justify-between w-full px-2">
          <MdOutlineArrowBackIosNew
            className="text-md"
            onClick={() => window.history.back()}
          />
          <span className="flex items-center">Comments</span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default MobileTop;
