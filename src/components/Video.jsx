import React from 'react';

function Video() {
  return (
    <div  className="video-container">
    <iframe className="videoDesktop"src="https://www.youtube.com/embed/bq6xatlMxPo" title="Put Type 2 Diabetes In Remission" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
          <div className="videoMobile">
        <iframe
          src="https://streamable.com/e/rjvo28?autoplay=1&muted=1"
        />
      </div>
    
    
    
    </div>

  );
}

export default Video;
