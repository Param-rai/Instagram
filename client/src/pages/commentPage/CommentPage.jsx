import { useEffect, useState } from "react";
import MobileTop from "../../components/mobileComp/MobileTop";
import MobileMenu from "../../components/mobileComp/MobileMenu";
import { Comment, UserDescAsComment } from "../postPage/PostPage";
import { useNavigate } from "react-router-dom";

const CommentPage = () => {
  const [comment, setComment] = useState("");
  const [screen, setScreen] = useState();
  const navigate = useNavigate();

  window.scrollTo(0, 0);
  window.onresize = function () {
    setScreen(window.screen.width);
  };

  useEffect(() => {
    // if screen is big navigate to post page coz it shows both comment and post
    setScreen(window.screen.width);
    screen > 640 && navigate(`/p/h848ehfe3`);
  }, [screen]);

  return (
    <div className="mt-12">
      <MobileTop />
      <div className="fixed top-12 flex items-center gap-3 bg-neutral-100 w-[100vw] h-[4rem] px-4">
        <img
          src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="min-h-[30px] max-h-[30px] min-w-[30px] rounded-full bg-gray-200"
        />
        <div className="border flex px-4 items-center border-gray-300 bg-white w-full rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-full overflow-hidden">
          <input
            type="text"
            placeholder="Add a Comment..."
            className="bg-red border-none outline-none h-[2.8rem] w-full"
            onChange={(e) => setComment(e.target.value)}
          />
          <input
            disabled={comment === ""}
            type="submit"
            value="Post"
            className="text-blue-600 disabled:text-blue-300 font-bold"
          ></input>
        </div>
      </div>
      <div className="mt-24 infiniteScroll flex flex-col gap-2 bg-neutral-50 pt-8 pb-16">
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
      <MobileMenu />
    </div>
  );
};

export default CommentPage;
