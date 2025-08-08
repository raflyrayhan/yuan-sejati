// app/products/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "@/public/producthero.jpg";

interface Product {
  img: string;
  title: string;
  desc: string;
}

const meteringProducts: Product[] = [
  {
    img: "/products/turbinemeter.jpg",
    title: "Turbine Liquid Metering",
    desc:
      "High-precision turbine flow meters for liquid hydrocarbons, delivering accurate volume and flow rate data even under turbulent conditions.",
  },
  {
    img: "/products/orifice-meter.png",
    title: "Orifice Gas Metering",
    desc:
      "AGA- and API-compliant orifice plate assemblies for reliable natural gas measurement, with easy calibration and minimal maintenance.",
  },
  {
    img: "/products/coriolis.png",
    title: "Coriolis Liquid Metering",
    desc:
      "Mass-flow Coriolis meters providing real-time density, temperature compensation, and superior accuracy for custody transfer applications.",
  },
  {
    img: "/products/mpfm.png",
    title: "Multi-phase Meter",
    desc:
      "Integrated meter capable of simultaneously measuring oil, water and gas fractions in a single pipeline—ideal for wellhead monitoring.",
  },
  {
    img: "/products/gascremagraph.png",
    title: "Gas Chromatograph",
    desc:
      "Online GC analyzers for continuous gas composition monitoring and heating value analysis, ensuring product quality and fiscal accuracy.",
  },
  {
    img: "/products/mrscabinet.png",
    title: "MRS Cabinet",
    desc:
      "Complete Meter Run Support cabinets with integrated valves, regulators, and instrumentation in a compact, skid-mounted package.",
  },
];

const otherProducts: Product[] = [
  {
    img: "/products/fgcu.png",
    title: "FGCU Packages",
    desc:
      "Fuel Gas Conditioning Units that remove moisture and contaminants, protecting compressors and turbines from fouling.",
  },
  {
    img: "/products/separator.png",
    title: "Separators Package",
    desc:
      "Three-phase separator skids designed for efficient separation of gas, oil and water in upstream and processing facilities.",
  },
  {
    img: "/products/gasfilter.jpg",
    title: "Gas Filter Package",
    desc:
      "High-capacity filtration systems to remove solids and liquids, ensuring clean gas flow and protecting downstream equipment.",
  },
  {
    img: "/products/hipps.jpg",
    title: "HIPPS Packages",
    desc:
      "High-Integrity Pressure Protection Systems engineered to isolate and protect pipelines and vessels from over-pressure events.",
  },
  {
    img: "/products/dhu.jpg",
    title: "Gas Dehydration Packages",
    desc:
      "Triethylene glycol dehydration skids to meet pipeline water content specs and prevent hydrate formation.",
  },
  {
    img: "/products/membrane.png",
    title: "Membrane Gas Treatment",
    desc:
      "Membrane separation modules for CO₂ and H₂S removal, offering low operational cost and high recovery rates.",
  },
  {
    img: "/products/gassweet.jpg",
    title: "Gas Sweetening Package",
    desc:
      "Amine-based sweetening units for acid gas removal, delivering pipeline-spec gas quality and meeting environmental standards.",
  },
  {
    img: "/products/cheminject.jpg",
    title: "Chemical Injection Package",
    desc:
      "Automated chemical dosing skids for corrosion inhibition, hydrate control and scale prevention with remote monitoring.",
  },
  {
    img: "/products/waterbath.jpg",
    title: "Water Bath Heater Package",
    desc:
      "Indirect-fired heater systems maintaining sample line temperature for accurate sampling and analysis in cold climates.",
  },
];

export default function ProductsPage() {
  const [activeGroup, setActiveGroup] = useState<"metering" | "others">(
    "metering"
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const list = activeGroup === "metering" ? meteringProducts : otherProducts;
  const active = list[activeIndex];

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* HERO (unchanged) */}
      <section className="fixed inset-0 w-full h-screen -z-10">
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src={heroImg}
              alt="Products Hero"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/15 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Package Products
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Browse our custom-built metering, filtration, and process packages — engineered for precision and reliability.
          </motion.p>
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="relative z-10 mt-[100vh] bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Section heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block pb-2 border-b-4 border-gray-600">
              Our Work Packages
            </h2>
          </div>

          {/* Toggle pills */}
          <div className="flex justify-center gap-4 mb-10">
            {(["metering", "others"] as const).map((grp) => (
              <button
                key={grp}
                onClick={() => { setActiveGroup(grp); setActiveIndex(0); }}
                className={`
                  px-6 py-2 rounded-full font-semibold transition
                  ${
                    activeGroup === grp
                      ? "bg-gray-600 text-white shadow-lg"
                      : "bg-white text-slate-700 border border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                {grp === "metering" ? "Metering" : "Others"}
              </button>
            ))}
          </div>

          <div className="md:flex gap-12">
            {/* Side nav */}
            <ul className="md:w-1/3 space-y-2">
              {list.map((item, idx) => (
                <li key={item.title}>
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className={`
                      w-full text-left px-4 py-2 rounded-md transition
                      ${
                        idx === activeIndex
                          ? "bg-orange-50 font-medium border-l-4 border-orange-600 text-orange-600"
                          : "hover:bg-white hover:shadow-sm"
                      }
                    `}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>

            {/* Active product card */}
            <motion.div
              key={active.title}
              className="md:w-2/3 mt-6 md:mt-0 bg-white rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={active.img}
                  alt={active.title}
                  width={800}
                  height={800}
                  className="w-full h-120 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-4">{active.title}</h3>
                <p className="text-slate-700 flex-grow">{active.desc}</p>
                <a
                  href="#"
                  className="mt-6 inline-block self-start bg-gray-600 text-white px-5 py-2 rounded hover:bg-orange-700 transition"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
