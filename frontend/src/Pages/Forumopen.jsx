import React from "react";
import Forumsidebar from "../Components/Forumsidebar";
import one from "../assets/1.png";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Forumopen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block ">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <Forumsidebar />
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 sm:gap-6 border-b bg-gray-100/40 px-6 ">
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
                <path d="M17 6.1H3"></path>
                <path d="M21 12.1H3"></path>
                <path d="M15.1 18H3"></path>
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
                    className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 "
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                  <input
                    className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 "
                    placeholder="Search questions..."
                    type="search"
                  />
                </div>
              </form>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ml-4">
              Ask a Question
            </button>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 "
              type="button"
              id="radix-:rk:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <img
                src={one}
                width="32"
                height="32"
                className="rounded-full"
                alt="Avatar"
                style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
              />
              <span className="sr-only">Toggle</span>
            </button>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 ">
            <div
              className=""
              onClick={() => {
                navigate("/forum");
              }}
            >
              <IoMdArrowBack className="w-6 h-6" />
            </div>
            <div className="h-full">
              <div className=" mx-auto px-4 py-8">
                <div className="flex  justify-between mb-4">
                  <h1 className="text-2xl font-bold ">
                    What is the best way to learn React?
                  </h1>
                  <button className="px-5 py-3 text-gray-900 duration-150 bg-gray-100 rounded-lg hover:bg-gray-100 ">
                    Reply
                  </button>
                </div>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                        <img
                          src={one}
                          width="32"
                          height="32"
                          className="rounded-full"
                          alt="Avatar"
                          style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
                        />
                      </span>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <h2 className="font-medium">John Doe</h2>
                          <span className="text-xs text-gray-500">
                            2 hours ago
                          </span>
                        </div>
                        <p className="text-sm">
                          I found that the best way to learn React is by doing.
                          Start with the basics and gradually move on to more
                          complex concepts. Build projects along the way to
                          reinforce what you've learned.
                        </p>
                        <div className="flex items-center space-x-2">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                              className="h-5 w-5"
                            >
                              <path d="M7 10v12"></path>
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                            </svg>
                          </button>
                          <span className="text-sm">24</span>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                              className="h-5 w-5"
                            >
                              <path d="M17 14V2"></path>
                              <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                            </svg>
                          </button>
                          <span className="text-sm">2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                        <img
                          src={one}
                          width="32"
                          height="32"
                          className="rounded-full"
                          alt="Avatar"
                          style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
                        />
                      </span>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <h2 className="font-medium">Jane Doe</h2>
                          <span className="text-xs text-gray-500">
                            4 hour ago
                          </span>
                        </div>
                        <p className="text-sm">
                          I agree with John. Building projects is a great way to
                          learn. Also, don't be afraid to read the React docs.
                          They are very well-written and helpful.
                        </p>
                        <div className="flex items-center space-x-2">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                              className="h-5 w-5"
                            >
                              <path d="M7 10v12"></path>
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                            </svg>
                          </button>
                          <span className="text-sm">18</span>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                              className="h-5 w-5"
                            >
                              <path d="M17 14V2"></path>
                              <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                            </svg>
                          </button>
                          <span className="text-sm">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                        <img
                          src={one}
                          width="32"
                          height="32"
                          className="rounded-full"
                          alt="Avatar"
                          style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
                        />
                      </span>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                          <h2 className="font-medium">Jamie Oliver</h2>
                          <span className="text-xs text-gray-500">
                            10 hour ago
                          </span>
                        </div>
                        <p className="text-sm">
                          I found that the official React documentation is a
                          great place to start. It's very comprehensive and has
                          a lot of examples. I also recommend checking out some
                          online courses on platforms like Coursera or Udemy.
                        </p>
                        <div className="flex items-center space-x-2">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                              className="h-5 w-5"
                            >
                              <path d="M7 10v12"></path>
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                            </svg>
                          </button>
                          <span className="text-sm">18</span>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                              className="h-5 w-5"
                            >
                              <path d="M17 14V2"></path>
                              <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                            </svg>
                          </button>
                          <span className="text-sm">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Forumopen;
