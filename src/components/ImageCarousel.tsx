import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="group relative mb-4 overflow-hidden rounded-xl border border-ink-800 bg-ink-950/80">
      {/* image */}
      <div className="relative aspect-video w-full">
        <img
          src={images[current]}
          alt={`${alt} — screenshot ${current + 1}`}
          className="h-full w-full object-cover transition-opacity duration-300"
        />

        {/* arrows — only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-ink-950/70 text-ink-200 opacity-0 backdrop-blur-sm transition-all duration-200 hover:bg-ink-950/90 hover:text-white group-hover:opacity-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-ink-950/70 text-ink-200 opacity-0 backdrop-blur-sm transition-all duration-200 hover:bg-ink-950/90 hover:text-white group-hover:opacity-100"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* dots — only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 px-3 py-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-5 bg-accent-400'
                  : 'w-1.5 bg-ink-600 hover:bg-ink-500'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

