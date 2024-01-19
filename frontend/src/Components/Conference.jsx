import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import Peer from "./Peer";

const Conference = () => {
  const peers = useHMSStore(selectPeers);
  return (
    <div className="conference-section flex flex-col justify-center items-center border-t border">
      <h1 className="text-lg font-semibold mb-2">Conference</h1>
      <div className="peers-container flex border w-3/6">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer}></Peer>
        ))}
      </div>
    </div>
  );
};
export default Conference;
