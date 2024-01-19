import React from "react";
import one from "../assets/1.png";

const Avatar = () => {
  return (
    <>
      <div className="flex gap-4 justify-center items-center">
        <div>
          <div className="mb-4">
            <p>Try chatting with the mentor's AI avatar </p>
          </div>
          <div>
            <button className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg duration-150 hover:bg-gray-100 active:bg-gray-200">
              Try For Free
            </button>
          </div>
        </div>
        <div>
          <img src={one} className="w-64" />
        </div>
      </div>
    </>
  );
};

export default Avatar;
