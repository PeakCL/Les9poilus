const tiktokPath =
  "M32.5 19.5c-1.7 0-3.1-1.4-3.1-3.1V13h-4.1v14.2c0 1.7-1.4 3.1-3.1 3.1s-3.1-1.4-3.1-3.1 1.4-3.1 3.1-3.1c.2 0 .4 0 .6.1v-4.2c-.2 0-.4-.1-.6-.1-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3v-5.1c1 .6 2.1.9 3.1.9h1.1v-4.1h-1.1z";

/**
 * Icônes réseaux — taille en px, idPrefix pour gradients SVG uniques par instance.
 */
export function SocialIcons({ className = "", size = 22, idPrefix = "soc" }) {
  const s = size;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href="https://www.tiktok.com/@communaute_9_poilus"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok Les 9 Poilus"
        title="TikTok : @communaute_9_poilus"
        className="rounded-full p-1.5 text-white/90 transition hover:scale-110 hover:text-poilu-soleil focus:outline-none focus-visible:ring-2 focus-visible:ring-poilu-soleil"
      >
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="24" cy="24" r="24" fill="#000" />
          <path d={tiktokPath} fill="#fff" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/la_communaute_des_9_poilus"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Les 9 Poilus"
        title="Instagram : @la_communaute_des_9_poilus"
        className="rounded-full p-1.5 text-white/90 transition hover:scale-110 hover:text-poilu-soleil focus:outline-none focus-visible:ring-2 focus-visible:ring-poilu-soleil"
      >
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <radialGradient id={`${idPrefix}-ig`} cx="0.5" cy="0.5" r="0.8">
              <stop offset="0%" stopColor="#f9ce34" />
              <stop offset="45%" stopColor="#ee2a7b" />
              <stop offset="100%" stopColor="#6228d7" />
            </radialGradient>
          </defs>
          <rect x="4" y="4" width="40" height="40" rx="12" fill={`url(#${idPrefix}-ig)`} />
          <circle cx="24" cy="24" r="9" fill="#fff" />
          <circle cx="24" cy="24" r="6" fill="#ee2a7b" />
          <circle cx="32" cy="16" r="2" fill="#fff" />
        </svg>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61575813491991&sk=about"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook Les 9 Poilus"
        title="Facebook : Les 9 Poilus"
        className="rounded-full p-1.5 text-white/90 transition hover:scale-110 hover:text-poilu-soleil focus:outline-none focus-visible:ring-2 focus-visible:ring-poilu-soleil"
      >
        <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="24" cy="24" r="24" fill="#1877F3" />
          <path
            d="M29.5 24H26v12h-5V24h-3v-4h3v-2.5c0-3.1 1.7-5 5-5h3v4h-2c-1.1 0-1 .4-1 1V20h4l-1 4z"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  );
}
