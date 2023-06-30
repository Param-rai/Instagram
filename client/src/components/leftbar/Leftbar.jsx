import { useState } from "react";
import {
  BiMoviePlay,
  BiSearch,
  FiHeart,
  FiPlusSquare,
  GrHomeRounded,
  MdOutlineExplore,
  RiMessengerLine,
  RxHamburgerMenu,
} from "../../icons";
import { Link, useLocation, useParams } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import CreateModel from "../createModel/CreateModel";

const More = ({ more, setMore }) => {
  return (
    <div
      className={`more__content absolute flex-col justify-around bottom-0 transition-all duration-300 ease-in-out bg-white p-2  ${
        more ? "flex h-[550px]" : "h-[0]"
      }`}
    >
      <Link
        to="/"
        className="group text-lg flex gap-4 align-middle  px-4 py-4 justify-between rounded-md hover:bg-gray-100 transition-all duration-200 ease-linear"
      >
        Settings
        <GrHomeRounded className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
      </Link>
      <Link
        to="/"
        className="group text-lg flex gap-4 align-middle  px-4 py-4 justify-between rounded-md hover:bg-gray-100 transition-all duration-200 ease-linear"
      >
        Activity
        <GrHomeRounded className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
      </Link>

      <Link
        to="/"
        className="group text-lg flex gap-4 align-middle  px-4 py-4 justify-between rounded-md hover:bg-gray-100 transition-all duration-200 ease-linear"
      >
        Saved
        <GrHomeRounded className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
      </Link>

      <Link
        to="/"
        className="group text-lg flex gap-4 align-middle  px-4 py-4 justify-between rounded-md hover:bg-gray-100 transition-all duration-200 ease-linear"
      >
        Switch appearance
        <GrHomeRounded className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
      </Link>

      <Link
        to="/"
        className="group text-lg flex gap-4 align-middle  px-4 py-4 justify-between rounded-md hover:bg-gray-100 transition-all duration-200 ease-linear"
      >
        Report a problem
        <GrHomeRounded className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
      </Link>

      <Link
        to="/"
        className="group text-lg flex gap-4 align-middle  px-4 py-4 justify-between rounded-md hover:bg-gray-100 transition-all duration-200 ease-linear"
      >
        Switch Account
      </Link>
      <Link
        to="/"
        className="group text-lg flex gap-4 align-middle  px-4 py-4 justify-between rounded-md hover:bg-gray-100 transition-all duration-200 ease-linear"
      >
        Logout
      </Link>
      <span
        onClick={() => setMore(false)}
        className="group text-lg flex gap-4 align-middle  px-4 py-4 justify-between rounded-md hover:bg-gray-100 transition-all duration-200 ease-linear cursor-pointer"
      >
        Close
      </span>
    </div>
  );
};

const Search = ({ search, notification }) => {
  return (
    <>
      {search ? (
        <div className="search flex flex-col p-4 gap-4 absolute top-0 left-[71px] bg-white w-[500px] min-h-[100vh] z-99 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold">Search</h2>
          <input
            type="text"
            className="p-2 w-[80%] bg-gray-100 outline-none border-1 border-gray-500 rounded-lg"
            placeholder="Search"
          />
          <hr />
          <span className="text-gray-500">Recent Searches</span>
          <div className="flex items-center justify-center w-full h-[450px]">
            <span className="text-gray-400 text-sm">No Recent Searches</span>
          </div>
        </div>
      ) : notification ? (
        <div className="notification flex flex-col p-4 gap-4 absolute top-0 left-[71px] bg-white w-[500px] min-h-[100vh] z-99 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold">Notification</h2>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const Leftbar = () => {
  const [more, setMore] = useState(false);
  const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  let location = useLocation();
  const { username } = useParams();
  const [create, setCreate] = useState(false);

  return (
    <div
      className={`leftbar min-h-[100%] hidden sm:block flex-3 min-w-[77px] relative z-50 ${
        !search && !notification && "lg:min-w-[18%]"
      }`}
    >
      <nav
        className={`min-h-[100%] px-2 hidden sm:flex flex-col justify-around fixed top-0 left-0 border-r border-r-gray-300 transition-all duration-300 ease-in-out -z-50 ${
          notification || search ? "w-[max-content]" : "w-[77px] lg:min-w-[18%]"
        }`}
      >
        <li className="group">
          {search || notification ? (
            <AiOutlineInstagram className="text-[3.1rem] m-auto font-bold group-hover:scale-110 p-2 hover:bg-gray-200 rounded-md transition-all duration-300 ease-in-out cursor-pointer" />
          ) : (
            <img
              src="https://www.bananaip.com/wp-content/uploads/2016/11/Instagram_logo.svg_.png"
              alt=""
              className="hidden lg:block w-[120px] mt-[12px]"
            />
          )}
          {!search && !notification && (
            <AiOutlineInstagram
              className={`lg:hidden text-[3.1rem] m-auto font-bold group-hover:scale-110 p-2 hover:bg-gray-200 rounded-md transition-all duration-300 ease-in-out cursor-pointer`}
            />
          )}
        </li>
        <Link
          to="/"
          className={`group text-lg flex gap-4 items-center p-3 rounded-md hover:bg-gray-200 transition-all duration-200 ease-linear ${
            location.pathname === "/" && "font-bold"
          }
          ${notification || search ? "w-[max-content]" : "w-[90%]"}`}
        >
          <GrHomeRounded
            className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out"
            style={{ fill: `${location.pathname === "/" ? "black" : ""}` }}
          />
          {!search ? (
            notification ? (
              ""
            ) : (
              <span className="hidden lg:block">Home</span>
            )
          ) : (
            ""
          )}
        </Link>
        <span
          onClick={() => {
            setSearch((prev) => !prev);
            setMore(false);
            setNotification(false);
          }}
          className={`group text-lg flex gap-4 items-center  p-3  rounded-md hover:bg-gray-200 transition-all duration-200 ease-linear ${
            notification || search ? "w-[max-content]" : "w-[90%]"
          }
          ${search && "border border-gray-300"}
          cursor-pointer ${search && "font-bold"}`}
        >
          <BiSearch className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
          {!search ? (
            notification ? (
              ""
            ) : (
              <span className="hidden lg:block">Search</span>
            )
          ) : (
            ""
          )}
        </span>
        <Link
          to="/explore"
          className={`group text-lg flex gap-4 items-center  p-3  rounded-md hover:bg-gray-200 transition-all duration-200 ease-linear ${
            notification || search ? "w-[max-content]" : "w-[90%]"
          } ${location.pathname === "/explore" && "font-bold"}`}
        >
          <MdOutlineExplore className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
          {!search ? (
            notification ? (
              ""
            ) : (
              <span className="hidden lg:block">Explore</span>
            )
          ) : (
            ""
          )}
        </Link>

        <Link
          to="/reels"
          className={`group text-lg flex gap-4 items-center  p-3  rounded-md hover:bg-gray-200 transition-all duration-200 ease-linear ${
            notification || search ? "w-[max-content]" : "w-[90%]"
          } ${location.pathname === "/reels" && "font-bold"}`}
        >
          <BiMoviePlay className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
          {!search ? (
            notification ? (
              ""
            ) : (
              <span className="hidden lg:block">Reels</span>
            )
          ) : (
            ""
          )}
        </Link>

        <Link
          to="/messages"
          className={`group text-lg flex gap-4 items-center  p-3  rounded-md hover:bg-gray-200 transition-all duration-200 ease-linear ${
            notification || search ? "w-[max-content]" : "w-[90%]"
          } ${location.pathname === "/messages" && "font-bold"}`}
        >
          <RiMessengerLine className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
          {!search ? (
            notification ? (
              ""
            ) : (
              <span className="hidden lg:block">Messages</span>
            )
          ) : (
            ""
          )}
        </Link>
        <span
          onClick={() => {
            setSearch(false);
            setNotification((prev) => !prev);
            setMore(false);
          }}
          className={`group text-lg flex gap-4 items-center p-3  rounded-md hover:bg-gray-200 transition-all duration-200 ease-linear cursor-pointer ${
            notification || search ? "w-[max-content] " : "w-[90%]"
          }
          ${notification && "border border-gray-300"}
          ${location.pathname === "/notification" && "font-bold"}`}
        >
          <FiHeart className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
          {!search ? (
            notification ? (
              ""
            ) : (
              <span className="hidden lg:block">Notification</span>
            )
          ) : (
            ""
          )}
        </span>

        <span
          onClick={() => {
            setCreate((prev) => !prev);
          }}
          className={`group text-lg flex gap-4 items-center  p-3  rounded-md hover:bg-gray-200 transition-all duration-200 ease-linear cursor-pointer ${
            notification || search ? "w-[max-content]" : "w-[90%]"
          } ${location.pathname === "/create" && "font-bold"}`}
        >
          <FiPlusSquare className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
          {!search ? (
            notification ? (
              ""
            ) : (
              <span className="hidden lg:block">create</span>
            )
          ) : (
            ""
          )}
        </span>

        <Link
          to="/profile/paramrai"
          className={`group text-lg flex gap-4 items-center  p-3  rounded-md hover:bg-gray-200 transition-all duration-200 ease-linear ${
            notification || search ? "w-[max-content]" : "w-[90%]"
          } ${location.pathname === `/profile/${username}` && "font-bold"}`}
        >
          <img
            src="/img/avatar.png"
            alt=""
            className="max-w-[28px] max-h-[28px]"
          />
          {!search ? (
            notification ? (
              ""
            ) : (
              <span className="hidden lg:block">Profile</span>
            )
          ) : (
            ""
          )}
        </Link>

        <span
          onClick={() => {
            setMore(true);
            setSearch(false);
            setNotification(false);
          }}
          className={`group text-lg flex gap-4 items-center  p-3  rounded-md hover:bg-gray-200 transition-all duration-200 ease-linear ${
            notification || search ? "w-[max-content]" : "w-[90%]"
          }`}
        >
          <RxHamburgerMenu className="text-[1.75rem] font-bold group-hover:scale-110 transition-all duration-300 ease-in-out" />
          {!search ? (
            notification ? (
              ""
            ) : (
              <span className="hidden lg:block">More</span>
            )
          ) : (
            ""
          )}
        </span>
        <More more={more} setMore={setMore} />
        {search ? (
          <Search search={search} />
        ) : notification ? (
          <Search notification={notification} />
        ) : (
          ""
        )}
      </nav>
      {create && <CreateModel setCreate={setCreate} />}
    </div>
  );
};

export default Leftbar;
