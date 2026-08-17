import PageHeader from "../components/PageHeader";
import useSeo from "../hooks/useSeo";

export default function Blog() {
  useSeo({
    title: "Le blog : la vie avec neuf animaux | Les 9 Poilus",
    description: "Articles, conseils et moments de vie avec la tribu des 9 Poilus. Les premiers articles sont en preparation.",
    path: "/blog",
  });

  return (
    <>
      <PageHeader eyebrow="Journal" title="Notre blog" subtitle="Articles, réflexions et moments de vie avec la tribu." />
      <section className="min-h-[40vh] bg-gradient-to-b from-poilu-creme to-white pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <div className="rounded-3xl border border-dashed border-poilu-turquoise/40 bg-white/90 p-10 shadow-card backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-poilu-turquoise/15 text-3xl">📖</div>
            <h2 className="font-display text-2xl font-semibold text-poilu-roy">Premiers articles en préparation</h2>
            <p className="mt-3 font-body leading-relaxed text-poilu-gris">
              Patience — nous préparons du contenu avec le même soin que nos gamelles du dimanche.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
