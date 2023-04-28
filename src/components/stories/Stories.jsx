const Story = () => {
  let username = "Kour";
  return (
    <div className="story flex flex-col justify-center items-center gap-2 relative px-2 cursor-pointer">
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
      <svg className="absolute top-[-25.46px]  left-[-17px]">
        <circle
          cx="50"
          cy="50"
          r={29}
          fill="none"
          stroke="red"
          strokeWidth="1.5px"
        />
      </svg>
    </div>
  );
};

const Stories = () => {
  return (
    <div className="bg-gray-50 sm:bg-transparent border-y border-gray-100 sm:border-none flex items-center pt-3 pl-3 sm:mt-8 gap-1 mb-3 sm:mb-10 mx-auto max-w-[100vw] sm:max-w-xl md:max-w-2xl overflow-x-scroll overflow-y-hidden scrollbar-hide">
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default Stories;
