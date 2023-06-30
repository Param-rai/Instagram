import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Auth,
  Profile,
  Explore,
  Reels,
  Messages,
  StoryPage,
  PostPage,
  CommentPage,
} from "./pages";
import { useEffect, useState } from "react";

function App() {
  const [screen, setScreen] = useState(null);
  const [desktop, setDesktop] = useState(null);

  window.onresize = function () {
    setScreen(window.screen.width);
  };

  useEffect(() => {
    // if screen is big navigate to post page coz it shows both comment and post
    setScreen(window.screen.width);
    screen > 640 ? setDesktop(true) : setDesktop(false);
  }, [screen]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/stories" element={<StoryPage />} />
        <Route path="/p/:postId" element={<PostPage />} />
        <Route
          path="/p/:postId/comments"
          element={desktop ? <PostPage /> : <CommentPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
