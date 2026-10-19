import poilus from "../data/poilus";
import silhouettesImg from "../assets/images/silhouettes-coucher-soleil.jpg";

export default function TolkienSection() {
  return (
    <section className="border-y-[3px] border-poilu-roy bg-poilu-soleil py-20 text-poilu-roy md:py-28" aria-labelledby="section-tolkien-title">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 id="section-tolkien-title" className="font-script text-5xl leading-tight sm:text-7xl">
          « Neuf compagnons… ainsi doit-il en être. »
        </h2>
        <img
          src={silhouettesImg}
          width="1600"
          height="896"
          loading="lazy"
          alt="Silhouettes de deux humains, deux chevaux, un chien et six chats en file indienne au coucher du soleil"
          className="sticker mx-auto mt-10 w-full -rotate-1 rounded-2xl"
        />
        <p className="mx-auto mt-10 max-w-[56ch] font-body text-lg leading-relaxed sm:text-xl">
          La Communauté de l&apos;Anneau comptait neuf membres. La nôtre aussi, avec un peu plus de poils et beaucoup
          plus de siestes. Même fil rouge : l&apos;amitié, la fidélité et les petites aventures du quotidien.
        </p>

        <ol className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Les neuf membres de la communauté">
          {poilus.map((p, i) => (
            <li
              key={p.nom}
              className="rounded-full border-[2.5px] border-poilu-roy bg-white px-4 py-1.5 font-body text-sm font-bold"
              style={{ transform: `rotate(${i % 2 ? 2 : -2}deg)` }}
            >
              {p.nomComplet}
            </li>
          ))}
        </ol>

        <blockquote className="mt-12">
          <p className="font-body text-lg italic">
            « Dans l&apos;amitié véritable, les plus petites créatures peuvent accomplir de grandes choses. »
          </p>
          <footer className="mt-2 font-body text-sm font-semibold">Inspiré par J.R.R. Tolkien</footer>
        </blockquote>
      </div>
    </section>
  );
}
