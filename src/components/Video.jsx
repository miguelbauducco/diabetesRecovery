import React from 'react';

function Video() {
  return (
    <div
      className="video-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px',
        backgroundColor: 'transparent'
      }}
    >
      {/* Desktop video */}
      <div
        className="videoDesktop"
        style={{
          borderRadius: '30px',
          overflow: 'hidden',
          width: '100%',
          height: '100%',
        }}
      >
        <iframe
          allow="fullscreen;autoplay"
          allowFullScreen
          src="https://streamable.com/e/cbvxmn?autoplay=1&muted=1"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
        />
      </div>

      {/* Mobile video */}
      <div
        className="videoMobile"
        style={{
          borderRadius: '30px',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '400px',
          height: '700px',
          marginTop:"30px",
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <iframe
          allow="fullscreen;autoplay"
          allowFullScreen
          src="https://streamable.com/e/rjvo28?autoplay=1&muted=1"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            border: 'none',
          }}
        />
      </div>
    </div>
  );
}

export default Video;
