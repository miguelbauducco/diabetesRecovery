import React from 'react';


function Video() {
  return (
    <div className="video-container">
      <iframe 
      allow="fullscreen;autoplay" 
      allowfullscreen
      src="https://streamable.com/e/cbvxmn?autoplay=1&muted=1"
      style={{borderRadius:"30px", width:"100%", height:"100%", overflow:"hidden"}}>
      </iframe>

    </div>

  );
}

export default Video;