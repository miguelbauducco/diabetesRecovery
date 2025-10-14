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
    <div className="video-container" style={{ width: "100%"}}>
      <iframe
        ref={desktopRef}
        className="videoDesktop"
        style={{ width: "90%", height: "auto" }}
        src="https://www.youtube.com/embed/uWKVsJHz5QE?modestbranding=1&rel=0&showinfo=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        tabIndex={-1} 
      ></iframe>

      <iframe
        className="videoMobile"
        style={{ width: "92%", height: "auto", border: "none", margin: "16px" }}
        src="https://www.youtube.com/embed/A734EbzBPlc"
        title="23 años viviendo con Diabetes:"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default Video;
