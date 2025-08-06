"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import aboutImage from "@/public/about-image.jpg";

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
             <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-left mb-12 text-black"
        >
          PT Yuan Sejati
        </motion.h2>
            <p className="text-lg text-slate-700">
              PT Yuan Sejati is a leading company in the oil and gas industry, specializing in providing high-quality equipment and services for various projects. With decades of experience, we are committed to innovation, sustainability, and excellence in all our endeavors.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <Image src={aboutImage} alt="About PT Yuan Sejati" className="rounded-lg shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}