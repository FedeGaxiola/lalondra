import React, { useEffect } from 'react';

const TikTokEmbed = ({ videoId }) => {
  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/video/${videoId}`}
      data-video-id={videoId}
      style={{ maxWidth: '100%', minWidth: '325px' }}
    >
      <section>Loading TikTok...</section>
    </blockquote>
  );
};

const TikTokGrid = ({ videoIds }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [videoIds]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {videoIds.map((id) => (
        <TikTokEmbed key={id} videoId={id} />
      ))}
    </div>
  );
};

export default TikTokGrid;