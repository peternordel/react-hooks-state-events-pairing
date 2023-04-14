import video from "../data/video.js";
import VideoCard from "./VideoCard";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <VideoCard video={video} />
    </div>
  );
}
