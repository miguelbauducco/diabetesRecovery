import React, { useEffect, useRef } from 'react';

function Video() {

  const desktopRef = useRef(null);

  useEffect(() => {
    const iframe = desktopRef.current;
    if (!iframe) return;

    const handleFocus = () => {
      iframe.blur();
      window.scrollTo({ top: window.scrollY });
    };

    iframe.addEventListener('focus', handleFocus);
    return () => iframe.removeEventListener('focus', handleFocus);
  }, []);

  return (
    <div className="video-container">
      <div 
      className='div-desk'
      style={{
        position: 'relative',
        width: '100%',
        border:'none',
        paddingBottom: '56.25%',
      }}>

      <iframe
      src="https://streamable.com/e/cbvxmn?autoplay=1"
      allow="fullscreen; autoplay"
      className='videoDesktop'
      allowFullScreen
      style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      overflow: 'hidden'
      }}
  />
  </div>
      <iframe
        className="videoMobile"
        src="https://www.youtube.com/embed/A734EbzBPlc"
        title="23 años viviendo con Diabetes:"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

  );
}

export default Video;
