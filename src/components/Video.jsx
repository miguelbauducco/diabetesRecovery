import React from 'react';

function Video() {
  return (
    <div  className="video-container" style={{width:"100%", height:"auto"}}>

      <iframe className='videoDesktop' style={{width:"100%", height:"auto"}}
        src="https://www.youtube.com/embed/uWKVsJHz5QE?modestbranding=1&rel=0&showinfo=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin">
      </iframe>

      <iframe className="videoMobile" style={{width:"90%", height:"auto", border:"none", margin:"16px"}} 
        src="https://www.youtube.com/embed/A734EbzBPlc" 
        title="23 años viviendo con Diabetes: la guía completa que diseñé para ayudarte a vivir mejor" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin">
      </iframe>

    </div>
  );
}

export default Video;
