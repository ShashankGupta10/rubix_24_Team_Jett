import axios from "axios";
import React, { useState } from "react";

const AIChatbot = () => {
    const [data, setData] = useState("");
    const [resp, setResp] = useState("");

    const handleClick = async () => {
        const response = await axios.post("http://localhost:5000/chat", {
            message: data,
        });
        setResp(response.data);
    }
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-lg font-bold">MentorHub AI</h1>
        <div className="flex items-center gap-2">
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
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
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
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 border-r border-gray-200 p-4">
          <h2 className="text-lg font-bold mb-4">Mentor Information</h2>
          <div className="flex items-center gap-2">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full"
              alt="Mentor Profile Picture"
              style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
            />
            <div>
              <h3 className="font-medium">Striver</h3>
              <p className="text-sm text-gray-500">
                Software Engineer at Media.net
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Striver has been a software engineer for 10 years. He enjoys working
            with C++ and loves to learn new technologies.
          </p>
        </div>
        <div className="flex flex-col flex-1 overflow-auto p-4">
          <div className="flex-1 space-y-4">
            <div className="flex items-end justify-end">
              <div className="max-w-xs mx-2 bg-blue-500 text-white p-3 rounded-lg">
                <p>Hello! How can I help you today?</p>
              </div>
            </div>
            <div className="flex items-start justify-start">
              <div className="max-w-xs mx-2 bg-gray-100 p-3 rounded-lg">
                <p>I have a question about the codebase.</p>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <div className="max-w-xs mx-2 bg-blue-500 text-white p-3 rounded-lg">
                <p>Sure, I'd be happy to answer your question.</p>
              </div>
            </div>
            <div className="flex items-start justify-start">
              <div className="max-w-xs mx-2 bg-gray-100 p-3 rounded-lg">
               { data? <p>{resp}</p> : <></> }
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
              placeholder="Type your message here."
              onChange={(e) => setData(e.target.value)}
            ></textarea>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            onClick={handleClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
