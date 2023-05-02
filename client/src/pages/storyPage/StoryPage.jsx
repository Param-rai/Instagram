import React, { useEffect, useState } from "react";
import { FiHeart, FiMoreHorizontal, FiSend } from "react-icons/fi";
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Story = ({ story }) => {
  const { stories, currentPerson } = useLocation().state;
  const [index, setIndex] = useState(0);

  let person = currentPerson;

  useEffect(() => {
    function move() {
      //it contains multiple story of one user
      let multipleStoryContainer = document.querySelectorAll(
        ".App .multipleStoryContainer"
      );

      //the whole story with username and option
      const personContainer = document.querySelector(".storyPage");

      //upper bars
      let bars = document
        .querySelectorAll(".personStory")
        [person].querySelectorAll(".progress .myBar");

      // width of progress
      let width = 0;
      //auto progressing
      let id = setInterval(frame, 30);

      function frame() {
        //if not smaller than see 100% next story otherwise progress will increase
        if (width >= 100) {
          // stopping progress
          clearInterval(id);
          //changin bar and changing to zero when completed all bars
          setIndex(index + 1);
          if (index === bars.length) setIndex(0);

          //changing story by scrolling if bar complted
          multipleStoryContainer[person].scrollLeft +=
            multipleStoryContainer[person].scrollWidth /
            stories[person].stories.length;
        } else {
          //progressing
          width++;
          bars[index].style.minWidth = width + "%";
          if (
            bars[bars.length - 1].offsetWidth >=
            personContainer.offsetWidth / bars.length - 10
          ) {
            window.history.back();
          }
        }
      }
    }
    move();
  }, [index]);

  return (
    <div className="personStory snap-start bg-black min-w-[100%] max-w-[410px]">
      <div className="flex gap-1">
        {story.stories.map((media, i) => {
          return (
            <span
              className="progress bg-neutral-600 min-h-[2px] w-full relative overflow-hidden"
              key={i}
            >
              <span className="myBar absolute top-0 left-0 span h-full bg-white"></span>
            </span>
          );
        })}
      </div>
      <div className="top_action text-white flex justify-between items-center p-2 h-[3rem]">
        <div className="username flex items-center gap-2">
          <img
            src=""
            alt=""
            className="profile min-h-[30px] min-w-[30px] rounded-full bg-gray-200"
          />
          <span>{story?.username}</span>
          <span>12 h</span>
        </div>

        <div className="actions flex items-center gap-2 text-xl">
          <FiMoreHorizontal />
          <HiOutlineVolumeUp />
          {/* <HiOutlineVolumeOff /> */}
          <MdClose
            className="cursor-pointer"
            onClick={() => window.history.back()}
          />
        </div>
      </div>
      <div className="multipleStoryContainer snap-x snap-mandatory max-h-[calc(100vh-6.8rem)] min-h-[calc(100vh-6.8rem)] flex overflow-hidden scrollbar-hide">
        {story.stories.map((img, i) => {
          return (
            <img
              src={img}
              alt=""
              key={i}
              className="snap-start image-slide profile min-h-full min-w-full"
            />
          );
        })}
      </div>
      <div className="bottom__action text-white flex items-center justify-center gap-4 py-2 px-4">
        <input
          type="text"
          placeholder="Send Message"
          className="bg-transparent outline-none py-2 px-4 w-full border border-white rounded-full"
        />
        <FiHeart className="text-2xl" />
        <FiSend className="text-2xl" />
      </div>
    </div>
  );
};

const StoryPage = () => {
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  const { stories, currentPerson } = useLocation().state;

  useEffect(() => {
    const storyPage = document.querySelector(".storyPage");
    storyPage.scrollLeft = `${currentPerson * 410}`;
  }, []);

  return (
    <div className="storyPage snap-x snap-mandatory flex overflow-x-scroll scrollbar-hide max-w-[100vw] max-w-[410px] m-auto ">
      {stories?.map((story, i) => {
        return <Story story={story} key={i} currentPerson={currentPerson} />;
      })}
    </div>
  );
};

export default StoryPage;
