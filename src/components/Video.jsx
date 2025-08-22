import React from 'react';


function Video() {
  return (
    <div className="video-container">
    <video 
    className="video1"
    autoPlay
    muted
    loop
    playsInline
    controls
    controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
    preload="metadata"
    disablePictureInPicture
    src="./videos/HORIZONTAL_C.mp4"
    />

    <video
    className="video2"
    autoPlay
    muted
    loop
    playsInline
    controls
    controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
    preload="metadata"
    disablePictureInPicture
    src={`${process.env.PUBLIC_URL}/videos/VERTICAL_C.mp4`}
    />
    </div>

  );
}

export default Video;