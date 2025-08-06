"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Skids Installed", end: 400 },
  { label: "Years Experience", end: 42 },
  { label: "EPC Projects", end: 80 },
];

export default function CounterSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          Delivering at Scale
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map(({ label, end }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-4xl md:text-5xl font-extrabold text-white">
                <CountUp end={end} duration={2.5} />
                {label === "Countries Served" ? "+" : ""}+
              </span>
              <span className="mt-2 text-white">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}