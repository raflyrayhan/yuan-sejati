// app/components/Hero.tsx
"use client";

import Image from "next/image";
import heroImg from "@/public/images/metering-hero.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // Make this section exactly the viewport height
    <section className="relative w-screen h-screen overflow-hidden">
      {/* background image + gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImg}
          alt="Metering Skid"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
        >
          PT Yuan Sejati
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 max-w-2xl text-lg md:text-xl text-white/90"
        >
          Energy Measurement & Construction Solutions for Oil & Gas, Power and Petrochemicals
        </motion.p>
      </div>
    </section>
  );
}
