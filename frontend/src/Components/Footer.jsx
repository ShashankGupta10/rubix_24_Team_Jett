import { useAVToggle } from "@100mslive/react-sdk";
import { CiVideoOn } from "react-icons/ci";
import { CiVideoOff } from "react-icons/ci";
import mute from '../assets/mute.png'
import unmute from '../assets/unmute.png'



const Footer = () => {
  const { isLocalAudioEnabled, toggleAudio, isLocalVideoEnabled, toggleVideo } =
    useAVToggle();
  return (
    <div className="control-bar border-4 rounded-lg w-16 flex justify-evenly">
      <button className="btn-control" onClick={toggleAudio}>
        {isLocalAudioEnabled ? <img className="w-3 mr-2" src={unmute} /> : <img className="w-4 mr-2" src={mute}/>}
      </button>
      <button className="btn-control" onClick={toggleVideo}>
        {isLocalVideoEnabled ? <CiVideoOn />  : <CiVideoOff />}
      </button>
    </div>
  );
};
export default Footer;
