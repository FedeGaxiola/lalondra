import ContactButton from "./ContactButton";
import Icons from "./Icons";
import { CONFIG } from "../config";

const SIDES = [
  {
    id: "ladoA",
    name: "Lado A",
    subtitle: "para seguirme",
    tracks: [
      { num: "A1", title: "TikTok", logo: "tiktok", href: CONFIG.tiktok },
      { num: "A2", title: "Instagram", logo: "instagram", href: CONFIG.instagramProfile },
      { num: "A3", title: "Canal de difusión", logo: "channel", href: CONFIG.instagramChannel, sr: "en Instagram" },
    ],
  },
  {
    id: "ladoB",
    name: "Lado B",
    subtitle: "para escucharme",
    tracks: [
      { num: "B1", title: "Podcast: Dentro del Proceso", logo: "spotify", href: CONFIG.podcast, sr: "en Spotify" },
      { num: "B2", title: "Mis playlists", logo: "spotify", href: CONFIG.spotify, sr: "en Spotify" },
      { num: "B3", title: "YouTube", logo: "youtube", href: CONFIG.youtube },
    ],
  },
];

// Nombre en renglones de colores para la paleta In Rainbows
const STACK = [
  ["LA/ LONDRA", "#F2E14C"],
  ["LALON/DRA", "#4F8FD6"],
  ["LALONDR/A", "#F07A30"],
  ["LA LONDRA/", "#4DB04F"],
  ["LA LON_DRA", "#EE3B30"],
];

// Los carretes giran rápido mientras el cursor o el foco está sobre una canción
const play = () => document.body.classList.add("playing");
const stop = () => document.body.classList.remove("playing");

const SocialLinks = () => (
  <div className="wrap">
    <Icons />

    <header className="hero">
      <span className="avatar-wrap">
        <img className="avatar" src={process.env.PUBLIC_URL + "/lalondra_avatar.jpeg"} alt="Foto de lalondra" />
      </span>
      <h1 aria-label="lalondra">
        <span className="word" aria-hidden="true">lalondra<span className="dot">.</span></span>
        <span className="stack" aria-hidden="true">
          {STACK.map(([text, color]) => <span key={text} style={{ color }}>{text}</span>)}
        </span>
      </h1>
      <p className="handle">@alondraesquiveliba</p>
    </header>

    <div className="cassette" aria-hidden="true">
      <div className="cassette-label">
        <p className="title">lalondra — mixtape vol. 1</p>
        <div className="window"><div className="reel"></div><div className="tape"></div><div className="reel"></div></div>
        <div className="meta"><span>C-90</span><span>Lado A / Lado B</span><span>Hi-fi</span></div>
      </div>
    </div>

    {SIDES.map(side => (
      <section className="side" aria-labelledby={side.id} key={side.id}>
        <h2 className="side-head" id={side.id}><b>{side.name}</b> <span>{side.subtitle}</span></h2>
        <ol className="tracks">
          {side.tracks.map(track => (
            <li key={track.num}>
              <a
                className="track"
                href={track.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={play}
                onMouseLeave={stop}
                onFocus={play}
                onBlur={stop}
              >
                <span className="num"><span>{track.num}</span></span>
                <span className={`logo logo-${track.logo}`}><svg aria-hidden="true"><use href={`#i-${track.logo}`} /></svg></span>
                <span className="t-body"><span className="t-title">{track.title}</span></span>
                {track.sr && <span className="sr">{track.sr}</span>}
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>
      </section>
    ))}

    <ContactButton email={CONFIG.email} />

    <footer>© {new Date().getFullYear()} lalondra · Fin de la cinta, rebobina y vuelve a empezar</footer>
  </div>
);

export default SocialLinks;
