import PageHeader from "../components/PageHeader";
import pralineImg from "../assets/images/animaux/praline.webp";
import kimaImg from "../assets/images/animaux/Kima.webp";
import kiwiImg from "../assets/images/animaux/kiwi.webp";
import litchiImg from "../assets/images/animaux/Litchi.webp";
import useSeo from "../hooks/useSeo";

const disparus = [
  {
    nom: "Praline",
    image: pralineImg,
    type: "Chienne",
    description: `Douce Praline, ton amour inconditionnel et ta joie de vivre illuminaient chaque jour. Tu resteras à jamais gravée dans nos cœurs.`,
  },
  {
    nom: "Kima",
    image: kimaImg,
    type: "Chienne",
    description: `Brave Kima, ta force et ta tendresse nous ont tant apporté. Ton souvenir continue de nous accompagner chaque jour.`,
  },
  {
    nom: "Kiwi",
    image: kiwiImg,
    type: "Chat",
    description: `Petit Kiwi, tes facéties et ta curiosité égayaient nos journées. Ton esprit joueur vit encore dans nos souvenirs les plus chers.`,
  },
  {
    nom: "Litchi",
    image: litchiImg,
    type: "Chat",
    description: `Doux Litchi, tes ronronnements et tes câlins nous réchauffaient le cœur. Ta présence bienveillante nous accompagne encore.`,
  },
];

export default function NosDisparus() {
  useSeo({
    title: "Nos anges gardiens : hommage a nos compagnons disparus | Les 9 Poilus",
    description: "Praline, Kima, Kiwi et Litchi : hommage aux compagnons qui ont fait partie de la communaute et qui nous accompagnent encore.",
    path: "/nos-disparus",
  });

  return (
    <>
      <PageHeader
        eyebrow="Mémoire"
        title="Nos anges gardiens"
        subtitle="Hommage à nos compagnons partis trop tôt — toujours présents dans nos cœurs."
      />
      <section className="bg-gradient-to-b from-poilu-creme to-poilu-turquoise/10 pb-20 pt-12 md:pb-28 md:pt-16" aria-labelledby="nos-disparus-heading">
        <h2 id="nos-disparus-heading" className="sr-only">
          Animaux disparus
        </h2>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {disparus.map((animal) => (
              <article
                key={animal.nom}
                className="flex flex-col items-center rounded-3xl border border-poilu-roy/10 bg-white/90 p-8 text-center shadow-card backdrop-blur-sm transition hover:shadow-glow"
              >
                <div className="mb-4 h-32 w-32 overflow-hidden rounded-2xl border-2 border-poilu-turquoise/35 bg-poilu-creme shadow-inner sm:h-36 sm:w-36">
                  <img
                    src={animal.image}
                    alt={`Portrait de ${animal.nom}, ${animal.type.toLowerCase()}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-script text-2xl text-poilu-terre sm:text-3xl">{animal.nom}</h3>
                <span className="mt-2 rounded-full bg-poilu-turquoise/15 px-3 py-1 font-body text-xs font-semibold text-poilu-turquoise">
                  {animal.type}
                </span>
                <p className="mt-4 font-body leading-relaxed text-poilu-roy">{animal.description}</p>
                <span className="mt-4 text-2xl text-poilu-turquoise/80" aria-hidden>
                  👼
                </span>
              </article>
            ))}
          </div>
          <footer className="mt-14 rounded-3xl border border-poilu-roy/10 bg-white/80 p-8 text-center font-body text-lg leading-relaxed text-poilu-roy shadow-card backdrop-blur-sm">
            <p>
              Praline, Kima, Kiwi et Litchi veillent sur notre famille élargie. Un jour, nous retrouverons leurs pattes
              joyeuses…
            </p>
            <p className="mt-2 text-2xl" aria-hidden>
              💖 ✨
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}
