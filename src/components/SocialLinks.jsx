import "./../index.css"
import ContactButton from "./ContactButton";
import InstagramEmbed from "./InstagramEmbed";
import React, { useState } from "react";
import { CONFIG } from "../config";

const SocialLinks = () => {
  const [instaLoading, setInstaLoading] = useState(true);

  // Oculta el loading después de 3 segundos aunque InstagramEmbed no llame onLoad
  React.useEffect(() => {
    if (instaLoading) {
      const timeout = setTimeout(() => {
        setInstaLoading(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [instaLoading]);

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 bg-[#6D9BA6] relative">
      {instaLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-60">
          <span className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-pink-500 mb-4"></span>
          <span className="text-pink-200 text-lg font-semibold">Cargando...</span>
        </div>
      )}
      <div className="w-full max-w-md mx-auto bg-[#F2AEAE] rounded-xl shadow-2xl p-6 sm:p-8">
        <header className="flex flex-col items-center mb-8">
          <img
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#394A59] object-cover mb-4 shadow-lg"
            src={process.env.PUBLIC_URL + "/lalondra_avatar.jpeg"}
            alt="lalondra Avatar"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-[#394A59]">lalondra</h1>
          <p className="text-sm text-#394A59 mt-1">@alondraesquivelba</p>
        </header>

        <main className="space-y-6">
          {/* Podcast Button */}


          {/* Instagram Feed */}
          <section>
            <div className={instaLoading ? 'invisible h-0' : ''}>
              <InstagramEmbed onLoad={() => setInstaLoading(false)} profileUrl={CONFIG.instagramProfile} />
            </div>
            <a
              className="link-item flex items-center justify-center w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg shadow-md"
              href={CONFIG.instagramChannel}
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2"
                style={{ marginTop: "-6px" }}
                fill="currentColor"
                viewBox="0 0 27 27"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z" />
                <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
              </svg>
              Canal de Difusión de Instagram
            </a>
          </section>
          <div className="space-y-4 pt-4 border-t border-gray-700">
            <a className="link-item flex items-center justify-center w-full bg-[#1DB954] hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md" href={CONFIG.spotify} rel="noopener noreferrer">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 70 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path xmlns="http://www.w3.org/2000/svg" d="M32 0C14.3 0 0 14.337 0 32c0 17.7 14.337 32 32 32 17.7 0 32-14.337 32-32S49.663 0 32 0zm14.68 46.184c-.573.956-1.797 1.223-2.753.65-7.532-4.588-16.975-5.62-28.14-3.097-1.07.23-2.14-.42-2.37-1.49s.42-2.14 1.49-2.37c12.196-2.79 22.67-1.606 31.082 3.556a2 2 0 0 1 .688 2.753zm3.9-8.717c-.726 1.185-2.256 1.53-3.44.84-8.602-5.276-21.716-6.805-31.885-3.747-1.338.382-2.714-.344-3.097-1.644-.382-1.338.344-2.714 1.682-3.097 11.622-3.517 26.074-1.835 35.976 4.244 1.147.688 1.49 2.217.765 3.403zm.344-9.1c-10.323-6.117-27.336-6.69-37.2-3.708-1.568.497-3.25-.42-3.747-1.988s.42-3.25 1.988-3.747c11.317-3.44 30.127-2.753 41.98 4.282 1.415.84 1.873 2.676 1.032 4.09-.765 1.453-2.638 1.912-4.053 1.07z" />
              </svg>
              Spotify
            </a>
            <a className="link-item flex items-center justify-center w-full bg-black hover:bg-[#292929] text-white font-semibold py-3 px-4 rounded-lg shadow-md" href={CONFIG.tiktok} rel="noopener noreferrer">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              TikTok
            </a>
            <a className="link-item flex items-center justify-center w-full bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold py-3 px-4 rounded-lg shadow-md" href={CONFIG.youtube} rel="noopener noreferrer">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
            <a className="link-item flex items-center justify-center w-full bg-[#eb512f] hover:bg-[#d43f66] text-white font-semibold py-3 px-4 rounded-lg shadow-md" href={CONFIG.groover} rel="noopener noreferrer">
              <svg
                className="w-10 h-7 mr-2"
                fill="white"
                viewBox="0 0 100 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 9.57,10.0 L 8.65,10.46 L 7.74,11.37 L 7.51,11.83 L 7.28,12.74 L 7.06,13.43 L 6.83,14.57 L 6.6,15.48 L 6.37,16.85 L 6.14,17.99 L 6.14,19.82 L 5.91,21.42 L 5.69,21.65 L 5.46,24.62 L 5.23,27.36 L 5.0,32.61 L 5.0,40.61 L 5.23,46.32 L 5.46,49.06 L 5.69,51.8 L 5.91,53.4 L 6.14,53.63 L 6.14,55.69 L 6.37,56.83 L 6.6,58.2 L 6.83,59.11 L 7.06,60.25 L 7.28,60.94 L 7.51,61.85 L 7.74,62.54 L 7.97,62.99 L 8.43,63.68 L 9.11,64.14 L 10.25,64.37 L 10.71,64.37 L 11.62,64.14 L 12.08,63.91 L 12.77,63.22 L 12.99,62.77 L 13.22,62.08 L 13.45,61.4 L 13.68,60.71 L 13.91,59.57 L 14.14,58.65 L 14.14,57.51 L 14.37,56.6 L 14.59,56.37 L 14.59,54.77 L 14.82,53.4 L 15.05,53.17 L 15.05,50.2 L 15.28,49.75 L 15.74,49.29 L 16.19,49.75 L 16.42,51.12 L 16.65,52.26 L 16.65,53.4 L 16.88,54.31 L 17.11,55.46 L 17.34,56.37 L 17.56,57.51 L 17.79,58.2 L 18.02,59.11 L 18.48,59.8 L 18.48,60.25 L 18.93,60.94 L 18.93,61.4 L 19.85,63.22 L 20.53,63.91 L 20.99,64.14 L 21.9,64.37 L 25.33,64.37 L 26.24,64.14 L 26.7,63.91 L 27.39,63.22 L 28.3,61.4 L 28.3,60.94 L 28.76,60.25 L 28.76,59.8 L 29.21,59.11 L 29.21,58.2 L 29.44,57.51 L 29.67,57.28 L 29.9,56.37 L 30.13,55.69 L 30.36,54.54 L 30.58,53.63 L 30.81,52.26 L 31.04,51.12 L 31.04,49.29 L 31.27,48.15 L 32.18,47.23 L 32.18,47.92 L 32.41,48.83 L 32.64,49.06 L 32.64,50.2 L 32.87,50.89 L 33.1,51.12 L 33.1,52.03 L 33.32,52.72 L 33.55,52.94 L 33.55,53.86 L 34.01,54.54 L 34.01,55.23 L 34.47,55.91 L 34.47,56.6 L 35.38,58.2 L 35.38,58.65 L 36.29,60.48 L 36.75,61.17 L 37.21,61.85 L 37.66,62.54 L 38.35,63.22 L 38.81,63.68 L 39.26,64.14 L 40.41,64.37 L 47.26,64.37 L 48.17,64.14 L 48.63,63.91 L 49.77,62.77 L 50.23,62.08 L 50.69,61.4 L 51.14,60.71 L 52.06,58.88 L 52.06,58.43 L 52.51,57.97 L 52.74,57.28 L 52.74,56.83 L 53.2,56.14 L 53.43,55.46 L 53.43,55.0 L 53.88,54.31 L 54.11,53.4 L 54.34,52.72 L 54.34,51.8 L 54.8,51.35 L 55.48,52.03 L 55.94,52.94 L 55.94,53.4 L 56.4,53.86 L 57.31,55.91 L 57.77,56.6 L 58.22,57.28 L 58.91,58.2 L 59.59,59.11 L 62.79,62.31 L 63.93,63.22 L 64.62,63.68 L 65.53,64.14 L 66.68,64.37 L 80.84,64.37 L 81.75,64.14 L 82.44,63.68 L 83.12,63.22 L 83.81,62.77 L 84.95,61.85 L 86.78,60.03 L 87.92,58.65 L 88.6,57.74 L 89.06,57.06 L 89.52,56.37 L 89.75,55.69 L 90.2,55.23 L 90.43,54.54 L 90.89,54.09 L 90.89,53.63 L 91.35,53.17 L 91.35,52.72 L 91.8,52.03 L 91.8,51.57 L 92.26,50.89 L 92.26,50.43 L 92.72,49.75 L 92.94,49.06 L 93.17,48.38 L 93.4,47.46 L 93.63,46.78 L 93.86,45.63 L 94.09,44.72 L 94.31,43.12 L 94.54,41.75 L 94.77,38.78 L 94.77,34.9 L 94.54,31.93 L 94.31,30.56 L 94.09,28.96 L 93.86,28.05 L 93.63,26.9 L 93.4,26.22 L 93.17,25.3 L 92.94,24.62 L 92.72,23.93 L 92.26,23.25 L 92.26,22.79 L 91.8,22.11 L 91.8,21.65 L 91.35,20.96 L 91.35,20.51 L 90.89,20.05 L 90.89,19.59 L 90.43,19.14 L 89.97,17.99 L 89.52,17.31 L 89.06,16.62 L 88.6,15.94 L 88.15,15.25 L 87.23,14.11 L 84.49,11.37 L 83.58,10.69 L 82.66,10.23 L 81.52,10.0 L 65.76,10.23 L 65.08,10.0 L 64.39,10.23 L 63.93,10.46 L 63.25,10.91 L 61.42,12.51 L 60.96,12.97 L 59.37,14.8 L 58.68,15.71 L 58.22,16.4 L 57.77,17.08 L 57.31,17.77 L 56.85,18.91 L 56.4,19.37 L 56.4,19.82 L 55.94,20.28 L 55.94,20.74 L 55.48,21.19 L 55.48,21.65 L 54.8,22.11 L 54.34,21.65 L 54.11,20.74 L 53.88,20.05 L 53.88,19.37 L 53.65,18.68 L 53.43,17.99 L 52.97,17.31 L 52.97,16.85 L 52.51,16.17 L 52.51,15.71 L 52.06,15.03 L 52.06,14.57 L 51.6,14.11 L 51.6,13.65 L 51.14,12.97 L 50.69,12.51 L 50.46,11.83 L 50.0,11.14 L 49.54,10.69 L 48.17,10.0 L 39.95,10.23 L 39.49,10.0 L 38.81,10.23 L 38.35,10.46 L 37.44,11.37 L 36.98,12.06 L 36.75,12.74 L 36.29,13.2 L 35.15,15.48 L 35.15,15.94 L 34.47,17.08 L 34.47,17.77 L 34.01,18.45 L 33.78,19.14 L 33.55,20.05 L 33.32,20.96 L 33.1,21.65 L 33.1,22.56 L 32.87,23.25 L 32.64,23.48 L 32.64,24.62 L 32.41,25.53 L 31.5,26.22 L 31.27,25.53 L 31.04,24.16 L 31.04,22.56 L 30.81,21.42 L 30.58,20.05 L 30.36,19.14 L 30.13,17.99 L 29.9,17.31 L 29.67,17.08 L 29.67,16.17 L 29.44,15.48 L 29.21,14.57 L 28.76,13.88 L 28.76,13.2 L 28.3,12.51 L 28.3,12.06 L 27.84,11.37 L 26.93,10.46 L 26.02,10.0 L 21.9,10.0 L 20.76,10.23 L 20.3,10.46 L 19.39,11.37 L 18.71,12.74 L 18.48,13.43 L 18.48,13.88 L 18.02,14.57 L 17.79,15.48 L 17.56,16.17 L 17.56,17.08 L 17.34,17.77 L 17.11,17.99 L 16.88,19.14 L 16.65,20.05 L 16.42,21.42 L 16.19,22.56 L 15.96,24.16 L 15.28,23.93 L 15.05,23.48 L 15.05,20.51 L 14.82,19.14 L 14.59,18.91 L 14.59,17.31 L 14.37,16.17 L 14.14,15.03 L 13.91,14.11 L 13.68,12.97 L 13.45,12.28 L 13.22,11.6 L 12.77,10.91 L 12.31,10.46 L 11.85,10.46 L 11.17,10.0 L 10.71,10.0 L 10.03,10.0 Z" />
              </svg>
              Groover
            </a>
            <a className="link-item flex items-center justify-center w-full bg-[#1DB954] hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md mb-6" href={CONFIG.podcast} rel="noopener noreferrer">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 70 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path xmlns="http://www.w3.org/2000/svg" d="M32 0C14.3 0 0 14.337 0 32c0 17.7 14.337 32 32 32 17.7 0 32-14.337 32-32S49.663 0 32 0zm14.68 46.184c-.573.956-1.797 1.223-2.753.65-7.532-4.588-16.975-5.62-28.14-3.097-1.07.23-2.14-.42-2.37-1.49s.42-2.14 1.49-2.37c12.196-2.79 22.67-1.606 31.082 3.556a2 2 0 0 1 .688 2.753zm3.9-8.717c-.726 1.185-2.256 1.53-3.44.84-8.602-5.276-21.716-6.805-31.885-3.747-1.338.382-2.714-.344-3.097-1.644-.382-1.338.344-2.714 1.682-3.097 11.622-3.517 26.074-1.835 35.976 4.244 1.147.688 1.49 2.217.765 3.403zm.344-9.1c-10.323-6.117-27.336-6.69-37.2-3.708-1.568.497-3.25-.42-3.747-1.988s.42-3.25 1.988-3.747c11.317-3.44 30.127-2.753 41.98 4.282 1.415.84 1.873 2.676 1.032 4.09-.765 1.453-2.638 1.912-4.053 1.07z" />
              </svg>
              Podcast
            </a>
            <ContactButton email={CONFIG.email} />
          </div>
        </main>

        <footer className="mt-10 text-center">
          <p className="text-xs text-#394A59">© 2025 lalondra. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default SocialLinks;
