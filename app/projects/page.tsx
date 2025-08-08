// app/projects/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "@/public/portofolio-hero.jpg";

interface Project {
  title: string;
  subtitle: string;
  date: string;
  clientLogo: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "EPC – PLN Gas Receiving & Metering Station",
    subtitle: "Banggai – Central Sulawesi",
    date: "2019",
    clientLogo: "/clients/pertamina.png",
    images: [
      "/projects/banggai1.png",
      "/projects/banggai2.png",
      "/projects/banggai3.png",
    ],
  },
  {
    title: "EPC – Pipeline SPAM",
    subtitle: "Umbulan – East Java",
    date: "2019",
    clientLogo: "/clients/pgn.png",
    images: [
      "/projects/umbulan1.png",
      "/projects/umbulan2.png",
      "/projects/umbulan3.png",
    ],
  },
  {
    title: "EPC - JARGAS",
    subtitle: "Tarakan - North Kalimantan",
    date: "2019",
    clientLogo: "/esdm.png",
    images: [
      "/projects/jargas1.png",
      "/projects/jargas2.png",
      "/projects/jargas3.png",
    ],
  },
  {
    title: "EPC - Gas Station",
    subtitle: "Kotogasib - Riau",
    date: "2018",
    clientLogo: "/clients/tgi.svg",
    images: [
      "/projects/kotogasib1.png",
      "/projects/kotogasib2.png",
      "/projects/kotogasib3.png",
    ],
  },
  {
    title: "EPC - Gas Metering Station",
    subtitle: "Siberida - Riau",
    date: "2017",
    clientLogo: "/clients/tgi.svg",
    images: [
      "/projects/siberida1.png",
      "/projects/siberida2.png",
      "/projects/siberida3.png",
    ],
  },
  {
    title: "EPC – Gas Custody Metering System in SKG-10",
    subtitle: "West Prabumulih – Prabumulih Field",
    date: "2015",
    clientLogo: "/pertaminaep.png",
    images: [
      "/projects/prabumulih1.png",
      "/projects/prabumulih2.png",
      "/projects/prabumulih3.png",
    ],
  },
  {
    title: "Gas Dew Point",
    subtitle: "Bekasi – West Java",
    date: "2015",
    clientLogo: "/pertaminaep.png",
    images: [
      "/projects/bekasi1.png",
      "/projects/bekasi2.png",
      "/projects/bekasi3.png",
    ],
  },
  {
    title: "Thermal Oxidizer, Senoro Gas Dev. Project",
    subtitle: "Senoro – Central Sulawesi",
    date: "2015",
    clientLogo: "/clients/tripatra.png",
    images: [
      "/projects/sonoro1.png",
      "/projects/sonoro2.png",
      "/projects/sonoro3.png",
    ],
  },
  {
    title: "CNG Plant",
    subtitle: "Indonesia",
    date: "2014",
    clientLogo: "/clients/pjb.png",
    images: [
      "/projects/cng1.png",
      "/projects/cng2.png",
      "/projects/cng3.png",
    ],
  },
  {
    title: "EPC - Ultrasonic Gas Metering Station",
    subtitle: "Perawang - Riau",
    date: "2004",
    clientLogo: "/clients/tgi.svg",
    images: [
      "/projects/perawang1.png",
      "/projects/perawang2.png",
      "/projects/perawang3.png",
    ],
  },
];

// split your long bullet list into two equal-ish columns
const otherExperiencesLeft = [
  "Metering Regulating System – 400+ skids installed in Perusahaan Gas Negara",
  "PGN – Panaran off-take station (USM, Offtake facility)",
  "PGN UTSJ – South Sumatera West Java II pipeline (USM, Analyzer)",
  "PGN UTSJ – Muara Bekasi Upgrading (USM, Analyzer)",
  "Chevron Indonesia – Lawe-lawe Liquid Metering upgrade (PD, FC, HMI)",
  "Conoco Phillips – FSO Intan Metering Upgrade (Turbine, FC, HMI)",
  "Santos – Condensate Metering (PD, FC)",
  "PetroChina – Crude Oil Metering (Coriolis, FC, HMI)",
  "PetroChina – Gas Metering System (Orifice, GC, HMI)",
  "Semco – Gas Metering (Orifice, GC, Moisture, HMI)",
  "Regas – GC Rental (GC)",
  "Pertamina RU IV Cilacap – LPG Metering (Turbine, Prover)",
  "Pertamina RU III Plaju – White Product Master Meter (Master meter, HMI)",
];

const otherExperiencesRight = [
  "Pertamina RU V Balikpapan – LSWR Metering (PD, Prover, HMI)",
  "Pertamina RU VI Balongan – Propylene Metering Upgrade (FC, HMI)",
  "Pertamina UPMS – Depot Tanjung Gerem upgrade (FC, Prover recondition, HMI)",
  "Pertamina EP Klayan – Gas Metering (Orifice, GC)",
  "Pertamina EP Region Jawa – Multiphase Metering (MPFM)",
  "Pertamina EP Prabumulih – Gas Metering (Orifice)",
  "Pertamina Shipping – MT Geudondong Conversion (Turbine, HMI, Prover)",
  "Pertamina DPPU Hasanudin – Avtur Metering (Turbine, Coriolis, FC)",
  "Patra SK – Coriolis Master Meter (Coriolis, HMI)",
  "Patra SK – Coriolis Additional Stream Meter (Coriolis, HMI)",
  "LPG Depot Panjang – Ship & Truck Loading",
  "Maspion Depot – LPG Shiploading & Truck Loading",
];

export default function ProjectsPage() {
  const [idx, setIdx] = useState(0);
  const project = projects[idx];
  const [showOthers, setShowOthers] = useState(false);      // ← new state

  const prev = () =>
    setIdx((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () =>
    setIdx((i) => (i === projects.length - 1 ? 0 : i + 1));

  

  return (
    <main className="bg-white text-slate-900">
      {/* HERO – fixed, fullscreen */}
      <section className="fixed inset-0 w-full h-screen -z-10 overflow-hidden">
        <Image
          src={heroImg}
          alt="Project Portfolio Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/15 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white"
          >
            Project Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 max-w-2xl text-lg md:text-xl text-white/90"
          >
            A selection of our landmark EPC and metering projects across Indonesia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mt-[100vh] py-16 px-6 max-w-6xl mx-auto">
        {/* Project Header */}
        <div className="relative bg-slate-100 p-8 rounded-lg mb-10">
          <h2 className="text-3xl font-bold mb-1">EPC PROJECTS</h2>
          <p className="text-xl">{project.title}</p>
          <p className="text-sm text-slate-600">
            {project.subtitle} – {project.date}
          </p>
          <div className="absolute top-6 right-6 w-32 h-29">
            <Image
              src={project.clientLogo}
              alt="Client logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white">
            <Image
              src={project.images[0]}
              alt={`${project.title} large`}
              width={800}
              height={800}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            {project.images.slice(1).map((url, i) => (
              <div
                key={i}
                className="flex-1 overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-white"
              >
                <Image
                  src={url}
                  alt={`${project.title} thumb ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-[190px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Prev/Next */}
        <div className="flex justify-between items-center mb-16">
          <button
            onClick={prev}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-black transition"
          >
            ← Prev
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-black transition"
          >
            Next →
          </button>
        </div>

         <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowOthers((v) => !v)}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-black transition"
        >
          {showOthers ? "Hide Other Projects" : "See Other Projects"}
        </button>
        </div>

        {/* Other Project Experiences Table */}
        {showOthers && (
        <motion.section
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-8 bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto overflow-x-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Other Project Experiences</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.from(
                { length: Math.max(otherExperiencesLeft.length, otherExperiencesRight.length) },
                (_, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-sm text-gray-600 align-top">
                      {otherExperiencesLeft[i] || ""}
                    </td>
                    <td className="w-4" />
                    <td className="px-4 py-3 text-sm text-gray-600 align-top">
                      {otherExperiencesRight[i] || ""}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </motion.section>
      )}
      </div>
    </main>
  );
}
