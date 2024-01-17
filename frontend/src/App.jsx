import React from "react";
import Video from "./Pages/Video";
import Forum from "./Pages/Forum";
import Dashboard from "./Pages/Dashboard";
import Search from "./Pages/Search";
import Price from "./Pages/Pricing";
import Signup from "./Pages/Auth";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/forum" element={<Forum/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/price" element={<Price/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
