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
                    <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/>
                    <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/>
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
                <path xmlns="http://www.w3.org/2000/svg" d="M32 0C14.3 0 0 14.337 0 32c0 17.7 14.337 32 32 32 17.7 0 32-14.337 32-32S49.663 0 32 0zm14.68 46.184c-.573.956-1.797 1.223-2.753.65-7.532-4.588-16.975-5.62-28.14-3.097-1.07.23-2.14-.42-2.37-1.49s.42-2.14 1.49-2.37c12.196-2.79 22.67-1.606 31.082 3.556a2 2 0 0 1 .688 2.753zm3.9-8.717c-.726 1.185-2.256 1.53-3.44.84-8.602-5.276-21.716-6.805-31.885-3.747-1.338.382-2.714-.344-3.097-1.644-.382-1.338.344-2.714 1.682-3.097 11.622-3.517 26.074-1.835 35.976 4.244 1.147.688 1.49 2.217.765 3.403zm.344-9.1c-10.323-6.117-27.336-6.69-37.2-3.708-1.568.497-3.25-.42-3.747-1.988s.42-3.25 1.988-3.747c11.317-3.44 30.127-2.753 41.98 4.282 1.415.84 1.873 2.676 1.032 4.09-.765 1.453-2.638 1.912-4.053 1.07z"/>
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
