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

function App() {
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
        <Route path="/p/:postId/comments" element={<CommentPage />} />
      </Routes>
    </div>
  );
}

export default App;
