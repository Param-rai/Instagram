import React from "react";
import Stories from "../stories/Stories";
import Posts from "../homePosts/HomePosts";

const Middle = () => {
  return (
    <div className="flex-1">
      <Stories />
      <Posts />
    </div>
  );
};

export default Middle;
