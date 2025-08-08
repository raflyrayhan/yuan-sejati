// app/about/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import heroImg from "@/public/about1.jpg";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const cardVariants : Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
    }),
  };

    const timeline = [
    {
      year: "1982",
      text: "Founded as a local instrumentation workshop",
      img: "/1982.png",
    },
    {
      year: "1984",
      text: "Shifted focus to the Oil & Gas sector",
      img: "/1984.png",
    },
    {
      year: "2004",
      text: "Awarded MIGAS Custody Metering Packager license",
      img: "/2004.png",
    },
    {
      year: "2014",
      text: "Launched EPC services nationwide",
      img: "/2014.png",
    },
    {
      year: "Today",
      text: "Trusted partner of Pertamina, PGN, Chevron & more",
      img: "/today.png",
    },
  ];

  const certs = [
  {
    id: "iso9001",
    title: "ISO 9001:2015 – Quality Management",
    desc: "Proves our ability to consistently deliver metering systems that meet customer and regulatory requirements.",
    img: "/cert1.png",
  },
  {
    id: "iso14001",
    title: "ISO 14001:2015 – Environmental",
    desc: "Confirms commitment to sustainable practices and environmental responsibility across all operations.",
    img: "/cert2.png",
  },
  {
    id: "iso45001",
    title: "ISO 45001:2018 – Health & Safety",
    desc: "Demonstrates robust health-and-safety management protecting employees, clients and stakeholders.",
    img: "/cert3.png",
  },
  {
    id: "iso37001",
    title: "ISO 37001:2016 – Anti-Bribery",
    desc: "Ensures effective controls to prevent, detect and address bribery risks in our business.",
    img: "/cert4.png",
  },
  {
    id: "spda",
    title: "SPDA – Pertamina EP CEPU",
    desc: "Official registration enabling us to supply goods and services to Pertamina EP CEPU.",
    img: "/cert4.jpg",
  },
  {
    id: "skt-tgi",
    title: "SKT – Transgasindo",
    desc: "Registered vendor for gas-transportation projects across Indonesia until 2026.",
    img: "/cert7.jpg",
  },
  {
    id: "sktpm-phm",
    title: "SKTPM – Pertamina Hulu Mahakam",
    desc: "Registered supplier of goods and services to Pertamina Hulu Mahakam, valid until January 2022.",
    img: "/cert6.jpg",
  },
  {
    id: "stp-ln-sipt",
    title: "STP‐LN/SIPT – Kementerian Perdagangan",
    desc: "Sertifikat pendaftaran sebagai Agen Tunggal Barang Produksi Luar Negeri, berlaku sampai 14 Maret 2028.",
    img: "/cert8.jpg",
  },
  {
    id: "pb-umku-appendix",
    title: "PB‐UMKU – Distributor/Agent License Appendix",
    desc: "Lampiran Surat Tanda Pendaftaran Distributor/Agen Barang dan Jasa, berlaku sampai 19 November 2026.",
    img: "/cert9.jpg",
  },
  {
    id: "galvanic-distributor",
    title: "Distributor Authorization – Galvanic Applied Sciences",
    desc: "Authorized distributor for Galvanic Applied Sciences gas & liquid analyzer products in Indonesia.",
    img: "/cert10.jpg",
  },
  {
    id: "e-chsems",
    title: "e-CHSEMS – SKK MIGAS",
    desc: "E-CHSEMS certification for oil & gas platform and topside fabrication services, valid until October 2025.",
    img: "/cert11.jpg",
  },
  {
    "id": "skup-migas",
    "title": "SKUP – Surat Kemampuan Usaha Penunjang Migas",
    "desc": "Surat Kemampuan Usaha Penunjang Migas No. 0913/19.07/DMB/2018 issued by the Directorate General of Oil and Gas, Ministry of Energy and Mineral Resources, to PT Yuan Sejati, certifying capability in both construction (Konstruksi) and non-construction (Pengoperasian & Pemeliharaan) support services for the oil & gas sector.",
    "img": "/cert12.png"
  },
  {
    "id": "skup-migas-lampiran",
    "title": "Lampiran SKUP – Kapabilitas Usaha Penunjang Migas",
    "desc": "Lampiran SKUP Migas No. 0913/19.07/DMB/2018 dated 02 April 2018 for PT Yuan Sejati, detailing company legal status (domestic entity, shareholding, key personnel), ISO management system certifications (ISO 9001, ISO 14001, ISO 18001), scope of services in mechanical & electrical construction and non-construction operations, and workforce qualifications.",
    "img": "/cert13.png"
  }
];


export default function AboutPage() {
  const [selectedCert, setSelectedCert] = useState<typeof certs[0] | null>(null);
  return (
    <main className="bg-slate-50 text-slate-900">
      {/* HERO */}
      {/* HERO – FIXED + FULL + ANIMATED */}
<section className="fixed inset-0 w-full h-screen -z-10">
  {/* Ken-Burns background */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className="absolute inset-0"
  >
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.12 }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute inset-0"
    >
      <Image
        src={heroImg}
        alt="PT Yuan Sejati HQ"
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  </motion.div>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/15 to-transparent" />

  {/* Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-5xl md:text-7xl font-extrabold text-white"
    >
      About&nbsp;PT&nbsp;Yuan&nbsp;Sejati
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      className="mt-4 max-w-2xl text-lg md:text-xl text-white/90"
    >
      Engineering excellence in energy measurement since 1982 — trusted across
      Indonesia and beyond.
    </motion.p>

    {/* Scroll hint */}
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

<div className="relative z-10 mt-[100vh] bg-slate-50">

    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-5xl px-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Who We Are
          </h2>
          <div className="flex justify-center items-center w-full pb-8">
            <Image
                src="/about2.jpg"
                alt="about2"
                width={700}
                height={700}
                className="
                mx-auto
                p-2
                object-fill
                border-1 border-gray-200
                rounded-lg
                shadow-lg
                "
            />
            </div>


          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            PT Yuan Sejati, established in January 1982 and headquartered at
            Komplek Fatmawati Mas Blok&nbsp;II&nbsp;–&nbsp;221 in Jakarta
            Selatan, is Indonesia’s premier, ISO-certified one-stop provider of
            custody metering systems, HIPPS packages, gas-conditioning skids
            and full-spectrum EPC solutions for the oil&nbsp;&amp;&nbsp;gas,
            power and petrochemical industries—leveraging 42&nbsp;years of
            engineering excellence, state-of-the-art design software, and a
            robust portfolio of over&nbsp;400 installed skids and
            80+ delivered EPC projects to serve national giants such as
            Pertamina, PGN, Chevron, ConocoPhillips, Santos and PetroChina
            while continuously advancing safety, quality and environmental
            standards across Indonesia and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Our Story
        </motion.h2>

        <div className="relative">
          {/* vertical line */}
          <span className="absolute left-1/2 top-0 h-full w-1 bg-slate-200 -translate-x-1/2"></span>

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120, delay: i * 0.15 }}
              className={`relative flex items-start mb-16 ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* dot on the line */}
              <span className="absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 bg-slate-500 rounded-full ring-4 ring-white"></span>

              {/* card */}
              <div
                className={`w-5/12 md:w-5/12 bg-white rounded-xl shadow-lg overflow-hidden ${
                  i % 2 === 0 ? "mr-auto" : "ml-auto text-right"
                }`}
              >
                {/* top half image */}
                <div className="w-full h-40 relative p-2 bg-gray-50">
                  <Image
                    src={item.img}
                    alt={`${item.year} milestone`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                {/* text content */}
                <div className="p-6">
                  <p className="text-sm font-bold text-orange-600">
                    {item.year}
                  </p>
                  <p className="mt-2 text-slate-700">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Vision & Mission
        </motion.h2>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg"
          >
            <span className="absolute -top-4 left-6 bg-orange-500 text-white px-3 py-1 text-sm font-bold rounded">
              Vision
            </span>
            <p className="text-lg font-semibold text-slate-800">
              To become the one-stop solution provider for metering systems and
              related packages across Indonesia and beyond.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg"
          >
            <span className="absolute -top-4 left-6 bg-slate-700 text-white px-3 py-1 text-sm font-bold rounded">
              Values
            </span>
            <ul className="space-y-2 text-slate-800 font-medium">
              <li>• Honestly</li>
              <li>• Competency</li>
              <li>• Continuous Improvement</li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 shadow-lg"
          >
            <span className="absolute -top-4 left-6 bg-sky-600 text-white px-3 py-1 text-sm font-bold rounded">
              Mission
            </span>
            <p className="text-lg font-semibold text-slate-800">
              Provide excellent products and services safely at a competitive
              budget, empowering clients to measure, manage and monetize energy
              with confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

      {/* CERTIFICATIONS */}
      <>
      <section id="cert-gallery" className="py-20 bg-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Legal Certifications
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative w-full h-80">
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh] bg-gray-100">
                <Image
                  src={selectedCert.img}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                <p className="text-sm text-gray-700">{selectedCert.desc}</p>
              </div>
              <button
                className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/70 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => setSelectedCert(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>

      {/* SERVICES */}
    <section className="py-16 md:py-24 bg-white">
  <div className="mx-auto max-w-6xl px-6">
    <motion.h2
      className="text-4xl font-semibold text-center text-gray-900 mb-12"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      What We Deliver
    </motion.h2>

    <div className="space-y-16">
      {/* Industry Sector */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-12"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold text-gray-800">Industry Sector</h3>
          <ul className="mt-4 space-y-4 text-gray-700">
            <li>
              <strong>Oil & Gas:</strong>{" "}
              Custody Metering System, System Package, Small EPC.
              <p className="text-sm text-gray-500 mt-2">
                We provide advanced metering solutions, from design to service, including system packages for the oil & gas industry.
              </p>
            </li>
            <li>
              <strong>Power:</strong>{" "}
              Custody Metering System, System Package, Small EPC.
              <p className="text-sm text-gray-500 mt-2">
                Offering reliable custody metering and essential power system packages to ensure efficiency and accuracy in operations.
              </p>
            </li>
            <li>
              <strong>Petrochemical:</strong>{" "}
              Custody Metering System, System Package, Small EPC.
              <p className="text-sm text-gray-500 mt-2">
                Tailored solutions for the petrochemical sector, including custody metering systems and various system packages.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 border-l border-gray-200 pl-8">
          <div className="text-sm text-gray-500">
            <span className="block font-medium text-gray-800">Key Industries</span>
            <span className="block mt-2">Oil & Gas, Power, Petrochemical</span>
          </div>
        </div>
      </motion.div>

      {/* Product Coverage */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-12"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold text-gray-800">Product Coverage</h3>
          <ul className="mt-4 space-y-4 text-gray-700">
            <li>
              <strong>Metering System:</strong> Gas Metering, Liquid Metering, Prover.
              <p className="text-sm text-gray-500 mt-2">
                We offer precision metering systems for gas and liquid, along with prover systems to ensure the highest accuracy.
              </p>
            </li>
            <li>
              <strong>Component:</strong> Flow Meter, Analyzer, Valve, HDPE Fitting.
              <p className="text-sm text-gray-500 mt-2">
                Essential components for various industrial applications, including flow meters, analyzers, valves, and fittings.
              </p>
            </li>
            <li>
              <strong>System Package:</strong> Gas Conditioning, Metering Stations, Small EPC.
              <p className="text-sm text-gray-500 mt-2">
                Complete system packages for gas conditioning and metering, along with small EPC services for efficient implementation.
              </p>
            </li>
            <li>
              <strong>System Control:</strong> SCADA, Shutdown System, HIPPS, CEMS.
              <p className="text-sm text-gray-500 mt-2">
                Advanced control systems for operations management, safety, and environmental monitoring, including SCADA and CEMS.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 border-l border-gray-200 pl-8">
          <div className="text-sm text-gray-500">
            <span className="block font-medium text-gray-800">Product Types</span>
            <span className="block mt-2">Metering Systems, System Control, Components</span>
          </div>
        </div>
      </motion.div>

      {/* Zigzag Image Preview */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Image 1 */}
        <motion.div
          className="w-full md:w-1/2 relative mb-6 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 transform -rotate-6">
            <Image
              src="/today.png"  // Image should be in the public directory
              alt="Cosmetic Product 1"
              width={500}
              height={350}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Image 2 */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 transform rotate-6">
            <Image
              src="/projects/dhu.jpg"  // Image should be in public/projects
              alt="Cosmetic Product 2"
              width={500}
              height={350}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

</div>
    </main>
  );
}