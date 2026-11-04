type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  dark?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  dark = true,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        dark ? "bg-ink text-cream" : "bg-cream text-ink"
      } ${image ? "min-h-[52vh]" : "pt-28 pb-16"}`}
    >
      {image ? (
        <>
          <img
            src={image}
            alt=""
            className="ken-burns absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/30" />
          <div className="relative site-container flex min-h-[52vh] flex-col justify-end pb-14 pt-32">
            {eyebrow ? <p className="eyebrow opacity-80">{eyebrow}</p> : null}
            <h1 className="font-display mt-3 max-w-3xl text-4xl leading-tight md:text-6xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 max-w-2xl text-base text-cream/80 md:text-lg">
                {subtitle}
              </p>
            ) : null}
          </div>
        </>
      ) : (
        <div className="site-container">
          {eyebrow ? <p className="eyebrow opacity-60">{eyebrow}</p> : null}
          <h1 className="font-display mt-3 max-w-3xl text-4xl leading-tight md:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base text-ink-soft md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      )}
    </section>
  );
}
