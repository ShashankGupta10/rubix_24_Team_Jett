import Video from "./Pages/Video";
import Forum from "./Pages/Forum";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search";
import Price from "./Pages/Pricing";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video" element={<Video />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
