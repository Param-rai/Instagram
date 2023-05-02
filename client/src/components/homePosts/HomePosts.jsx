import {
  BiComment,
  FiHeart,
  FiMoreHorizontal,
  FiSend,
  saveIcon,
  BiWinkSmile,
} from "../../icons";
import { Link } from "react-router-dom";

export const Post = () => {
  return (
    <div className="post">
      <div className="post__upper flex gap-4 align-middle items-center px-2">
        <div className="profile__pic min-h-[40px] min-w-[40px] bg-gray-200 rounded-full">
          <img src="" alt="" />
        </div>
        <div className="profile__data flex flex-col w-full">
          <div className="post__profile__username">
            <span>gaggi__ak__47</span>
            <span>•1 d</span>
          </div>
          <span className="profile__tagline text-[.8rem]">
            rajan_bawa_13 • Original audio
          </span>
        </div>
        <div className="profile__icon float-right cursor-pointer textgray hover:text-gray-500 font-bold text-xl">
          <FiMoreHorizontal />
        </div>
      </div>
      <div className="post__image min-h-[400px] min-w-full bg-gray-200 my-4">
        <img src="" alt="" />
      </div>
      <div className="post__actions flex justify-between px-2">
        <div className="icons flex text-2xl gap-4">
          <FiHeart className="cursor-pointer active:text-gray-500" />
          <Link to="/p/kfnad4434/comments">
            <BiComment className="cursor-pointer active:text-gray-500" />
          </Link>
          <FiSend className="cursor-pointer active:text-gray-500" />
        </div>
        <div>{saveIcon}</div>
      </div>
      <div className="post__data flex flex-col gap-2 my-3 px-2">
        <span className="likes">
          <b>386185 likes</b>
        </span>
        <p className="post__desc">
          <strong>vickykaushal09</strong> Aren’t we all guilty of checking the
          car doors multiple times just to make sure it is safe even after we
          have locked it....
        </p>
        <p className="text-gray-500">View all 5 comments</p>
        <div className="comment flex items-center justify-between pt-2 pb-1 border-b border-b-gray-300">
          <input
            className="focus:outline-none border-none pl-2 placeholder:text-gray-500 w-full p-2"
            type="text"
            placeholder="Add a comment..."
          />
          <BiWinkSmile className="text-2xl text-gray-500 mx-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const Posts = () => {
  return (
    <div className="flex flex-col gap-8 justify-center max-w-lg m-auto">
      <Post />
      <Post />
      <Post />

      <div className="w-full text-center mt-4 mb-8 text-gray-500">
        "That all for now Thanks..."
        <p>Tech used to build this replica - Mern Stack</p>
        <div className="techs flex flex-wrap gap-4 my-4 justify-center">
          <span className="py-2 px-6 bg-gray-200 rounded-lg text-gray-600 flex items-center justify-center">
            React
          </span>
          <span className="py-2 px-6 bg-gray-200 rounded-lg text-gray-600 flex items-center justify-center">
            Redux
          </span>
          <span className="py-2 px-6 bg-gray-200 rounded-lg text-gray-600 flex items-center justify-center">
            Tailwind css
          </span>
          <span className="py-2 px-6 bg-gray-200 rounded-lg text-gray-600 flex items-center justify-center">
            Express js
          </span>
          <span className="py-2 px-6 bg-gray-200 rounded-lg text-gray-600 flex items-center justify-center">
            Node js
          </span>
          <span className="py-2 px-6 bg-gray-200 rounded-lg text-gray-600 flex items-center justify-center">
            Mongoose
          </span>
          <span className="py-2 px-6 bg-gray-200 rounded-lg text-gray-600 flex items-center justify-center">
            MongoDB
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
