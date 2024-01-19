import { useHMSActions } from "@100mslive/react-sdk";
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const JoinForm = () => {
  const navigate = useNavigate();
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: "",
  });

  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName = "", roomCode = "" } = inputValues;

    const authToken = await hmsActions.getAuthTokenByRoomCode({ roomCode });

    try {
      await hmsActions.join({ userName, authToken });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    // <form onSubmit={handleSubmit}>
    //   <h2>Join Room</h2>
    //   <div className="input-container">
    //     <input
    //       required
    //       id="name"
    //       type="text"
    //       name="name"
    //       value={inputValues.name}
    //       onChange={handleInputChange}
    //       placeholder="Your Name"
    //     ></input>
    //   </div>
    //   <div className="input-container">
    //     <input
    //       required
    //       id="room-code"
    //       type="text"
    //       name="roomCode"
    //       onChange={handleInputChange}
    //       placeholder="Room Code"
    //     ></input>
    //   </div>
    //   <button className="btn-primary">Join</button>
    // </form>
    <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="border border-gray-300 py-2 px-2 rounded-lg" onClick={()=>{navigate('/dashboard')}}>
              <IoMdArrowBack className="w-6 h-4" />
              </div>
      <header class="mt-6 mb-10 text-center">
        <h1 class="text-4xl font-bold text-gray-800 ">
          Create and Join Room
        </h1>
        <p class="mt-2 text-gray-600 ">
          Please enter your details to join the call
        </p>
      </header>
      <div
        class="rounded-lg border-4 bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto"
        data-v0-t="card"
      >
        <div class="p-8">
          <form class="space-y-6" onSubmit={handleSubmit}>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="name"
              >
                Name
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleInputChange}
                required=""
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="entry-key"
              >
                Entry Key
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter your entry key"
                id="room-code"
                type="text"
                name="roomCode"
                onChange={handleInputChange}
                required=""
              />
            </div>
            <button
              class="btn-primary bg-gray-800 text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              type="submit"
            >
              Enter Call
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
export default JoinForm;
