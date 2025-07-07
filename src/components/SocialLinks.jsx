import "./../index.css"
import InstagramEmbed from "./InstagramEmbed";

const SocialLinks = () => {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 bg-[#6D9BA6]">
      <div className="w-full max-w-md mx-auto bg-[#F2AEAE] rounded-xl shadow-2xl p-6 sm:p-8">
        <header className="flex flex-col items-center mb-8">
          <img
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#394A59] object-cover mb-4 shadow-lg"
            src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/544c4c80b4ad67f5358ef37fd847bc61~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=0426dd8f&x-expires=1751875200&x-signature=TmAu9HcbCsQvqKrjPjZBQvDUU6E%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva"
            alt="lalondra Avatar"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-[#394A59]">lalondra</h1>
          <p className="text-sm text-#394A59 mt-1">@alondraesquivelba</p>
        </header>

        <main className="space-y-6">
          {/* Instagram Feed */}
          <section>
            <InstagramEmbed />
            <a
              className="link-item flex items-center justify-center w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg shadow-md"
              href="https://www.instagram.com/channel/AbbCs6u2YZqZkWjq/"
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
            <a className="link-item flex items-center justify-center w-full bg-[#1DB954] hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md" href="https://open.spotify.com/user/12162886814?si=87a96cf80037465b" rel="noopener noreferrer">
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
            <a className="link-item flex items-center justify-center w-full bg-black hover:bg-[#292929] text-white font-semibold py-3 px-4 rounded-lg shadow-md" href="https://www.tiktok.com/@alondraesquiveliba" rel="noopener noreferrer">
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
            <button
              type="button"
              className="link-item flex items-center justify-center w-full bg-[#0078D4] hover:bg-[#00579D] text-white font-semibold py-3 px-4 rounded-lg shadow-md"
              onClick={() => {
                navigator.clipboard.writeText('alondraesquivelibarra13@gmail.com');
                alert('¡Correo copiado!');
              }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 510 510"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path xmlns="http://www.w3.org/2000/svg" className="st0" d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345   c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345   C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203   c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958   c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064   c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571   c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637   L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136   C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435   C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959   l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959   C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8   V385.92z"/>
              </svg>
              e-mail
            </button>
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
