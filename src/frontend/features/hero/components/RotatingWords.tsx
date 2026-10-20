type RotatingWordsProps = {
  /** exactly three words — the slot keyframes are timed for three */
  words: string[];
};

/** Slot-machine word swap; screen readers get the full list once. */
export default function RotatingWords({ words }: RotatingWordsProps) {
  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true" className="inline-block h-[1.2em] overflow-hidden align-bottom">
        <span className="block animate-slot">
          {[...words, words[0]].map((word, i) => (
            <span key={i} className="aurora-text block font-bold leading-[1.2em]">
              {word}
            </span>
          ))}
        </span>
      </span>
    </>
  );
}
