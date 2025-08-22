import React from 'react';
import videoHorizontal from '../Assets/videos/HORIZONTAL_C.mp4'
import videoVertical from '../Assets/videos/VERTICAL_C.mp4'


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
    src={videoHorizontal}
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
    src={videoVertical}
    />
    </div>



  );
}

export default Video;