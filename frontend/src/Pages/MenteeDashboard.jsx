import React from "react";
import { useNavigate } from "react-router-dom";

const MenteeDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block ">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <a className="flex items-center gap-2 font-semibold" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="" onClick={()=>{navigate('/')}}>Mentee Dashboard</span>
              </a>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
                <span className="sr-only">Toggle notifications</span>
              </button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <a
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900  transition-all hover:text-gray-900"
                  href="#"
                  onClick={() => {
                    navigate("/menteedashboard");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Home
                </a>
                {/* <a
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900  transition-all hover:text-gray-900"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <line x1="12" x2="12" y1="20" y2="10"></line>
                    <line x1="18" x2="18" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="16"></line>
                  </svg>
                  Progress Tracker
                </a>
                <a
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900  transition-all hover:text-gray-900"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                  Goal Setting
                </a> */}
                <a
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900  transition-all hover:text-gray-900"
                  href="#"
                  onClick={() => {
                    navigate("/mentorprofile");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Mentor Details
                </a>
                <a
                  className="flex items-center gap-3 rounded-l px-3 py-2 text-gray-900  transition-all hover:text-gray-900 "
                  href="#"
                  onClick={() => navigate("/forum")}
                >
                  <svg
                    className="w-4 h-4 text-gray-800 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Forum
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6">
            <a className="lg:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="sr-only">Home</span>
            </a>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form>
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>
            </div>
            <div className="grid gap-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <p className="text-sm text-muted-foreground">
                      Progress Tracker
                    </p>
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                      75%
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="aspect-[4/3]">
                      <div style={{ width: "100%", height: "100%" }}>
                        <div style={{ position: "relative" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="281.65625"
                            height="211.234375"
                            role="application"
                          >
                            <rect
                              width="281.65625"
                              height="211.234375"
                              fill="transparent"
                            ></rect>
                            <g transform="translate(40,10)">
                              <g>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="161.234375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="46.33125"
                                  x2="46.33125"
                                  y1="0"
                                  y2="161.234375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="92.6625"
                                  x2="92.6625"
                                  y1="0"
                                  y2="161.234375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="138.99374999999998"
                                  x2="138.99374999999998"
                                  y1="0"
                                  y2="161.234375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="185.325"
                                  x2="185.325"
                                  y1="0"
                                  y2="161.234375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="231.65625"
                                  x2="231.65625"
                                  y1="0"
                                  y2="161.234375"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                              </g>
                              <g>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="231.65625"
                                  y1="161"
                                  y2="161"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="231.65625"
                                  y1="122"
                                  y2="122"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="231.65625"
                                  y1="82"
                                  y2="82"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="231.65625"
                                  y1="43"
                                  y2="43"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="231.65625"
                                  y1="3"
                                  y2="3"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                              </g>
                              <g transform="translate(0,161.234375)">
                                <g
                                  transform="translate(0,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Jan
                                  </text>
                                </g>
                                <g
                                  transform="translate(46.33125,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Feb
                                  </text>
                                </g>
                                <g
                                  transform="translate(92.6625,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Mar
                                  </text>
                                </g>
                                <g
                                  transform="translate(138.99374999999998,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Apr
                                  </text>
                                </g>
                                <g
                                  transform="translate(185.325,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    May
                                  </text>
                                </g>
                                <g
                                  transform="translate(231.65625,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Jun
                                  </text>
                                </g>
                                <line
                                  x1="0"
                                  x2="231.65625"
                                  y1="0"
                                  y2="0"
                                  style={{
                                    stroke: "rgb(119, 119, 119)",
                                    strokeWidth: "1",
                                  }}
                                ></line>
                              </g>
                              <g transform="translate(0,0)">
                                <g
                                  transform="translate(0,161)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="central"
                                    text-anchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    0
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,122)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="central"
                                    text-anchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    50
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,82)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="central"
                                    text-anchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    100
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,43)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="central"
                                    text-anchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    150
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,3)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="central"
                                    text-anchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    200
                                  </text>
                                </g>
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="161.234375"
                                  style={{
                                    stroke: "transparent",
                                    strokeWidth: "1",
                                  }}
                                ></line>
                              </g>
                              <path
                                d="M0,114L46.33125,123L92.6625,21L138.99374999999998,100L185.325,85L231.65625,0"
                                fill="none"
                                strokeWidth="2"
                                stroke="#e11d48"
                              ></path>
                              <path
                                d="M0,127L46.33125,53L92.6625,113L138.99374999999998,47L185.325,141L231.65625,40"
                                fill="none"
                                strokeWidth="2"
                                stroke="#2563eb"
                              ></path>
                              <g>
                                <g
                                  transform="translate(231.65625, 0)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(185.325, 85)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(138.99374999999998, 100)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(92.6625, 21)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(46.33125, 123)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(0, 114)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#e11d48"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(231.65625, 40)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(185.325, 141)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(138.99374999999998, 47)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(92.6625, 113)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(46.33125, 53)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                                <g
                                  transform="translate(0, 127)"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <circle
                                    r="3"
                                    fill="#2563eb"
                                    stroke="transparent"
                                    strokeWidth="0"
                                    style={{ pointerEvents: "none" }}
                                  ></circle>
                                </g>
                              </g>
                              <g>
                                <rect
                                  width="231.65625"
                                  height="161.234375"
                                  fill="red"
                                  opacity="0"
                                  style={{ cursor: "auto" }}
                                ></rect>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <p className="text-sm text-muted-foreground">
                      Goal Completion
                    </p>
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                      5/10
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="aspect-[4/3]">
                      <div style={{ width: "100%", height: "100%" }}>
                        <div className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="281.671875"
                            height="211.25"
                            role="application"
                          >
                            <rect
                              width="281.671875"
                              height="211.25"
                              fill="transparent"
                            ></rect>
                            <g transform="translate(10,10)">
                              <g transform="translate(130.8359375,95.625)">
                                <path
                                  d="M-92.56885517765993,-1.182233520680544A3,3,0,0,1,-95.52748481354479,-4.317437920569146A95.625,95.625,0,0,1,-57.519246321607135,-76.39160246777314A3,3,0,0,1,-53.260932864511496,-75.72095915532239L-29.182384213844156,-41.48853586047089A3,3,0,0,1,-29.768354005597043,-37.414973687648825A47.8125,47.8125,0,0,0,-47.68915386269257,-3.432165513263306A3,3,0,0,1,-50.71972556136238,-0.6477617077933946Z"
                                  opacity="1"
                                  fill="#e11d48"
                                  stroke="#ffffff"
                                  strokeWidth="1"
                                ></path>
                                <path
                                  d="M5.329070518200751e-15,-92.57640425616022A3,3,0,0,1,3.0971659919028394,-95.57483030494274A95.625,95.625,0,0,1,92.24869799273723,-25.18567735131928A3,3,0,0,1,90.05061026260398,-21.477388489586072L49.339945172560945,-11.767751128345605A3,3,0,0,1,45.771988214926665,-13.818836821621934A47.8125,47.8125,0,0,0,2.8228782287822907,-47.72909505485587A3,3,0,0,1,2.6645352591003757e-15,-50.72386180339585Z"
                                  opacity="1"
                                  fill="#e11d48"
                                  stroke="#ffffff"
                                  strokeWidth="1"
                                ></path>
                                <path
                                  d="M46.62907239652431,79.97574777668349A3,3,0,0,1,45.46371777129906,84.12604229019493A95.625,95.625,0,0,1,-49.00261165545288,82.11506972501986A3,3,0,0,1,-49.9902900003146,77.91894205316474L-27.390354830279648,42.69284036605408A3,3,0,0,1,-23.397275315638186,41.6965545825339A47.8125,47.8125,0,0,0,21.601634321101972,42.654478673492065A3,3,0,0,1,25.54869832400575,43.819791991735265Z"
                                  opacity="1"
                                  fill="#e11d48"
                                  stroke="#ffffff"
                                  strokeWidth="1"
                                ></path>
                                <path
                                  d="M90.05061026260398,-21.477388489586065A3,3,0,0,1,93.68576044421835,-19.160347465234945A95.625,95.625,0,0,1,50.81493373569444,81.00606850376694A3,3,0,0,1,46.62907239652431,79.97574777668349L25.54869832400575,43.819791991735265A3,3,0,0,1,26.478941860606255,39.81081252866655A47.8125,47.8125,0,0,0,47.08178314302937,-8.327115486334739A3,3,0,0,1,49.339945172560945,-11.767751128345605Z"
                                  opacity="1"
                                  fill="#e11d48"
                                  stroke="#ffffff"
                                  strokeWidth="1"
                                ></path>
                                <path
                                  d="M-49.990290000314616,77.91894205316474A3,3,0,0,1,-54.2162057541036,78.7701952430531A95.625,95.625,0,0,1,-95.60658863020649,1.8763889507429181A3,3,0,0,1,-92.56885517765993,-1.182233520680543L-50.71972556136239,-0.6477617077933941A3,3,0,0,1,-47.761252175295674,2.213130565017434A47.8125,47.8125,0,0,0,-28.149148903707285,38.647905146940566A3,3,0,0,1,-27.390354830279655,42.69284036605407Z"
                                  opacity="1"
                                  fill="#e11d48"
                                  stroke="#ffffff"
                                  strokeWidth="1"
                                ></path>
                                <path
                                  d="M-53.26093286451148,-75.72095915532239A3,3,0,0,1,-52.45272032171615,-79.95531724564556A95.625,95.625,0,0,1,-3.0971659919028673,-95.57483030494274A3,3,0,0,1,-1.7319479184152442e-14,-92.57640425616022L-9.769962616701378e-15,-50.72386180339585A3,3,0,0,1,-2.822878228782297,-47.729095054855875A47.8125,47.8125,0,0,0,-25.150524035216677,-40.66308272873551A3,3,0,0,1,-29.182384213844152,-41.4885358604709Z"
                                  opacity="1"
                                  fill="#e11d48"
                                  stroke="#ffffff"
                                  strokeWidth="1"
                                ></path>
                              </g>
                              <g transform="translate(130.8359375,95.625)">
                                <g
                                  transform="translate(-63.43819383327419,-33.45406798484203)"
                                  opacity="1"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <text
                                    text-anchor="middle"
                                    dominant-baseline="central"
                                    style={{
                                      fontSize: "18px",
                                      fontFamily: "sans-serif",
                                      fill: "rgb(255, 255, 255)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    111
                                  </text>
                                </g>
                                <g
                                  transform="translate(44.44258931696226,-56.28885641373728)"
                                  opacity="1"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <text
                                    text-anchor="middle"
                                    dominant-baseline="central"
                                    style={{
                                      fontSize: "18px",
                                      fontFamily: "sans-serif",
                                      fill: "rgb(255, 255, 255)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    157
                                  </text>
                                </g>
                                <g
                                  transform="translate(-1.5263826991385805,71.70250523808963)"
                                  opacity="1"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <text
                                    text-anchor="middle"
                                    dominant-baseline="central"
                                    style={{
                                      fontSize: "18px",
                                      fontFamily: "sans-serif",
                                      fill: "rgb(255, 255, 255)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    129
                                  </text>
                                </g>
                                <g
                                  transform="translate(65.93366144738852,28.21934424652092)"
                                  opacity="1"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <text
                                    text-anchor="middle"
                                    dominant-baseline="central"
                                    style={{
                                      fontSize: "18px",
                                      fontFamily: "sans-serif",
                                      fill: "rgb(255, 255, 255)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    150
                                  </text>
                                </g>
                                <g
                                  transform="translate(-63.151076850129684,33.99294918408102)"
                                  opacity="1"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <text
                                    text-anchor="middle"
                                    dominant-baseline="central"
                                    style={{
                                      fontSize: "18px",
                                      fontFamily: "sans-serif",
                                      fill: "rgb(255, 255, 255)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    119
                                  </text>
                                </g>
                                <g
                                  transform="translate(-21.639024180498946,-68.37639749268955)"
                                  opacity="1"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <text
                                    text-anchor="middle"
                                    dominant-baseline="central"
                                    style={{
                                      fontSize: "18px",
                                      fontFamily: "sans-serif",
                                      fill: "rgb(255, 255, 255)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    72
                                  </text>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col"
                  data-v0-t="card"
                >
                  <div className="flex flex-col space-y-1.5 p-6">
                    <p className="text-sm text-muted-foreground">
                      Mentorship Sessions
                    </p>
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                      12
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="aspect-[4/3]">
                      <div style={{ width: "100%", height: "100%" }}>
                        <div className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="281.671875"
                            height="211.25"
                            role="application"
                            aria-label="A bar chart showing data"
                            focusable="false"
                          >
                            <rect
                              width="281.671875"
                              height="211.25"
                              fill="transparent"
                            ></rect>
                            <g transform="translate(40,0)">
                              <g>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="241.671875"
                                  y1="171"
                                  y2="171"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="241.671875"
                                  y1="117"
                                  y2="117"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="241.671875"
                                  y1="62"
                                  y2="62"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                                <line
                                  opacity="1"
                                  x1="0"
                                  x2="241.671875"
                                  y1="8"
                                  y2="8"
                                  stroke="#f3f4f6"
                                  strokeWidth="1"
                                ></line>
                              </g>
                              <g transform="translate(0,171.25)">
                                <g
                                  transform="translate(27,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Jan
                                  </text>
                                </g>
                                <g
                                  transform="translate(65,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Feb
                                  </text>
                                </g>
                                <g
                                  transform="translate(103,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Mar
                                  </text>
                                </g>
                                <g
                                  transform="translate(141,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Apr
                                  </text>
                                </g>
                                <g
                                  transform="translate(179,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    May
                                  </text>
                                </g>
                                <g
                                  transform="translate(217,0)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="text-before-edge"
                                    text-anchor="middle"
                                    transform="translate(0,16) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    Jun
                                  </text>
                                </g>
                                <line
                                  x1="0"
                                  x2="241.671875"
                                  y1="0"
                                  y2="0"
                                  style={{
                                    stroke: "transparent",
                                    strokeWidth: "1",
                                  }}
                                ></line>
                              </g>
                              <g transform="translate(0,0)">
                                <g
                                  transform="translate(0,171)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="central"
                                    text-anchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    0
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,117)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="central"
                                    text-anchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    50
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,62)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="central"
                                    text-anchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    100
                                  </text>
                                </g>
                                <g
                                  transform="translate(0,8)"
                                  style={{ opacity: "1" }}
                                >
                                  <line
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="0"
                                    style={{
                                      stroke: "rgb(119, 119, 119)",
                                      strokeWidth: "1",
                                    }}
                                  ></line>
                                  <text
                                    dominant-baseline="central"
                                    text-anchor="end"
                                    transform="translate(-16,0) rotate(0)"
                                    style={{
                                      fontFamily: "sans-serif",
                                      fontSize: "11px",
                                      fill: "rgb(51, 51, 51)",
                                      outlineWidth: "0px",
                                      outlineColor: "transparent",
                                    }}
                                  >
                                    150
                                  </text>
                                </g>
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="171.25"
                                  style={{
                                    stroke: "transparent",
                                    strokeWidth: "1",
                                  }}
                                ></line>
                              </g>
                              <g transform="translate(13, 50)">
                                <rect
                                  width="0.6111407693121655"
                                  height="121"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                              <g transform="translate(51, 0)">
                                <rect
                                  width="0.6111407693121655"
                                  height="171"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                              <g transform="translate(89, 31)">
                                <rect
                                  width="0.6111407693121655"
                                  height="140"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                              <g transform="translate(127, 8)">
                                <rect
                                  width="0.6111407693121655"
                                  height="163"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                              <g transform="translate(165, 41)">
                                <rect
                                  width="0.6111407693121655"
                                  height="130"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                              <g transform="translate(203, 93)">
                                <rect
                                  width="0.6111407693121655"
                                  height="78"
                                  rx="0"
                                  ry="0"
                                  fill="#2563eb"
                                  strokeWidth="0"
                                  stroke="#2563eb"
                                  focusable="false"
                                ></rect>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col"
                data-v0-t="card"
              >
                <div className="flex p-6 gap-4">
                  <p className="text-lg font-semibold ">Career Development Goals</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 hover:cursor-pointer"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                </div>
                <div className="px-6 ">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="ml-3">
                        Create a Personal Branding Strategy
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="ml-3">
                        Build a Professional Network on LinkedIn
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6 text-red-500"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>

                      <span className="ml-3">
                        Attend Industry-Specific Networking Events
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <rect
                          x="5"
                          y="5"
                          width="90"
                          height="90"
                          rx="5"
                          ry="5"
                        ></rect>
                      </svg>

                      <span className="ml-3">
                        Build a Diverse Professional Network
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <rect
                          x="5"
                          y="5"
                          width="90"
                          height="90"
                          rx="5"
                          ry="5"
                        ></rect>
                      </svg>
                      <span className="ml-3">
                        Develop and Refine Elevator Pitch
                      </span>
                    </li>
                    <li className="py-4 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <rect
                          x="5"
                          y="5"
                          width="90"
                          height="90"
                          rx="5"
                          ry="5"
                        ></rect>
                      </svg>
                      <span className="ml-3">Create a Career Development Plan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MenteeDashboard;
