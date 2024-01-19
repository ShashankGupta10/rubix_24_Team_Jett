import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import { useVideo } from "@100mslive/react-sdk";

const Conference = () => {
  const peers = useHMSStore(selectPeers);
  const { videoRef } = useVideo({
    trackId: peers[0].videoTrack,
  });
  return (
    <div className="conference-section flex flex-col justify-center items-center border-t border">
      <h1 className="text-lg font-semibold mb-2">Conference</h1>
      <div className="peers-container flex border w-3/6">
        {peers.map((peer) => (
          <div className="peer-container items-end" key={peer.id}>
            <div className="border border-black">
              <video
                ref={videoRef}
                className={`peer-video ${peer.isLocal ? "local" : ""}`}
                autoPlay
                muted
                playsInline
              ></video>
            </div>
            <div className="peer-name ">
              {peer.name} {peer.isLocal ? "(You)" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Conference;
