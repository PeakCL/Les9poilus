import React from "react";

export default function TolkienSection() {
  return (
    <section
      className="py-16 bg-gradient-to-br from-poilu-creme via-poilu-soleil to-poilu-turquoise relative overflow-hidden"
      aria-labelledby="section-tolkien-title"
    >
      {/* Parchemin décoratif en arrière-plan, décoratif donc aria-hidden */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute top-10 left-10 text-6xl rotate-12 drop-shadow-lg animate-pulse">🧙‍♂️</div>
        <div className="absolute top-20 right-20 text-4xl -rotate-12 drop-shadow-lg animate-bounce">📜</div>
        <div className="absolute bottom-10 left-1/4 text-5xl rotate-6 drop-shadow-lg animate-pulse">⚔️</div>
        <div className="absolute bottom-20 right-1/3 text-3xl -rotate-6 drop-shadow-lg animate-bounce">🗡️</div>
      </div>
      <div className="max-w-4xl mx-auto px-2 md:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#fffbe6] via-[#fff9e3] to-[#f7f7fa] shadow-lg border border-poilu-soleil/30 p-6 md:p-12 relative" style={{boxShadow:'0 4px 32px 0 rgba(255, 200, 80, 0.10)'}}>
          {/* En-tête parchemin */}
          <header className="flex flex-col items-center mb-4" tabIndex={-1} aria-labelledby="section-tolkien-title">
            <span className="text-5xl md:text-6xl mb-2 select-none" role="img" aria-label="parchemin">📜</span>
            <h2 id="section-tolkien-title" className="text-poilu-soleil text-2xl md:text-3xl font-script text-center mb-2 drop-shadow-sm">"Neuf compagnons... ainsi doit-il en être."</h2>
          </header>
          {/* Bloc texte Tolkien */}
          <div className="bg-white/80 rounded-2xl px-4 py-4 md:py-6 md:px-8 shadow-inner border border-poilu-soleil/20 mb-8 max-w-3xl mx-auto">
            <p className="text-poilu-roy text-lg md:text-xl font-body text-center leading-relaxed">
              Tout comme <span className="font-bold">la Communauté de l'Anneau</span> de Tolkien réunissait 9 membres unis par une quête commune, <span className="font-bold">notre Communauté des 9 Poilus</span> rassemble nos précieux compagnons dans une aventure quotidienne faite d'amour, de fidélité et de complicité.
            </p>
          </div>
          <section className="flex flex-col items-center gap-4 mb-8" aria-label="Présentation des 9 poilus">
            {/* 1 chien */}
            <div className="flex flex-col items-center mb-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-poilu-soleil to-poilu-turquoise flex items-center justify-center shadow-md border-2 border-poilu-roy/20 mb-1">
                <span className="text-3xl md:text-4xl select-none" role="img" aria-label="chien">🐕‍🦺</span>
              </div>
              <span className="text-poilu-roy font-heading text-base md:text-lg mt-1">Mako</span>
            </div>
            {/* 6 chats en ligne */}
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              {[
                { nom: 'Hawaï' },
                { nom: 'Mowgli' },
                { nom: 'Phuket' },
                { nom: 'Yellow' },
                { nom: 'Nyx' },
                { nom: 'Téthys' },
              ].map((chat) => (
                <div key={chat.nom} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-poilu-soleil to-poilu-turquoise flex items-center justify-center shadow border border-poilu-roy/10">
                    <span className="text-2xl select-none" role="img" aria-label="chat">🐱</span>
                  </div>
                  <span className="text-poilu-roy font-body text-xs mt-1">{chat.nom}</span>
                </div>
              ))}
            </div>
            {/* 2 équidés */}
            <div className="flex justify-center gap-8 mt-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-poilu-turquoise to-poilu-soleil flex items-center justify-center shadow border border-poilu-roy/10">
                  <span className="text-3xl select-none" role="img" aria-label="jument">🦄</span>
                </div>
                <span className="text-poilu-roy font-body text-sm mt-1 text-center">Commed'habitude</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-poilu-turquoise to-poilu-soleil flex items-center justify-center shadow border border-poilu-roy/10">
                  <span className="text-3xl select-none" role="img" aria-label="cheval">🐎</span>
                </div>
                <span className="text-poilu-roy font-body text-sm mt-1 text-center">Goodvisor du Gelon</span>
              </div>
            </div>
          </section>
          {/* Citation Tolkien */}
          <footer className="mt-8 text-center" aria-label="Citation Tolkien">
            <blockquote className="text-poilu-roy font-script text-2xl md:text-xl mb-2 italic">"Car dans l'amitié véritable, même les plus petites créatures peuvent accomplir de grandes choses."</blockquote>
            <div className="text-poilu-roy font-body text-sm">Inspiré par <span className="font-bold text-poilu-soleil">J.R.R. Tolkien</span> <span className="select-none" aria-hidden="true">🧙‍♂️</span></div>
          </footer>
        </div>
      </div>
    </section>
  );
}
