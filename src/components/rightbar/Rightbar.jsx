const Suggestion = () => {
  return (
    <div className="flex gap-4">
      <div className="profile__pic min-h-[50px] min-w-[50px] bg-gray-200 rounded-full"></div>
      <div className="profile__name flex flex-col w-full justify-center">
        <span className="text-sm">
          <b>Vicky_kaushal09</b>
        </span>
        <span>follows you</span>
      </div>
      <button className="text-blue-500 cursor-pointer">follow</button>
    </div>
  );
};

const Rightbar = () => {
  return (
    <div className="flex-2 min-w-[25%] pt-12 hidden md:block pr-2">
      <div className="wrapper">
        <div className="profile flex gap-4 items-center">
          <div className="profile__pic min-h-[60px] min-w-[60px] bg-gray-200 rounded-full"></div>
          <div className="profile__name flex flex-col w-full justify-center">
            <span>
              <b>paramraii</b>
            </span>
            <span>Param rai</span>
          </div>
          <button className="text-blue-500 cursor-pointer">switch</button>
        </div>

        <div className="suggestion flex flex-col gap-4">
          <div className="suggestion__wrap flex justify-between items-center pl-3 mt-4">
            <span className="text-gray-500 font-bold">Suggestion for you</span>
            <span className="text-xs cursor-pointer">See All</span>
          </div>

          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />

          <span className="text-xs text-gray-400 mt-4">
            © 2023 INSTAGRAM REPLICA FROM PARAM RAII
          </span>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
