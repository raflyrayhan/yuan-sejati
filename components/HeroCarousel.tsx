"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ------------- CONTENT ------------- */
const slides = [
  {
    href: "/about",
    headline: "PT.\nYUAN SEJATI",
    subline:
      "Founded in 1982, ISO 9001/14001/45001/37001 certified, and the trusted metering partner for Pertamina, Chevron & PGN.",
    bg: "/abouthero.jpg",
  },
  {
    href: "/products",
    headline: "STATE-OF-THE-ART\nTECHNOLOGY",
    subline:
      "Custody metering systems, HIPPS packages, gas conditioning skids — engineered to OIML & API standards.",
    bg: "/about1.jpg",
  },
  {
    href: "/projects",
    headline: "SPANNING A\nGLOBAL FOOTPRINT",
    subline:
      "400+ skids across Indonesia, 80 EPC projects delivered on time — from Sumatra to Papua.",
    bg: "/portofolio-hero.jpg",
  },
  
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const prev = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  /* autoplay */
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND IMAGES */}
      {slides.map((slide, i) => (
        <div
          key={slide.href}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.bg}
            alt={slide.headline}
            fill
            className={`object-cover transition-transform duration-[8000ms] ease-linear ${
              i === index ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
      ))}

      {/* TEXT BLOCK */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-16 md:px-12 md:pb-24">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight whitespace-pre-line">
            {slides[index].headline}
          </h1>
          <p className="mt-4 max-w-xl text-lg md:text-xl text-white/80">
            {slides[index].subline}
          </p>
        </div>

        {/* EXPLORE BUTTON */}
        <button
          onClick={() => router.push(slides[index].href)}
          className="mt-10 inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
        >
          EXPLORE
        </button>
      </div>

      {/* PREV / NEXT */}
      <button
        onClick={prev}
        className="z-20 absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="z-20 absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index
                ? "bg-white"
                : "bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
