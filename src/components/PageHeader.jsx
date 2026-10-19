/**
 * En-tête de page intérieure — ciel, titre géant et trait qui se dessine.
 */
export default function PageHeader({ eyebrow, title, subtitle, className = "" }) {
  return (
    <header className={`relative bg-poilu-ciel pt-12 text-poilu-roy md:pt-16 ${className}`}>
      <div className="relative mx-auto max-w-5xl px-4 pb-14 sm:px-6 md:pb-20">
        {eyebrow ? <p className="mb-2 font-script text-2xl text-poilu-turquoise md:text-3xl">{eyebrow}</p> : null}
        <h1 className="font-large inline-block text-5xl font-extrabold leading-[0.95] sm:text-6xl md:text-7xl">
          {title}
          <svg viewBox="0 0 300 20" preserveAspectRatio="none" className="trait-dessine mt-2 block h-4 w-full" aria-hidden>
            <path d="M3 12 C 60 2, 110 18, 160 9 S 260 4, 297 12" fill="none" stroke="#FF6FA3" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-[56ch] font-body text-lg leading-relaxed text-poilu-roy/85 md:text-xl">{subtitle}</p>
        ) : null}
      </div>
      <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="block h-6 w-full md:h-10" aria-hidden>
        <path d="M0 40 V20 C 240 0, 480 36, 720 18 S 1200 0, 1440 22 V40 Z" fill="#F3F9FF" stroke="#1B2470" strokeWidth="3" />
      </svg>
    </header>
  );
}
