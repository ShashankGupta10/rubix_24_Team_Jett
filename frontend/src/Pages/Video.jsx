import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import JoinForm from "../Components/JoinForm";
import { useEffect } from "react";
import Conference from "../Components/Conference";
import Footer from "../Components/Footer";

function Video() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="Video ">
      {isConnected ? (
        <>
        <div className="flex flex-col h-screen items-center justify-center rounded-lg border-black border ">
          <Conference />
          <Footer />
          </div>
        </>
      ) : (
        <JoinForm />
      )}
    </div>
  );
}

export default Video;
