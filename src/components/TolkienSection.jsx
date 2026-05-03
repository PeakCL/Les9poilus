export default function TolkienSection() {
  const chats = [
    { nom: "Hawaï" },
    { nom: "Mowgli" },
    { nom: "Phuket" },
    { nom: "Yellow" },
    { nom: "Nyx" },
    { nom: "Téthys" },
  ];

  return (
    <section
      className="relative overflow-hidden bg-poilu-creme py-20 md:py-28"
      aria-labelledby="section-tolkien-title"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden>
        <div className="absolute left-[8%] top-16 text-5xl md:text-6xl">🧙‍♂️</div>
        <div className="absolute right-[12%] top-24 text-4xl md:text-5xl">📜</div>
        <div className="absolute bottom-20 left-[20%] text-4xl">⚔️</div>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-poilu-roy/10 bg-white/80 p-8 shadow-card backdrop-blur-md md:p-12">
          <header className="mb-8 text-center">
            <span className="text-5xl md:text-6xl" aria-hidden>
              📜
            </span>
            <h2
              id="section-tolkien-title"
              className="mt-4 font-script text-3xl text-poilu-terre md:text-4xl"
            >
              &ldquo;Neuf compagnons… ainsi doit-il en être.&rdquo;
            </h2>
          </header>

          <div className="rounded-2xl border border-poilu-soleil/25 bg-gradient-to-br from-poilu-creme to-white px-6 py-6 md:px-8 md:py-8">
            <p className="text-center font-body text-lg leading-relaxed text-poilu-roy md:text-xl">
              Comme la Communauté de l&apos;Anneau réunissait neuf membres,{" "}
              <strong className="font-semibold">notre tribu des 9 Poilus</strong> partage le même fil : amour,
              fidélité et petites aventures du quotidien.
            </p>
          </div>

          <div className="mt-10 space-y-10" aria-label="Les neuf compagnons">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-poilu-soleil to-poilu-turquoise shadow-md ring-2 ring-white">
                <span className="text-3xl" aria-hidden>
                  🐕‍🦺
                </span>
              </div>
              <span className="mt-2 font-display text-base font-medium text-poilu-roy">Mako</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              {chats.map((chat) => (
                <div key={chat.nom} className="flex w-[4.5rem] flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-poilu-turquoise/90 to-poilu-soleil/90 shadow ring-1 ring-poilu-roy/10">
                    <span className="text-2xl" aria-hidden>
                      🐱
                    </span>
                  </div>
                  <span className="mt-1.5 text-center font-body text-xs font-medium text-poilu-roy">{chat.nom}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-10 md:gap-14">
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-poilu-roy to-poilu-turquoise shadow-md ring-1 ring-white/50">
                  <span className="text-3xl" aria-hidden>
                    🦄
                  </span>
                </div>
                <span className="mt-2 text-center font-body text-sm text-poilu-roy">Comme d&apos;habitude</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-poilu-roy to-poilu-turquoise shadow-md ring-1 ring-white/50">
                  <span className="text-3xl" aria-hidden>
                    🐎
                  </span>
                </div>
                <span className="mt-2 text-center font-body text-sm text-poilu-roy">GoodVisor du Gelon</span>
              </div>
            </div>
          </div>

          <footer className="mt-12 border-t border-poilu-roy/10 pt-8 text-center">
            <blockquote className="font-script text-xl italic text-poilu-terre md:text-2xl">
              &ldquo;Dans l&apos;amitié véritable, les plus petites créatures peuvent accomplir de grandes
              choses.&rdquo;
            </blockquote>
            <p className="mt-3 font-body text-sm text-poilu-gris">
              Inspiré par <span className="font-semibold text-poilu-roy">J.R.R. Tolkien</span>
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
