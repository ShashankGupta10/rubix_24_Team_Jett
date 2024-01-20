import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import { useVideo } from "@100mslive/react-sdk";

const Conference = () => {
  const peers = useHMSStore(selectPeers);
  const { videoRef } = useVideo({
    trackId: peers[0].videoTrack,
  });
  return (
    <div className="conference-section flex flex-col justify-center items-center">
      <h1 className="text-lg font-semibold mb-2">CONFERENCE</h1>
      <div className="peers-container flex w-4/6">
        {peers.map((peer) => (
          <div className="peer-container items-end" key={peer.id}>
            <div className="">
              <video
                ref={videoRef}
                className={`peer-video ${peer.isLocal ? "local" : ""} rounded-xl border-none`}
                autoPlay
                muted
                playsInline
              ></video>
            </div>
            <div className="peer-name text-sm font-medium relative top-[-30px] left-[20px]">
              {peer.name} {peer.isLocal ? "YOU" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Conference;
