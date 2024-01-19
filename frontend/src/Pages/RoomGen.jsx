import React from "react";
import { useState } from "react";

const RoomGen = () => {
  const [generatedKey, setGeneratedKey] = useState("");

  const generateKey = () => {
    const newKey = generateUniqueKey();
    setGeneratedKey(newKey);
  };

  const generateRandomLetters = (length) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

  const generateUniqueKey = () => {
    const part1 = generateRandomLetters(3);
    const part2 = generateRandomLetters(3);
    const part3 = generateRandomLetters(3);

    return `${part1}-${part2}-${part3}`;
  };

  const copyToClipboard = () => {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = generatedKey;
    document.body.appendChild(tempInput);

    // Select the text in the input field
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl">Company Logo</div>
            <div className="flex space-x-4">
              <a href="#" rel="ugc">
                <a className="text-white" href="#" rel="ugc">
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
                    <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                    <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                  </svg>
                  <span className="sr-only">Dashboard</span>
                </a>
              </a>
              <a href="#" rel="ugc">
                <a className="text-white" href="#" rel="ugc">
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
                  <span className="sr-only">Users</span>
                </a>
              </a>
              <a href="#" rel="ugc">
                <a className="text-white" href="#" rel="ugc">
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
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span className="sr-only">Settings</span>
                </a>
              </a>
            </div>
          </div>
        </nav>
        <div className="mt-10 flex-grow mb-10">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-2xl mx-auto"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                Create Room
              </h3>
              <p className="text-sm text-muted-foreground">
                Create a private room to interact with the mentee 'One-to-One'
              </p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <button onClick={generateKey}>Generate a Key</button>
                  </div>
                  <div className="space-y-2 ">
                    <div className="flex">
                      <input
                        type="text"
                        id="generated-key-input"
                        value={generatedKey}
                        readOnly
                      />
                      <button onClick={copyToClipboard}>Copy</button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="johndoe@example.com"
                    required=""
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    required=""
                    type="password"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="role"
                  >
                    Role
                  </label>
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r3:"
                    aria-expanded="false"
                    aria-required="true"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    data-placeholder=""
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span style={{ pointerEvents: "none" }}>Select a role</span>
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
                      className="h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  <select
                    aria-hidden="true"
                    required=""
                    tabIndex="-1"
                    style={{
                      position: "absolute",
                      border: "0px",
                      width: "1px",
                      height: "1px",
                      padding: "0px",
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      whiteSpace: "nowrap",
                      overflowWrap: "normal",
                    }}
                  >
                    <option value=""></option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center p-6">
              <button
                className="inline-flex text-white bg-gray-800 hover:bg-gray-600 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors  h-10 px-4 py-2 w-full"
                type="submit"
              >
                Create Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomGen;
