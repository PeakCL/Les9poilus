

import makoImg from '../assets/images/animaux/mako.webp';
import tethysImg from '../assets/images/animaux/tethys.webp';
import hawaiImg from '../assets/images/animaux/hawai.webp';
import mowgliImg from '../assets/images/animaux/mowgli.webp';
import phuketImg from '../assets/images/animaux/phuket.webp';
import nyxImg from '../assets/images/animaux/nyx.webp';
import yellowImg from '../assets/images/animaux/yellow.webp';
import goodImg from '../assets/images/animaux/good.webp';
import commedhabImg from '../assets/images/animaux/commedhab.webp';

const animaux = [
  {
    nom: "Mako",
    image: makoImg,
    type: "Chien",
    sexe: "male",
  background: "bg-gradient-to-br from-poilu-roy/40 to-poilu-turquoise/20",
    tagColor: "bg-poilu-roy text-white",
    description: `Né en 2011, Mako est le pilier de notre cœur familial. Avec sa sagesse tranquille et son regard bienveillant, ce gentil géant veille sur tous ceux qu'il aime. Malgré ses années qui s'accumulent avec grâce, son âme d'aventurier reste intacte - ses yeux pétillent encore d'excitation à l'idée d'une balade, nous rappelant chaque jour que l'âge n'est qu'un chiffre quand on a l'amour pour moteur.`
  },
  {
    nom: "Hawaï",
    image: hawaiImg,
    type: "Chat",
    sexe: "male",
  background: "bg-gradient-to-br from-poilu-soleil/30 to-poilu-creme/60",
    tagColor: "bg-poilu-soleil text-poilu-roy",
    description: `Arrivé de la SPA en 2012, Hawaï a transformé notre maison en paradis. Ce petit ange roux est littéralement un rayon de soleil incarné - impossible de résister à sa tendresse infinie ! Véritable "pot de colle" au grand cœur, il possède ce don magique d'apaiser les âmes troublées d'un simple ronron. Avec Hawaï, chaque jour devient plus doux, chaque instant plus précieux.`
  },
  {
    nom: "Mowgli",
    image: mowgliImg,
    type: "Chat",
    sexe: "male",
  background: "bg-gradient-to-br from-poilu-turquoise/30 to-poilu-roy/20",
    tagColor: "bg-poilu-turquoise text-poilu-roy",
    description: `L'histoire de Mowgli nous brise et nous répare le cœur à la fois. Arrivé en 2019, ce petit sauvage n'avait jamais connu la douceur humaine. Des mois de patience, de murmures tendres et de gestes délicats ont été nécessaires pour briser les murs de sa méfiance. Aujourd'hui, ce miracle à quatre pattes nous suit partout - même dans nos balades de 3-4 km aux côtés de Mako ! Chaque câlin qu'il nous offre semble porter en lui toute sa reconnaissance pour cette seconde chance que la vie lui a donnée. Un esprit libre qui a choisi de nous faire confiance... quelle leçon d'amour !`
  },
  {
    nom: "Phuket",
    image: phuketImg,
    type: "Chat",
    sexe: "femelle",
  background: "bg-gradient-to-br from-poilu-creme/60 to-poilu-soleil/30",
    tagColor: "bg-poilu-creme text-poilu-roy",
    description: `L'histoire d'amour la plus touchante : un jour de 2019, Hawaï est rentré avec cette petite âme en détresse... et elle n'est plus jamais repartie. Phuket est une princesse au cœur farouche, gardienne de son intimité comme un trésor. Mais oh ! quel privilège immense quand elle daigne nous accorder sa confiance ! Ses câlins sont rares, précieux comme des diamants - chaque moment de tendresse qu'elle nous offre vaut tous les trésors du monde. Une leçon de patience et d'amour authentique.`
  },
  {
    nom: "Nyx",
    image: nyxImg,
    type: "Chat",
    sexe: "femelle",
  background: "bg-gradient-to-br from-poilu-roy/20 to-poilu-creme/60",
    tagColor: "bg-poilu-roy text-poilu-soleil",
    description: `Septembre 2024, un miracle en double : nous découvrons Nyx et sa sœur Téthys, deux petites âmes fragiles de quelques semaines. Nyx s'est rapidement révélée être notre petite gardienne, une élégante sentinelle au caractère bien trempé ! Avec sa grâce naturelle et sa détermination sans faille, elle veille sur chaque membre de notre famille comme une vraie maman-chat. Son regard perçant semble dire : "Personne ne touchera à ma famille !" Une force de la nature dans un corps de velours.`
  },
  {
    nom: "Téthys",
    image: tethysImg,
    type: "Chat",
    sexe: "femelle",
  background: "bg-gradient-to-br from-poilu-turquoise/20 to-poilu-creme/60",
    tagColor: "bg-poilu-turquoise text-poilu-roy",
    description: `La sœur tendre de notre petit duo miraculé ! Téthys incarne la douceur à l'état pur - une petite âme délicate qui nous a choisis dès ses premiers jours. Contrairement à sa sœur au tempérament de feu, elle préfère les murmures aux cris, les caresses aux conquêtes. Ses siestes au soleil ressemblent à de petits tableaux de bonheur, et quand elle vient se blottir contre nous... le monde entier semble suspendre son souffle. Un petit ange qui nous rappelle que la tendresse est un superpouvoir.`
  },
  {
    nom: "Yellow",
    image: yellowImg,
    type: "Chat",
    sexe: "femelle",
  background: "bg-gradient-to-br from-poilu-soleil/30 to-poilu-turquoise/20",
    tagColor: "bg-poilu-soleil text-poilu-roy",
    description: `L'histoire qui nous fait pleurer de joie à chaque fois ! En 2024, la SPA nous a présenté cette petite guerrière de 3 semaines, la patte arrière déchiquetée, le pronostic vital incertain... Les vétérinaires ne savaient pas si elle allait s'en sortir. Nous l'avons accueillie à 2 mois et demi, le cœur serré mais l'espoir intact. Aujourd'hui, regardez-la ! Cette petite boule de soleil défie la gravité et nos larmes de joie ! Malgré son handicap, elle rayonne d'un bonheur si pur, si contagieux... Yellow nous enseigne chaque jour que la joie de vivre ne dépend pas de nos circonstances, mais de notre cœur. Une leçon de vie qui nous bouleverse quotidiennement.`
  },
  {
    nom: "GoodVisor du Gelon",
    image: goodImg,
    type: "Cheval",
    sexe: "male",
  background: "bg-gradient-to-br from-poilu-roy/40 to-poilu-soleil/20",
    tagColor: "bg-poilu-roy text-poilu-soleil",
    description: `Né en 2016, Good est notre comédien à quatre sabots ! Ce trotteur réformé des courses a trouvé chez nous sa vraie vocation : faire sourire et donner le meilleur de lui-même. Avec son cœur d'or et sa générosité sans limite, il transforme chaque séance de dressage en moment magique, s'appliquant avec tant de sérieux qu'on en a les larmes aux yeux. Sa découverte récente du cross ? Un moment de pure euphorie équine ! Certes, il a parfois des petites frayeurs en balade, mais son courage et sa fidélité font de lui un compagnon exceptionnel. Un géant doux qui nous prouve chaque jour que la seconde chance peut être la plus belle.`
  },
  {
    nom: "Comme d'habitude",
    image: commedhabImg,
    type: "Jument",
    sexe: "femelle",
  background: "bg-gradient-to-br from-poilu-creme/60 to-poilu-roy/20",
    tagColor: "bg-poilu-creme text-poilu-roy",
    description: `L'histoire d'amour la plus profonde et complexe ! Cette jument de 2012 possède une âme d'artiste incomprise - trop sensible, trop authentique pour l'impitoyable machine des courses. Son "gros caractère" ? En réalité, c'est une âme pure qui refuse les compromis ! Il nous a fallu des mois de patience, de larmes parfois, de remises en question profondes... Mais quel trésor nous avons découvert ! Quand Comme d'hab vous accorde sa confiance, c'est comme recevoir les clés de son royaume secret. Cette jument exceptionnelle nous a appris qu'aimer, c'est parfois réapprendre à communiquer entièrement. Une leçon d'humilité et de persévérance qui nous transforme à jamais.`
  },
];

export default function NosAnimaux() {
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-br from-poilu-creme via-poilu-soleil/30 to-poilu-turquoise/10 pb-10 xs:pb-12 sm:pb-16"
      aria-labelledby="nos-animaux-title"
    >
      <header className="w-full bg-gradient-to-r from-poilu-roy to-poilu-turquoise py-7 xs:py-8 sm:py-10 mb-8 xs:mb-10 sm:mb-12" aria-labelledby="nos-animaux-title">
        <h1 id="nos-animaux-title" className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-cinzel-bold text-white text-center drop-shadow-lg tracking-tight">
            <span aria-hidden="true">🐕</span> Nos Animaux
        </h1>
        <p className="text-center text-poilu-creme font-body text-base xs:text-lg mt-2 xs:mt-3 sm:mt-4">
          <span aria-hidden="true">🏠</span> Vie de Famille • <span aria-hidden="true">🐕</span> 1 Chien Fidèle • <span aria-hidden="true">🐱</span> 6 Chats Complices • <span aria-hidden="true">🐎</span> 2 Chevaux Libres
        </p>
      </header>
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-7 sm:gap-8">
          {animaux.map((animal) => (
            <article
              key={animal.nom}
              className={`rounded-3xl shadow-xl flex flex-col items-center border border-poilu-roy/10 hover:scale-[1.03] transition-transform duration-200 min-h-[420px] xs:min-h-[440px] sm:min-h-[480px] max-w-[95vw] xs:max-w-[370px] mx-auto p-4 xs:p-5 sm:p-6 ${animal.background}`}
              style={{ boxShadow: '0 6px 32px 0 rgba(30,58,138,0.10)' }}
              aria-labelledby={`animal-title-${animal.nom}`}
            >
              <div className="w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0 bg-white flex items-center justify-center border-2 border-poilu-roy/20 mb-2">
                <img src={animal.image} alt={`Portrait de ${animal.nom}, ${animal.type.toLowerCase()}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-2 mt-2 mb-1">
                <h2 id={`animal-title-${animal.nom}`} className="text-lg xs:text-xl sm:text-2xl font-heading text-poilu-turquoise drop-shadow-sm">{animal.nom}</h2>
                {animal.sexe === 'male' && <span title="Mâle" className="text-blue-500 text-lg xs:text-xl" aria-hidden="true">♂️</span>}
                {animal.sexe === 'femelle' && <span title="Femelle" className="text-pink-500 text-lg xs:text-xl" aria-hidden="true">♀️</span>}
              </div>
              <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-2 shadow-sm ${animal.tagColor}`}>{animal.type}</span>
              <p className="text-poilu-roy font-body text-center text-sm xs:text-base leading-relaxed flex-1 drop-shadow-sm">{animal.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
