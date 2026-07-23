interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="eyebrow reveal">
        <span className="h-px w-6 bg-accent-400/60" />
        {eyebrow}
      </span>
      <h2 className="reveal mt-4 font-display text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`reveal mt-4 text-base leading-relaxed text-ink-300 sm:text-lg ${
            centered ? 'mx-auto' : ''
          }`}
          style={{ ['--reveal-delay' as string]: '80ms' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
