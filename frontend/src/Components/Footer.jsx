import { useAVToggle } from "@100mslive/react-sdk";
import { CiVideoOn, CiVideoOff } from "react-icons/ci";
import mute from "../assets/mute.png";
import unmute from "../assets/unmute.png";
import { useState, useRef } from "react";

const Footer = () => {
  const { isLocalAudioEnabled, toggleAudio, isLocalVideoEnabled, toggleVideo } =
    useAVToggle();
  const [audioRecording, setAudioRecording] = useState(null);
  const mediaRecorderRef = useRef(null);

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
      console.log(audioRecording);
      const formData = new FormData();
      await formData.append("audio", audioRecording, "audio.mp3");
      console.log(formData.get("audio"));
      // Assuming you have a function to send data to the API
      sendToAPI(formData);
    }
  };

  const sendToAPI = (formData) => {
    // Implement your API call here
    // You can use fetch or any other library to send the file to the API
    fetch("http://localhost:5000/trial_mentorship", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) =>
        console.error("Error sending audio file to API:", error)
      );
  };

  return (
    <div className="control-bar border-4 rounded-lg w-16 flex justify-evenly">
      <button className="btn-control" onClick={handleFileChange}>
        {isLocalAudioEnabled ? (
          <img className="w-3 mr-2" src={unmute} />
        ) : (
          <img className="w-4 mr-2" src={mute} />
        )}
      </button>
      <button className="btn-control" onClick={toggleVideo}>
        {isLocalVideoEnabled ? <CiVideoOn /> : <CiVideoOff />}
      </button>
      <button
        className="btn-control"
        onClick={handleFileUpload}
        disabled={!audioRecording}
      >
        Upload
      </button>
    </div>
  );
};

export default Footer;
