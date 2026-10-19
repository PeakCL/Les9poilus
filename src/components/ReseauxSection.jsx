import FilInstagram from "./FilInstagram";

const networks = [
  {
    name: "TikTok",
    handle: "@communaute_9_poilus",
    href: "https://www.tiktok.com/@communaute_9_poilus",
    desc: "Vidéos courtes, moments drôles et coulisses du quotidien.",
    buttonClass: "bg-neutral-900 hover:bg-neutral-800",
    icon: (
      <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@la_communaute_des_9_poilus",
    href: "https://www.instagram.com/la_communaute_des_9_poilus",
    desc: "Photos, stories et portraits de la tribu au fil des saisons.",
    buttonClass: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-95",
    icon: (
      <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M7.75 2h8.5A5.75 5.75 0 0022 7.75v8.5A5.75 5.75 0 0016.25 22h-8.5A5.75 5.75 0 002 16.25v-8.5A5.75 5.75 0 007.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-3.25a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Les 9 Poilus",
    href: "https://www.facebook.com/profile.php?id=61575813491991&sk=about",
    desc: "Communauté, échanges et entraide entre passionnés.",
    buttonClass: "bg-[#1877F3] hover:bg-[#166fe5]",
    icon: (
      <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function ReseauxSection() {
  return (
    <section className="border-t-[3px] border-poilu-roy bg-poilu-bonbon py-20 text-poilu-roy md:py-24" aria-labelledby="reseaux-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <h2 id="reseaux-title" className="font-large text-4xl font-extrabold leading-none sm:text-6xl">
            Suivez la tribu au quotidien
          </h2>
          <p className="mt-4 font-body text-lg font-medium">
            Bêtises, câlins, balades et coulisses : tout se passe d&apos;abord sur nos réseaux.
          </p>
        </header>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {networks.map((n) => (
            <li key={n.name}>
              <a
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className="wiggle-hover btn-joie group h-full w-full flex-col items-start justify-start rounded-2xl bg-white p-6 text-left"
              >
                <span className={`wiggle-cible flex h-14 w-14 items-center justify-center rounded-2xl ${n.buttonClass}`}>{n.icon}</span>
                <span className="mt-3 text-2xl font-extrabold">{n.name}</span>
                <span className="break-all font-body text-sm font-semibold text-poilu-turquoise">{n.handle}</span>
                <span className="mt-2 font-body text-sm font-normal leading-relaxed">{n.desc}</span>
              </a>
            </li>
          ))}
        </ul>

        <FilInstagram />

        <ul className="mt-10 flex flex-wrap gap-2 font-body text-sm font-bold">
          {["#Les9Poilus", "#VieAvecAnimaux", "#AmourAnimaux", "#QuotidienPoilus"].map((tag) => (
            <li key={tag} className="rounded-full border-2 border-poilu-roy bg-white/60 px-4 py-1.5">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
