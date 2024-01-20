import { BrowserRouter, Routes, Route } from "react-router-dom";

import Video from "./Pages/Video";
import Dashboard from "./Pages/Dashboard";
import Chat from "./Pages/Chat";
import Search from "./Pages/Search";
import Price from "./Pages/Pricing";
import MentorAuth from "./Pages/MentorAuth";
import MenteeAuth from "./Pages/MenteeAuth";
import MenteeLogin from "./Pages/MenteeLogin";
import MentorLogin from "./Pages/MentorLogin";
import Landing from "./Pages/Landing";
import MentorProfile from "./Pages/MentorProfile";
import Forums from "./Pages/Forums";
import Forumopen from "./Pages/Forumopen";
import MenteeDashboard from "./Pages/MenteeDashboard";
import FreeTrial from "./Pages/FreeTrial";

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
        <Route path="/chat" element={<Chat />} />
        <Route path="/forum" element={<Forums />} />
        <Route path="/forum/chat" element={<Forumopen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menteedashboard" element={<MenteeDashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/price" element={<Price />} />
        <Route path="/mentorprofile" element={<MentorProfile />} />
        <Route path="/freeTrial" element={<FreeTrial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
