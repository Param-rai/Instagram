import { useState } from "react";
import { Leftbar } from "../../components";
import {
  AiOutlinePlus,
  AiOutlineTag,
  BiComment,
  BiMoviePlay,
  FiHeart,
  FiSettings,
} from "../../icons";
import MobileTop from "../../components/mobileComp/MobileTop";
import MobileMenu from "../../components/mobileComp/MobileMenu";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { BsGrid } from "react-icons/bs";

const saveIcon = (
  <svg
    aria-label="Save"
    color="rgb(0, 0, 0)"
    fill="rgb(0, 0, 0)"
    height="15"
    role="img"
    viewBox="0 0 24 24"
    width="15"
  >
    <title>Save</title>
    <polygon
      fill="none"
      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    ></polygon>
  </svg>
);

const Highlight = ({ preview, text }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
      <div className="highlight__preview  rounded-full min-h-[60px] min-w-[60px] sm:min-h-[70px] sm:min-w-[70px] lg:min-h-[90px] lg:min-w-[90px] border border-gray-300 overflow-hidden">
        <img
          src={`${preview}`}
          alt=""
          className="w-full h-full rounded-full p-[4px]"
        />
      </div>
      <div className="highlight__text">
        <span>{text}</span>
      </div>
    </div>
  );
};

export const Post = () => {
  window.scrollTo(0, 0);

  return (
    <Link
      to="/p/lj834njfen"
      className="group bg-gray-200 relative block cursor-pointer w-full aspect-square overflow-hidden"
    >
      <img
        src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="group object-cover"
      />
      <div className="mask bg-black/40 absolute top-0 left-0 w-full h-full hidden group-hover:flex justify-center items-center gap-4 transition-all ease-in-out duration-400 z-30 text-white">
        <div className="like flex items-center gap-2">
          <i>
            <FiHeart className="text-xl fill-white" />
          </i>
          <span>45</span>
        </div>
        <div className="comment flex items-center gap-2">
          <i>
            <BiComment className="text-xl fill-white" />
          </i>
          <span>40</span>
        </div>
      </div>
    </Link>
  );
};

const Posts = () => {
  const [tab, setTab] = useState("post");

  return (
    <div className="border-y border-t-gray-300 mt-8 pb-2">
      <div className="menu flex justify-center gap-6">
        <span
          className={`flex justify-center items-center gap-2 px-4 py-4 cursor-pointer border-t-2  ${
            tab === "post" ? "border-gray-800 font-bold" : "border-gray-800/0"
          }`}
          onClick={() => setTab("post")}
        >
          <i className="text-lg">
            <BsGrid />
          </i>
          <span className="hidden sm:block">Posts</span>
        </span>
        <span
          className={`flex justify-center items-center gap-2 px-4 py-4 cursor-pointer border-t-2  ${
            tab === "reel" ? "border-gray-800 font-bold" : "border-gray-800/0"
          }`}
          onClick={() => setTab("reel")}
        >
          <i className="text-lg">
            <BiMoviePlay />
          </i>
          <span className="hidden sm:block">Reels</span>
        </span>
        <span
          className={`flex justify-center items-center gap-2 px-4 py-4 cursor-pointer border-t-2  ${
            tab === "saved" ? "border-gray-800 font-bold" : "border-gray-800/0"
          }`}
          onClick={() => setTab("saved")}
        >
          <i className="text-sm">{saveIcon}</i>
          <span className="hidden sm:block">Saved</span>
        </span>
        <span
          className={`flex justify-center items-center gap-2 px-4 py-4 cursor-pointer border-t-2  ${
            tab === "tagged" ? "border-gray-800 font-bold" : "border-gray-800/0"
          }`}
          onClick={() => setTab("tagged")}
        >
          <i className="text-lg">
            <AiOutlineTag />
          </i>
          <span className="hidden sm:block">Tagged</span>
        </span>
      </div>
      <div className="post__container grid grid-cols-3 gap-[.3rem]">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="profile flex mt-12 pb-12 sm:mt-0">
      <MobileTop />
      <Leftbar />

      <div className="profile__wrapper w-full max-w-[1030px] mx-auto">
        <div className="upper flex items-center gap-10 py-8 ">
          <div className="profile__pic bg-gray-300 rounded-full min-h-[80px] min-w-[80px] sm:min-h-[90px] sm:min-w-[90px] lg:min-h-[120px] lg:min-w-[120px] ml-2">
            <img src="" alt="" />
          </div>
          <div className="profile__info flex items-start flex-col gap-2  w-[max-content]">
            <div className="info-set-1 flex flex-wrap gap-2 items-center justify-start w-full">
              <div className="profile__username w-full sm:w-[max-content]">
                paramraii
              </div>
              <button className="bg-gray-200 rounded-lg py-[6px] px-[10px] flex justify-center items-center font-semibold">
                Edit profile
              </button>
              <button className="text-xl hidden sm:blcok">
                <FiSettings />
              </button>
            </div>
            <div className="info-set-2 flex flex-wrap gap-4 items-center text-[.9rem] sm:text-[1rem] break-words">
              <span>6 posts</span>
              <span>86 followers</span>
              <span>27 followings</span>
            </div>
          </div>
        </div>

        <div className="info-set-3 text-[.8rem] sm:text-[1rem] p-2">
          <div className="fullname font-bold">Param rai</div>
          <div className="description">
            😊 । Ice cream lover <br /> 🤠 । All girls are my sister except you
          </div>
        </div>

        <div className="highlight__container max-w-3xl flex justify-start gap-4 px-1 my-2 overflow-x-auto scrollbar-hide">
          <Highlight text={"text"} />
          <Highlight text={"text"} />
          <Highlight text={"text"} />
          <Highlight text={"text"} />
          <Highlight text={"text"} />
          <Highlight text={"text"} />
          <Highlight text={"text"} />
          <Highlight text={"text"} />
          <Highlight text={"text"} />
          <Highlight text={"text"} />
          <Highlight text={"text"} />
          <div className="flex flex-col gap-2 justify-center items-center cursor-pointer">
            <div className="highlight__add  bg-gray-50 rounded-full min-h-[60px] min-w-[60px] sm:min-h-[70px] sm:min-w-[70px] lg:min-h-[90px] lg:min-w-[90px] border border-gray-300 flex justify-center items-center">
              <i className="text-gray-300 font-extrabold text-2xl lg:text-5xl">
                <AiOutlinePlus />
              </i>
            </div>
            <span>Add</span>
          </div>
        </div>

        <Posts />
        <Footer />
        <MobileMenu />
      </div>
    </div>
  );
};

export default Profile;
