import { useAVToggle } from "@100mslive/react-sdk";
import { CiVideoOn, CiVideoOff } from "react-icons/ci";
import mute from "../assets/mute.png";
import unmute from "../assets/unmute.png";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const { isLocalAudioEnabled, toggleAudio, isLocalVideoEnabled, toggleVideo } =
    useAVToggle();
  const [audioRecording, setAudioRecording] = useState(null);
  const mediaRecorderRef = useRef(null);
  const [playAudio, setPlayAudio] = useState(false)

  const handleFileChange = () => {
    toggleAudio();

    if (isLocalAudioEnabled) {
      // Start recording
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorderRef.current = mediaRecorder;

          const chunks = [];
          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              chunks.push(event.data);
              console.log(chunks);
            }
          };

          mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: "audio/wav" });
            setAudioRecording(blob);
          };

          mediaRecorder.start();
        })
        .catch((error) => console.error("Error accessing microphone:", error));
    } else {
      // Stop recording
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
    }
  };

  const handleFileUpload = async () => {
    if (audioRecording) {
      const formData = new FormData();
      await formData.append("audio", audioRecording, "audio.mp3");
      // Assuming you have a function to send data to the API
      sendToAPI(formData);
    }
  };

  const sendToAPI = async (formData) => {
    let res = await axios.post("/api/trial_mentorship", formData, ).catch((error) => {console.log(error);})
    setPlayAudio(true)
  };


  return (
    <div className="control-bar border-4 rounded-lg flex pr-2 justify-evenly">
      <button className="btn-control" onClick={handleFileChange}>
        {isLocalAudioEnabled ? (
          <img className="w-7 h-9 mr-2" src={mute} />
        ) : (
          <img className="w-6 h-9 mr-2" src={unmute} />
        )}
      </button>
      <button className="btn-control w-8" onClick={toggleVideo}>
        {isLocalVideoEnabled ? <CiVideoOn className="w-full scale-150"/> : <CiVideoOff className="w-full scale-150" />}
      </button>
      <button
        className="btn-control"
        onClick={handleFileUpload}
        disabled={!audioRecording}
      >
        Get Answer
      </button>
      {playAudio?
      <audio autoPlay>
        <source src="http://127.0.0.1:5000/static/output.wav" type="audio/wav" />
      </audio>:
      <></>
      }
    </div>
  );
};

export default Footer;
