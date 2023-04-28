import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Auth, Profile, Explore, Reels, Messages } from "./pages";
import PostPage from "./pages/postPage/PostPage";
import CommentPage from "./pages/commentPage/CommentPage";

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
        <Route path="/p/:postId" element={<PostPage />} />
        <Route path="/p/:postId/comments" element={<CommentPage />} />
      </Routes>
    </div>
  );
}

export default App;
