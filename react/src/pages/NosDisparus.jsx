import React from "react";
import pralineImg from '../assets/images/animaux/praline.webp';
import kimaImg from '../assets/images/animaux/Kima.webp';
import kiwiImg from '../assets/images/animaux/kiwi.webp';
import litchiImg from '../assets/images/animaux/Litchi.webp';

const disparus = [
    {
        nom: "Praline",
        image: pralineImg,
        type: "Chienne",
        description: `Douce Praline, ton amour inconditionnel et ta joie de vivre illuminaient chaque jour. Tu resteras à jamais gravée dans nos cœurs.`
    },
    {
        nom: "Kima",
        image: kimaImg,
        type: "Chienne",
        description: `Brave Kima, ta force et ta tendresse nous ont tant apporté. Ton souvenir continue de nous accompagner chaque jour.`
    },
    {
        nom: "Kiwi",
        image: kiwiImg,
        type: "Chat",
        description: `Petit Kiwi, tes facéties et ta curiosité égayaient nos journées. Ton esprit joueur vit encore dans nos souvenirs les plus chers.`
    },
    {
        nom: "Litchi",
        image: litchiImg,
        type: "Chat",
        description: `Doux Litchi, tes ronronnements et tes câlins nous réchauffaient le cœur. Ta présence bienveillante nous accompagne encore.`
    },
];

export default function NosDisparus() {
    return (
        <section
            className="w-full min-h-screen bg-gradient-to-br from-poilu-roy via-poilu-turquoise to-poilu-soleil pb-10 sm:pb-14 md:pb-16"
            aria-labelledby="nos-disparus-title"
        >
            <header className="w-full bg-gradient-to-r from-poilu-roy to-poilu-turquoise py-8 sm:py-10 mb-8 sm:mb-10 md:mb-12" aria-labelledby="nos-disparus-title">
                <h1 id="nos-disparus-title" className="text-3xl sm:text-5xl md:text-6xl font-cinzel-bold text-white text-center drop-shadow-lg tracking-tight px-2">Nos Anges Gardiens</h1>
                <p className="text-center text-poilu-creme font-body text-base sm:text-lg mt-2 sm:mt-4">Hommage à nos compagnons partis trop tôt, mais qui restent à jamais dans nos cœurs.</p>
            </header>
                <div className="max-w-4xl mx-auto px-2 xs:px-3 sm:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                    {disparus.map((animal) => (
                        <article
                            key={animal.nom}
                            className="bg-white rounded-3xl shadow-xl flex flex-col items-center border border-poilu-roy/10 hover:scale-[1.03] transition-transform duration-200 min-h-[340px] sm:min-h-[420px] max-w-full sm:max-w-[350px] mx-auto p-4 sm:p-6"
                            aria-labelledby={`disparu-title-${animal.nom}`}
                        >
                            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-poilu-creme flex items-center justify-center border-2 border-poilu-turquoise/30 mb-2">
                                <img src={animal.image} alt={`Portrait de ${animal.nom}, ${animal.type.toLowerCase()}`} className="w-full h-full object-cover" />
                            </div>
                            <h2 id={`disparu-title-${animal.nom}`} className="text-xl sm:text-2xl font-script text-poilu-turquoise mb-1 mt-2">{animal.nom}</h2>
                            <span className="inline-block bg-poilu-turquoise/10 text-poilu-turquoise px-2 sm:px-3 py-1 rounded-full text-xs font-semibold mb-2 font-heading">{animal.type}</span>
                            <p className="text-poilu-roy font-body text-center text-sm sm:text-base leading-relaxed flex-1">{animal.description}</p>
                            <div className="mt-3 sm:mt-4 text-xl sm:text-2xl text-poilu-turquoise" aria-hidden="true">👼</div>
                        </article>
                    ))}
                </div>
                <footer className="text-center mt-8 sm:mt-12 text-poilu-roy font-body text-base sm:text-lg" aria-label="Hommage final">
                    <p>
                        Praline, Kima, Kiwi et Litchi veillent sur notre famille élargie et nous retrouverons un jour leurs pattes joyeuses qui courront vers nous de l'autre côté...<br />
                        <span className="text-xl sm:text-2xl" aria-hidden="true">👼💖⭐💫</span>
                    </p>
                </footer>
            </div>
        </section>
    );
}
