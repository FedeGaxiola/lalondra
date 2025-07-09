import React, { useEffect, useRef } from 'react';

const InstagramEmbed = ({ onLoad }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      // Instagram no tiene callback, así que usamos un pequeño timeout para simular el onLoad
      setTimeout(() => {
        if (onLoad) onLoad();
      }, 1500);
    }
  }, [onLoad]);

  return (
    <div ref={containerRef} className="rounded-xl overflow-hidden shadow-lg">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/alondraesquiveliba/"
        data-instgrm-version="14"
        style={{ background: "#FFF", border: "0", margin: "1em auto", maxWidth: "540px", width: "100%" }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;