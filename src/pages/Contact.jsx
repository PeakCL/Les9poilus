import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Marques & créateurs"
        title="Parlons de votre projet"
        subtitle="Envoyez un brief : nom de marque, produit, objectifs (notoriété, conversion, avis), formats souhaités et fenêtre de campagne. Nous répondons pour caler un échange ou vous envoyer notre grille."
      />
      <div className="bg-gradient-to-b from-poilu-creme via-white to-poilu-turquoise/10 pb-20 pt-10 md:pb-28 md:pt-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <section className="space-y-6" aria-label="Réseaux sociaux">
              <h2 className="font-display text-xl font-semibold text-poilu-roy md:text-2xl">Suivez-nous</h2>
              <article className="rounded-3xl border border-poilu-roy/10 bg-white/95 p-6 shadow-card backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>
                    🎵
                  </span>
                  <h3 className="font-display text-lg font-semibold text-poilu-turquoise">TikTok</h3>
                </div>
                <p className="mt-3 font-body text-sm text-poilu-gris">
                  Vidéos courtes, coulisses et moments avec les 9 poilus.
                </p>
                <a
                  href="https://www.tiktok.com/@communaute_9_poilus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-xl bg-neutral-900 px-4 py-2 font-mono text-sm font-bold text-white transition hover:bg-poilu-roy"
                >
                  @communaute_9_poilus ↗
                </a>
              </article>
              <article className="rounded-3xl border border-poilu-roy/10 bg-white/95 p-6 shadow-card backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>
                    📸
                  </span>
                  <h3 className="font-display text-lg font-semibold text-poilu-turquoise">Instagram</h3>
                </div>
                <p className="mt-3 font-body text-sm text-poilu-gris">Photos, portraits et stories du quotidien.</p>
                <a
                  href="https://www.instagram.com/la_communaute_des_9_poilus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-poilu-soleil to-poilu-turquoise px-4 py-2 font-mono text-sm font-bold text-white transition hover:opacity-95"
                >
                  @la_communaute_des_9_poilus ↗
                </a>
              </article>
            </section>

            <section aria-label="Communauté">
              <h2 className="font-display text-xl font-semibold text-poilu-roy md:text-2xl">Parlons ensemble</h2>
              <div className="mt-6 rounded-3xl border border-poilu-turquoise/20 bg-gradient-to-br from-poilu-soleil/10 via-white to-poilu-turquoise/10 p-6 shadow-inner">
                <ul className="space-y-5 font-body text-poilu-roy">
                  <li className="flex gap-3">
                    <span aria-hidden>📝</span>
                    <div>
                      <strong className="text-poilu-turquoise">Partagez vos histoires</strong>
                      <p className="mt-1 text-sm text-poilu-gris">
                        Taguez-nous avec <span className="font-semibold text-poilu-roy">#Les9Poilus</span>.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden>💙</span>
                    <div>
                      <strong className="text-poilu-turquoise">Espace bienveillant</strong>
                      <p className="mt-1 text-sm text-poilu-gris">Conseils, soutien et respect mutuel.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden>🤝</span>
                    <div>
                      <strong className="text-poilu-turquoise">Collaborations</strong>
                      <p className="mt-1 text-sm text-poilu-gris">
                        Marques et associations alignées avec nos valeurs — écrivez-nous.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mx-auto mt-14 max-w-2xl">
            <div className="rounded-3xl border border-poilu-roy/10 bg-white p-8 shadow-card backdrop-blur-sm md:p-10">
              <h2 className="font-display text-xl font-semibold text-poilu-turquoise">Écrivez-nous</h2>
              <p className="mt-2 font-body text-sm text-poilu-gris">
                <strong className="text-poilu-roy">Côté marque :</strong> indiquez le nom de la marque, le type de
                produit, la fenêtre de campagne et, si possible, un budget ou un barème d&apos;échange (produits,
                honoraires). Nous revenons vers vous pour cadrer la collaboration.
              </p>
              <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-2 block font-body font-semibold text-poilu-turquoise" htmlFor="nom">
                    Votre nom *
                  </label>
                  <input
                    className="w-full rounded-xl border border-poilu-turquoise/40 bg-white px-4 py-2.5 font-body text-poilu-roy placeholder:text-poilu-gris focus:border-poilu-turquoise focus:outline-none focus:ring-2 focus:ring-poilu-turquoise/50"
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-body font-semibold text-poilu-turquoise" htmlFor="email">
                    Votre email *
                  </label>
                  <input
                    className="w-full rounded-xl border border-poilu-turquoise/40 bg-white px-4 py-2.5 font-body text-poilu-roy placeholder:text-poilu-gris focus:border-poilu-turquoise focus:outline-none focus:ring-2 focus:ring-poilu-turquoise/50"
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-body font-semibold text-poilu-turquoise" htmlFor="sujet">
                    Sujet
                  </label>
                  <input
                    className="w-full rounded-xl border border-poilu-turquoise/40 bg-white px-4 py-2.5 font-body text-poilu-roy placeholder:text-poilu-gris focus:border-poilu-turquoise focus:outline-none focus:ring-2 focus:ring-poilu-turquoise/50"
                    type="text"
                    id="sujet"
                    name="sujet"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-body font-semibold text-poilu-turquoise" htmlFor="message">
                    Votre message *
                  </label>
                  <textarea
                    className="w-full rounded-xl border border-poilu-turquoise/40 bg-white px-4 py-2.5 font-body text-poilu-roy placeholder:text-poilu-gris focus:border-poilu-turquoise focus:outline-none focus:ring-2 focus:ring-poilu-turquoise/50"
                    id="message"
                    name="message"
                    rows={5}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-poilu-turquoise px-6 py-3.5 font-body font-semibold text-white shadow-lg transition hover:bg-poilu-roy md:w-auto"
                >
                  Envoyer le message
                </button>
              </form>
              <p className="mt-6 text-center font-body text-sm text-poilu-gris">
                Pour un échange rapide : messages privés sur TikTok ou Instagram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
