import makoImg from "../assets/images/animaux/thumbs/mako.jpg";
import hawaiImg from "../assets/images/animaux/thumbs/hawai.jpg";
import mowgliImg from "../assets/images/animaux/thumbs/mowgli.jpg";
import phuketImg from "../assets/images/animaux/thumbs/phuket.jpg";
import nyxImg from "../assets/images/animaux/thumbs/nyx.jpg";
import tethysImg from "../assets/images/animaux/thumbs/tethys.jpg";
import yellowImg from "../assets/images/animaux/thumbs/yellow.jpg";
import goodImg from "../assets/images/animaux/thumbs/good.jpg";
import commedhabImg from "../assets/images/animaux/thumbs/commedhab.jpg";

/**
 * Les 9 poilus dans l'ordre de la file indienne : chevaux, chien, puis les chats.
 * `taille` pilote la taille du sticker dans la parade du hero.
 */
const poilus = [
  { nom: "Good", nomComplet: "GoodVisor du Gelon", espece: "Cheval", image: goodImg, taille: "xl", couleur: "#FFC93C", bulle: "Le dressage ? Je m'applique, promis !" },
  { nom: "Comme d'hab", nomComplet: "Comme d'habitude", espece: "Jument", image: commedhabImg, taille: "xl", couleur: "#FF6FA3", bulle: "Gros caractère, cœur encore plus gros." },
  { nom: "Mako", nomComplet: "Mako", espece: "Chien", image: makoImg, taille: "lg", couleur: "#2BC48A", bulle: "Balade ? Quelqu'un a dit balade ?!" },
  { nom: "Hawaï", nomComplet: "Hawaï", espece: "Chat", image: hawaiImg, taille: "md", couleur: "#FFC93C", bulle: "Pot de colle officiel. Ronron offert." },
  { nom: "Mowgli", nomComplet: "Mowgli", espece: "Chat", image: mowgliImg, taille: "md", couleur: "#2BC48A", bulle: "Je fais 4 km de balade avec Mako, moi." },
  { nom: "Phuket", nomComplet: "Phuket", espece: "Chatte", image: phuketImg, taille: "md", couleur: "#FF6FA3", bulle: "Un câlin ? Peut-être. Demain." },
  { nom: "Nyx", nomComplet: "Nyx", espece: "Chatte", image: nyxImg, taille: "md", couleur: "#FFC93C", bulle: "Personne ne touche à ma famille." },
  { nom: "Téthys", nomComplet: "Téthys", espece: "Chatte", image: tethysImg, taille: "md", couleur: "#2BC48A", bulle: "Sieste au soleil, ne pas déranger." },
  { nom: "Yellow", nomComplet: "Yellow", espece: "Chatte", image: yellowImg, taille: "md", couleur: "#FF6FA3", bulle: "Trois pattes, zéro limite !" },
];

export default poilus;
