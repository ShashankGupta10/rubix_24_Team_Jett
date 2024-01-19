import { BrowserRouter, Routes, Route } from "react-router-dom";

import Video from "./Pages/Video";
import Forum from "./Pages/Forum";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search";
import Price from "./Pages/Pricing";
import MentorAuth from "./Pages/MentorAuth";
import MenteeAuth from "./Pages/MenteeAuth";
import MenteeLogin from "./Pages/MenteeLogin";
import MentorLogin from "./Pages/MentorLogin";
import Landing from "./Pages/Landing";
import MentorProfile from "./Pages/MentorProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mentorauth" element={<MentorAuth />} />
        <Route path="/menteeauth" element={<MenteeAuth />} />
        <Route path="/menteelog" element={<MenteeLogin />} />
        <Route path="/mentorlog" element={<MentorLogin />} />
        <Route path="/video" element={<Video />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/price" element={<Price />} />
        <Route path="/mentorProfile" element={<MentorProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
