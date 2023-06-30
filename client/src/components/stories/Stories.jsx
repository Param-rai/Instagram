import { useState } from "react";
import { Link } from "react-router-dom";

const Story = ({ username, stories, isSeen, currentPerson }) => {
  const [seen, setSeen] = useState(isSeen);
  let info = {
    stories,
    currentPerson,
  };

  return (
    <Link
      to={`/stories`}
      state={info}
      className="story flex flex-col justify-center items-center gap-2 relative px-2 cursor-pointer"
    >
      <img
        src=""
        alt=""
        className="w-[50px] h-[50px]  bg-gray-300  rounded-full"
      />
      <span className="text text-[.9rem]">
        {username.length >= 6
          ? username.substring(0, 5).concat("...")
          : username}
      </span>
      {/*sm:w-[65px] sm:h-[65px] sm:top-[-17.46px]  sm:left-[-10px] 37*/}
      <svg className="absolute top-[-25.46px] left-[-17px]">
        <circle
          cx="50"
          cy="50"
          r={29}
          fill="none"
          stroke={seen ? "grey" : "red"}
          strokeWidth={seen ? ".3px" : "1.5px"}
        />
      </svg>
    </Link>
  );
};

const Stories = () => {
  const stories = [
    {
      username: "Paramraii",
      stories: [
        "https://images.pexels.com/photos/2778822/pexels-photo-2778822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2603147/pexels-photo-2603147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      seen: true,
    },
    {
      username: "Emily",
      stories: [
        "https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      seen: false,
    },
    {
      username: "pata Nahi",
      stories: [
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      seen: true,
    },
    {
      username: "Hero",
      stories: [
        "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/14713082/pexels-photo-14713082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      seen: true,
    },
    {
      username: "Heroine",
      stories: [
        "https://images.pexels.com/photos/14713082/pexels-photo-14713082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5429076/pexels-photo-5429076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/10907874/pexels-photo-10907874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      seen: true,
    },
  ];

  return (
    <div className="bg-gray-50 sm:bg-transparent border-y border-gray-100 sm:border-none flex items-center pt-3 pl-3 sm:mt-8 gap-1 mb-3 sm:mb-10 mx-auto max-w-[100vw] sm:max-w-xl md:max-w-2xl overflow-x-scroll overflow-y-hidden scrollbar-hide">
      {stories.map((story, i) => {
        return (
          <Story
            key={i}
            currentPerson={i}
            username={story.username}
            stories={stories}
            isSeen={story.seen}
          />
        );
      })}
    </div>
  );
};

export default Stories;
