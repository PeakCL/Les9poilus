/**
 * En-tête de page intérieure — bandeau glass + titre.
 */
export default function PageHeader({ eyebrow, title, subtitle, className = "" }) {
  return (
    <header
      className={`relative overflow-hidden border-b border-white/10 bg-poilu-roy/95 py-12 md:py-16 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(72, 202, 228, 0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 80% 60%, rgba(244, 208, 63, 0.25), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        {eyebrow ? (
          <p className="mb-3 font-display text-sm font-medium uppercase tracking-[0.2em] text-poilu-soleil/90 md:text-base">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display text-3xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-2xl font-body text-base text-white/85 md:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
}
