import PageHeader from "../components/PageHeader";

import makoImg from "../assets/images/animaux/mako.webp";
import tethysImg from "../assets/images/animaux/tethys.webp";
import hawaiImg from "../assets/images/animaux/hawai.webp";
import mowgliImg from "../assets/images/animaux/mowgli.webp";
import phuketImg from "../assets/images/animaux/phuket.webp";
import nyxImg from "../assets/images/animaux/nyx.webp";
import yellowImg from "../assets/images/animaux/yellow.webp";
import goodImg from "../assets/images/animaux/good.webp";
import commedhabImg from "../assets/images/animaux/commedhab.webp";
import useSeo from "../hooks/useSeo";

const animaux = [
  {
    nom: "Mako",
    image: makoImg,
    type: "Chien",
    sexe: "male",
    background: "from-poilu-roy/15 to-poilu-turquoise/10",
    tagColor: "bg-poilu-roy text-white",
    description: `Né en 2011, Mako est le pilier de notre cœur familial. Avec sa sagesse tranquille et son regard bienveillant, ce gentil géant veille sur tous ceux qu'il aime. Malgré ses années qui s'accumulent avec grâce, son âme d'aventurier reste intacte - ses yeux pétillent encore d'excitation à l'idée d'une balade, nous rappelant chaque jour que l'âge n'est qu'un chiffre quand on a l'amour pour moteur.`,
  },
  {
    nom: "Hawaï",
    image: hawaiImg,
    type: "Chat",
    sexe: "male",
    background: "from-poilu-soleil/20 to-poilu-creme/50",
    tagColor: "bg-poilu-soleil text-poilu-roy",
    description: `Arrivé de la SPA en 2012, Hawaï a transformé notre maison en paradis. Ce petit ange roux est littéralement un rayon de soleil incarné - impossible de résister à sa tendresse infinie ! Véritable "pot de colle" au grand cœur, il possède ce don magique d'apaiser les âmes troublées d'un simple ronron. Avec Hawaï, chaque jour devient plus doux, chaque instant plus précieux.`,
  },
  {
    nom: "Mowgli",
    image: mowgliImg,
    type: "Chat",
    sexe: "male",
    background: "from-poilu-turquoise/15 to-poilu-roy/10",
    tagColor: "bg-poilu-turquoise text-poilu-roy",
    description: `L'histoire de Mowgli nous brise et nous répare le cœur à la fois. Arrivé en 2019, ce petit sauvage n'avait jamais connu la douceur humaine. Des mois de patience, de murmures tendres et de gestes délicats ont été nécessaires pour briser les murs de sa méfiance. Aujourd'hui, ce miracle à quatre pattes nous suit partout - même dans nos balades de 3-4 km aux côtés de Mako ! Chaque câlin qu'il nous offre semble porter en lui toute sa reconnaissance pour cette seconde chance que la vie lui a donnée. Un esprit libre qui a choisi de nous faire confiance... quelle leçon d'amour !`,
  },
  {
    nom: "Phuket",
    image: phuketImg,
    type: "Chat",
    sexe: "femelle",
    background: "from-poilu-creme/50 to-poilu-soleil/15",
    tagColor: "bg-poilu-creme text-poilu-roy ring-1 ring-poilu-roy/10",
    description: `L'histoire d'amour la plus touchante : un jour de 2019, Hawaï est rentré avec cette petite âme en détresse... et elle n'est plus jamais repartie. Phuket est une princesse au cœur farouche, gardienne de son intimité comme un trésor. Mais oh ! quel privilège immense quand elle daigne nous accorder sa confiance ! Ses câlins sont rares, précieux comme des diamants - chaque moment de tendresse qu'elle nous offre vaut tous les trésors du monde. Une leçon de patience et d'amour authentique.`,
  },
  {
    nom: "Nyx",
    image: nyxImg,
    type: "Chat",
    sexe: "femelle",
    background: "from-poilu-roy/10 to-poilu-creme/50",
    tagColor: "bg-poilu-roy text-poilu-soleil",
    description: `Septembre 2024, un miracle en double : nous découvrons Nyx et sa sœur Téthys, deux petites âmes fragiles de quelques semaines. Nyx s'est rapidement révélée être notre petite gardienne, une élégante sentinelle au caractère bien trempé ! Avec sa grâce naturelle et sa détermination sans faille, elle veille sur chaque membre de notre famille comme une vraie maman-chat. Son regard perçant semble dire : "Personne ne touchera à ma famille !" Une force de la nature dans un corps de velours.`,
  },
  {
    nom: "Téthys",
    image: tethysImg,
    type: "Chat",
    sexe: "femelle",
    background: "from-poilu-turquoise/12 to-poilu-creme/45",
    tagColor: "bg-poilu-turquoise text-poilu-roy",
    description: `La sœur tendre de notre petit duo miraculé ! Téthys incarne la douceur à l'état pur - une petite âme délicate qui nous a choisis dès ses premiers jours. Contrairement à sa sœur au tempérament de feu, elle préfère les murmures aux cris, les caresses aux conquêtes. Ses siestes au soleil ressemblent à de petits tableaux de bonheur, et quand elle vient se blottir contre nous... le monde entier semble suspendre son souffle. Un petit ange qui nous rappelle que la tendresse est un superpouvoir.`,
  },
  {
    nom: "Yellow",
    image: yellowImg,
    type: "Chat",
    sexe: "femelle",
    background: "from-poilu-soleil/18 to-poilu-turquoise/12",
    tagColor: "bg-poilu-soleil text-poilu-roy",
    description: `L'histoire qui nous fait pleurer de joie à chaque fois ! En 2024, la SPA nous a présenté cette petite guerrière de 3 semaines, la patte arrière déchiquetée, le pronostic vital incertain... Les vétérinaires ne savaient pas si elle allait s'en sortir. Nous l'avons accueillie à 2 mois et demi, le cœur serré mais l'espoir intact. Aujourd'hui, regardez-la ! Cette petite boule de soleil défie la gravité et nos larmes de joie ! Malgré son handicap, elle rayonne d'un bonheur si pur, si contagieux... Yellow nous enseigne chaque jour que la joie de vivre ne dépend pas de nos circonstances, mais de notre cœur. Une leçon de vie qui nous bouleverse quotidiennement.`,
  },
  {
    nom: "GoodVisor du Gelon",
    image: goodImg,
    type: "Cheval",
    sexe: "male",
    background: "from-poilu-roy/18 to-poilu-soleil/12",
    tagColor: "bg-poilu-roy text-poilu-soleil",
    description: `Né en 2016, Good est notre comédien à quatre sabots ! Ce trotteur réformé des courses a trouvé chez nous sa vraie vocation : faire sourire et donner le meilleur de lui-même. Avec son cœur d'or et sa générosité sans limite, il transforme chaque séance de dressage en moment magique, s'appliquant avec tant de sérieux qu'on en a les larmes aux yeux. Sa découverte récente du cross ? Un moment de pure euphorie équine ! Certes, il a parfois des petites frayeurs en balade, mais son courage et sa fidélité font de lui un compagnon exceptionnel. Un géant doux qui nous prouve chaque jour que la seconde chance peut être la plus belle.`,
  },
  {
    nom: "Comme d'habitude",
    image: commedhabImg,
    type: "Jument",
    sexe: "femelle",
    background: "from-poilu-creme/50 to-poilu-roy/12",
    tagColor: "bg-poilu-creme text-poilu-roy ring-1 ring-poilu-roy/10",
    description: `L'histoire d'amour la plus profonde et complexe ! Cette jument de 2012 possède une âme d'artiste incomprise - trop sensible, trop authentique pour l'impitoyable machine des courses. Son "gros caractère" ? En réalité, c'est une âme pure qui refuse les compromis ! Il nous a fallu des mois de patience, de larmes parfois, de remises en question profondes... Mais quel trésor nous avons découvert ! Quand Comme d'hab vous accorde sa confiance, c'est comme recevoir les clés de son royaume secret. Cette jument exceptionnelle nous a appris qu'aimer, c'est parfois réapprendre à communiquer entièrement. Une leçon d'humilité et de persévérance qui nous transforme à jamais.`,
  },
];

export default function NosAnimaux() {
  useSeo({
    title: "Nos animaux : les 9 poilus, un chien, six chats et deux chevaux | Les 9 Poilus",
    description: "Mako, Hawai, Mowgli, Phuket, Nyx, Tethys, Yellow, GoodVisor du Gelon et Comme d'habitude : decouvrez les neuf compagnons de la communaute et leur histoire.",
    path: "/nos-animaux",
  });

  return (
    <>
      <PageHeader
        eyebrow="La tribu · terrain de test pour marques"
        title="Nos animaux"
        subtitle="Neuf profils pour vos tests produits et UGC : 1 chien, 6 chats, 2 équidés — usages réels au quotidien en Savoie."
      />
      <section
        className="bg-gradient-to-b from-poilu-creme to-white pb-16 pt-10 md:pb-24 md:pt-14"
        aria-labelledby="nos-animaux-title"
      >
        <h2 id="nos-animaux-title" className="sr-only">
          Liste des animaux
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {animaux.map((animal) => (
              <article
                key={animal.nom}
                className={`group flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-poilu-roy/10 bg-gradient-to-br ${animal.background} p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow`}
              >
                <div className="relative mx-auto mb-4 aspect-square w-40 overflow-hidden rounded-2xl bg-white ring-2 ring-white shadow-md sm:w-44">
                  <img
                    src={animal.image}
                    alt={`Portrait de ${animal.nom}, ${animal.type.toLowerCase()}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <h3 className="font-display text-xl font-semibold text-poilu-roy">{animal.nom}</h3>
                  {animal.sexe === "male" && (
                    <span className="text-lg text-blue-500" title="Mâle" aria-hidden>
                      ♂️
                    </span>
                  )}
                  {animal.sexe === "femelle" && (
                    <span className="text-lg text-pink-500" title="Femelle" aria-hidden>
                      ♀️
                    </span>
                  )}
                </div>
                <span
                  className={`mx-auto mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${animal.tagColor}`}
                >
                  {animal.type}
                </span>
                <p className="mt-4 flex-1 text-center font-body text-sm leading-relaxed text-poilu-roy/95">{animal.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
