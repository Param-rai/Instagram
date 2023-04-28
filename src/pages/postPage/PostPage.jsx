import {
  BiComment,
  FiHeart,
  FiMoreHorizontal,
  FiSend,
  saveIcon,
  BiWinkSmile,
} from "../../icons";
import { Link } from "react-router-dom";
import { Leftbar } from "../../components";
import { Post } from "../profile/Profile";
import { Post as MobilePost } from "../../components/homePosts/HomePosts";
import MobileMenu from "../../components/mobileComp/MobileMenu";
import MobileTop from "../../components/mobileComp/MobileTop";

export const Comment = () => (
  <div className="comment w-full flex gap-4 px-2 items-start">
    <div className="profile__pic min-h-[30px] min-w-[30px] bg-gray-200 rounded-full">
      <img src="" alt="" />
    </div>
    <div className="profile__data flex flex-col w-full">
      <div className="post__profile__username">
        <span>John Doe</span>
      </div>
      <p className="cmnt mt-2 text-slate-500">
        this is our first comment of this seriesthis is our first comment of
        this seriesthis is our first comment of this series comment of this
        seriesthis is our first comment of this series comment of this
        seriesthis is our first comment of this series comment of this
        seriesthis is our first comment of this series
      </p>
    </div>
  </div>
);

export const UserDescAsComment = () => {
  return (
    <div className="post__desc w-full flex gap-4 px-2 items-start">
      <div className="profile__pic min-h-[30px] min-w-[30px] bg-gray-200 rounded-full">
        <img src="" alt="" />
      </div>
      <div className="profile__data flex flex-col w-full">
        <div className="post__profile__username">
          <span>gaggi__ak__47</span>
        </div>
        <p className="cmnt mt-2 text-slate-500">
          this is our first comment of this seriesthis is our first comment of
          this seriesthis is our first comment of this series comment of this
          seriesthis is our first comment of this series comment of this
          seriesthis is our first comment of this series comment of this
          seriesthis is our first comment of this series
        </p>
      </div>
    </div>
  );
};

const MoreFrom = () => {
  return (
    <div>
      <h2 className="mt-10 mb-3 font-bold pl-2 sm:pl-0">
        More posts from User
      </h2>
      <div className="post__container grid grid-cols sm:grid-cols-3 gap-[.5rem] ">
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

const SelectedPost = () => {
  return (
    <div className="post__container__desktop flex-col gap-8 justify-center items-center h-full w-full sm:px-2 max-w-[1030px] m-auto">
      {/* // desktop view */}
      <div className="post hidden sm:grid grid-cols-2 min-h-[550px] rounded-md shadow-md border border-gray-200 bg-white overflow-hidden mt-8">
        <div className="post__image bg-gray-200 max-w-[450px]">
          <img src="" alt="" />
        </div>
        <div className="post__data max-w-[450px] h-full overflow-auto relative">
          <div className="post__upper flex gap-4 align-middle items-center p-4">
            <div className="profile__pic min-h-[50px] min-w-[50px] bg-gray-200 rounded-full">
              <img src="" alt="" />
            </div>
            <div className="profile__data flex flex-col w-full">
              <div className="post__profile__username">
                <span>gaggi__ak__47</span>
                <span>•1 d</span>
              </div>
              <div className="profile__tagline">
                rajan_bawa_13 • Original audio
              </div>
            </div>
            <div className="profile__icon float-right cursor-pointer hover:text-gray-500 font-bold text-2xl">
              <FiMoreHorizontal />
            </div>
          </div>

          {/* ===================comments =================== */}
          <div className="comments max-h-[320px] flex flex-col gap-2 py-4 bg-gray-50 border-t border-gray-200 overflow-y-auto scrollbar-hide">
            <UserDescAsComment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
          {/* ===================comments =================== */}

          <div className="absolute bottom-0 bg-white w-full border-t border-gray-200 ">
            <div className="post__actions flex justify-between py-3 px-2">
              <div className="icons flex text-2xl gap-4">
                <FiHeart className="cursor-pointer" />
                <Link to="/p/kjnkdab34/comments">
                  <BiComment className="cursor-pointer" />
                </Link>
                <FiSend className="cursor-pointer" />
              </div>
              <div>{saveIcon}</div>
            </div>
            <div className="post__data flex flex-col gap-2">
              <span className="likes p-1 pl-2">
                <b>386185 likes</b>
              </span>
              <div className="comment flex items-center justify-between">
                <BiWinkSmile className="text-2xl text-gray-500 mx-2" />
                <input
                  className="focus:outline-none border-none pl-2 placeholder:text-gray-500 p-2 w-full"
                  type="text"
                  placeholder="Add a comment..."
                />
                <span className="text-blue-600 px-2 cursor-pointer">Post</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="block sm:hidden">
        <MobilePost />
      </div>
      <MoreFrom />
    </div>
  );
};

const PostPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="flex mt-[4rem] sm:mt-0">
      <MobileTop />
      <Leftbar />
      <SelectedPost />
      <MobileMenu />
    </div>
  );
};

export default PostPage;
