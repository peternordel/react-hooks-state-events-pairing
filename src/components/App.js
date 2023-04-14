import video from "../data/video.js";
import VideoCard from "./VideoCard";
import React from "react";

function App() {
  const [videoData, setVideoData] = React.useState(video)

  function handleRemove (index) {
    setVideoData(prevVideoData => {
      videoData.comments.splice(index, 1)
      return {...prevVideoData}
    })
  }

  function handleVotes (e) {
    const {name} = e.target
    setVideoData(prevVideoData => {
      name === 'upvotes' ? prevVideoData.upvotes++ : prevVideoData.downvotes++
      return {...prevVideoData}
    })
  }

  return (
    <div className="App">
      <VideoCard videoData={videoData} handleClick={handleVotes} handleRemove={handleRemove} />
    </div>
  );
}

export default App;
