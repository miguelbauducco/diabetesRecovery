import React from 'react';



function Video() {
  return (
    <div className="video-container">
    <video 
    className="video1"
    src="/videos/HORIZONTAL_C.mp4"
    />

    <video
    className="video2"
    src="/videos/VERTICAL_C.mp4"
    />
    </div>

  );
}

export default Video;