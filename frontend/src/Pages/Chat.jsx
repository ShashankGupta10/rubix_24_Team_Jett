import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [chats, setChats] = useState([
    {
      contactName: "Jenny Olsen",
      messages: [
        { text: "Hi there!", sender: "contact" },
        { text: "I have completed my application in the university now waiting for confirmation! Thanks", sender: "contact" },
        { text: "Thanks ❤️", sender: "contact" },

      ],
    },
    {
      contactName: "Jonas Shinde",
      messages: [
        { text: "Hey!", sender: "contact" },
        { text: "I have mailed you the documents.", sender: "contact" },
      ],
    },
    {
      contactName: "Jatin Aristotle",
      messages: [
        { text: "Hello!", sender: "contact" },
        { text: "Any plans for the weekend?", sender: "contact" },
        { text: "Could we schedule the meet on weekend?", sender: "contact" },
      ],
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const navigate = useNavigate();
  const messageInputRef = useRef(null);
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    if (messageInputRef.current && isInputFocused) {
      messageInputRef.current.focus();
    }
  }, [selectedChat, isInputFocused]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const updatedChats = chats.map((chat) =>
        chat === selectedChat
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { text: newMessage, sender: "user" },
              ],
            }
          : chat
      );
      setChats(updatedChats);
      setNewMessage("");
      setSelectedChat(
        updatedChats.find((chat) => chat === selectedChat) || updatedChats[0]
      );
      setIsInputFocused(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && newMessage.trim() !== "") {
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emoji) => {
    setNewMessage((prevMessage) => prevMessage + emoji);
    setShowEmojiPicker(false);
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setIsInputFocused(true);
  };

  return (
    <>
      <div className="flex h-screen bg-white ">
        <aside className="w-80 border-r border-zinc-400">
          <div className="p-4 space-y-4 h-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Messages</h2>
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
                  className="w-6 h-6"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                  <path d="m15 5 4 4"></path>
                </svg>
              </button>
            </div>
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
                className="absolute left-2.5 top-3 h-4 w-4 text-zinc-500 dark:text-zinc-400"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="search"
                className="flex h-10 w-full rounded-md border border-gray-400 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8"
                placeholder="Search messages..."
              />
            </div>
            <div className="space-y-2">
              {chats.map((chat, index) => (
                <div
                  key={index}
                  className={`rounded-md border border-gray-400 ${
                    chat === selectedChat
                      ? "bg-gray-600 text-white"
                      : "bg-card text-card-foreground"
                  } shadow-sm cursor-pointer`}
                  onClick={() => handleChatSelect(chat)}
                  data-v0-t="card"
                >
                  <div className="p-6">
                    <h3 className="font-semibold">{chat.contactName}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {chat.messages.length > 0
                        ? chat.messages[chat.messages.length - 1].text
                        : "No messages"}
                    </p>
                  </div>
                </div>
              ))}

            </div>
            <div className="absolute bottom-10" onClick={()=>{navigate('/dashboard')}}>
              <IoMdArrowBack className="w-6 h-6" />
              </div>
          </div>
        </aside>
        <section className="flex flex-col w-full">
          <header className="border-b  p-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="flex shrink-0 rounded-full relative overflow-visible w-10 h-10">
                <span className="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600"></span>
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                  U
                </span>
              </span>
              <div>
                {selectedChat.contactName}
                <span className="text-xs text-green-600 block">Online</span>
              </div>
            </h2>
          </header>
          <main className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              {selectedChat.messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } gap-2`}
                >
                  <div
                    className={`rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-zinc-200"
                    } p-2`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <footer className="bg-gray-300 rounded-lg dark:border-zinc-700 p-4">
            <div className="flex items-center gap-2">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
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
                  className="w-6 h-6"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" x2="9.01" y1="9" y2="9"></line>
                  <line x1="15" x2="15.01" y1="9" y2="9"></line>
                </svg>
              </button>
              {showEmojiPicker && (
                <div className="absolute bottom-20 bg-gray-600 rounded-xl p-2 text-2xl">
                  <div className="flex flex-wrap w-64 ml-0">
                    <button onClick={() => handleEmojiClick("😊")}>😊</button>
                    <button onClick={() => handleEmojiClick("👍")}>👍</button>
                    <button onClick={() => handleEmojiClick("🎉")}>🎉</button>
                    <button onClick={() => handleEmojiClick("😂")}>😂</button>
                    <button onClick={() => handleEmojiClick("❤️")}>❤️</button>
                    <button onClick={() => handleEmojiClick("🔥")}>🔥</button>
                    <button onClick={() => handleEmojiClick("🙌")}>🙌</button>
                    <button onClick={() => handleEmojiClick("🤔")}>🤔</button>
                    <button onClick={() => handleEmojiClick("😍")}>😍</button>
                    <button onClick={() => handleEmojiClick("🚀")}>🚀</button>
                    <button onClick={() => handleEmojiClick("💡")}>💡</button>
                    <button onClick={() => handleEmojiClick("🎈")}>🎈</button>
                    <button onClick={() => handleEmojiClick("🌟")}>🌟</button>
                    <button onClick={() => handleEmojiClick("🎵")}>🎵</button>
                    <button onClick={() => handleEmojiClick("🍕")}>🍕</button>
                    <button onClick={() => handleEmojiClick("🤙🏻")}>🤙🏻</button>
                    <button onClick={() => handleEmojiClick("🥶")}>🥶</button>
                    <button onClick={() => handleEmojiClick("😎")}>😎</button>
                    <button onClick={() => handleEmojiClick("💓")}>💓</button>
                    <button onClick={() => handleEmojiClick("🔥")}>🔥</button>
                    {/* <button onClick={() => handleEmojiClick("🥲")}>🥲</button> */}
                    <button onClick={() => handleEmojiClick("🥳")}>🥳</button>
                  </div>
                </div>
              )}
              <input
                ref={messageInputRef}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                placeholder="Type a message..."
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
};

export default Chat;
