import React from 'react';

function Video() {
  return (
    <div  className="video-container">
      {/* Desktop video */}
      <div className="videoDesktop">
        <iframe
          src="https://streamable.com/e/cbvxmn?autoplay=1&muted=1"
        />
      </div>

      {/* Mobile video */}
      <div className="videoMobile">
        <iframe
          src="https://streamable.com/e/rjvo28?autoplay=1&muted=1"
        />
      </div>
    </div>
  );
}

export default Video;
