import React from "react";

const Slider = ({ slides = [], interval = 4000 }) => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);
  };

  React.useEffect(() => {
    if (slides.length === 0) return;
    resetTimer();
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, slides, interval]);

  if (!slides.length) return null;

  return (
    <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-2xl shadow-xl">
      <div
        className="w-full h-full flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)`, width: `${slides.length * 100}%` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="w-full h-full shrink-0 relative z-10">
            <img
              src={s.image}
              alt={s.title || `slide-${i}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold">{s.title}</h3>
              {s.subtitle && <p className="text-sm md:text-base opacity-90">{s.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Nav buttons (kept visually behind slides via z-index in CSS) */}
      <div className="slider-nav left-3">
        <button
          className="slider-btn"
          onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          ◀
        </button>
      </div>
      <div className="slider-nav right-3">
        <button
          className="slider-btn"
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          aria-label="Next slide"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i+1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
