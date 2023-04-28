import { Link, useLocation } from "react-router-dom";

import { BiMoviePlay } from "react-icons/bi";

import { BiSearch, GrHomeRounded, RiMessengerLine } from "../../icons";
import { CgProfile } from "react-icons/cg";

const MobileMenu = () => {
  let location = useLocation();

  return (
    <div className="fixed flex sm:hidden justify-between p-2 bottom-0 left-0 h-[max-content] w-full bg-white rounded-md shadow-xl border-t border-gray-200 ">
      <Link to="/">
        <GrHomeRounded
          className="text-[1.60rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out"
          style={{ fill: `${location.pathname === "/" ? "black" : ""}` }}
        />
      </Link>
      <Link to="/explore">
        <BiSearch className="text-[1.60rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
      </Link>
      <Link to="/reels">
        <BiMoviePlay className="text-[1.60rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
      </Link>
      <Link to="/messages">
        <RiMessengerLine className="text-[1.60rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
      </Link>
      <Link to="/profile/username">
        <CgProfile className="text-[1.60rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
      </Link>
    </div>
  );
};

export default MobileMenu;
