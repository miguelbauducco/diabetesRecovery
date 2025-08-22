import React from 'react';


function Video() {
  return (
    <div className="video-container"  style={{ borderRadius: "30px", overflow: "hidden" }}>
      <iframe 
      className="videoDesktop"
      allow="fullscreen;autoplay" 
      allowfullscreen
      src="https://streamable.com/e/cbvxmn?autoplay=1&muted=1"
      style={{borderRadius:"30px", width:"100%", height:"100%", overflow:"hidden", border:"none"}}>
      </iframe>

      <iframe
      className="videoMobile"
      allow="fullscreen;autoplay"
      allowfullscreen
      src="https://streamable.com/e/rjvo28?autoplay=1&muted=1"
      style={{borderRadius:"30px", width:"95%", height:"95%", overflow:"hidden", border:"none"}}>
      </iframe>

    </div>

  );
}

export default Video;