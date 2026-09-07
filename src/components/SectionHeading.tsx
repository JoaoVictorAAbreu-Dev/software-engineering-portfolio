type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
