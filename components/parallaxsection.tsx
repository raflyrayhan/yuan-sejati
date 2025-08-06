"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const certs = [
  {
    id: 1,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    desc: "Certifies PT Yuan Sejati’s ability to consistently provide products and services that meet customer and regulatory requirements.",
    img: "/cert1.png",
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
    desc: "Confirms our commitment to sustainable practices and environmental compliance across all operations.",
    img: "/cert2.png",
  },
  {
    id: 3,
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    desc: "Demonstrates a robust health-and-safety management system protecting employees, clients and stakeholders.",
    img: "/cert3.png",
  },
  {
    id: 4,
    title: "ISO 37001:2016",
    subtitle: "Anti-Bribery Management",
    desc: "Ensures effective controls and processes to prevent, detect and address bribery risks in our business.",
    img: "/cert4.png",
  },
];

export default function CertGallery() {
  const [active, setActive] = useState(certs[0]);

  return (
    <>
    <section id="certifications" className="py-16 md:py-24 bg-gray-300">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-right mb-5 text-slate-900"
        >
          ISO Certified
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:text-[.9rem] text-right mb-2 text-black"
          >
          Certified to ISO 9001, ISO 14001, ISO 45001 and ISO 37001, with official recognition from major energy regulators.
        </motion.p>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: Image preview */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-2"
            >
              <Image
                src={active.img}
                alt={active.title}
                width={200}
                height={200}
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>
          </div>

          {/* Right: Info + list */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-slate-900">{active.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{active.subtitle}</p>
              <p className="text-slate-700 leading-relaxed">{active.desc}</p>
            </motion.div>

            {/* Certificate list */}
            <div className="mt-8 space-y-2">
              {certs.map((cert, i) => (
                <motion.button
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setActive(cert)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    active.id === cert.id
                      ? "bg-slate-500 text-white shadow-md"
                      : "bg-white hover:bg-orange-50 text-slate-800"
                  }`}
                >
                  {cert.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
     
    </section>
     <section>
      <div className="mx-auto max-w-7xl p-12">
  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-2 pt-2">
    Global Principals
  </h2>
  <p className="text-center text-slate-600 max-w-3xl mx-auto p-6">
    We partner with world-class manufacturers to guarantee the highest quality,
    reliability and compliance for every metering and EPC package we deliver.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
    
    <div className="flex justify-center">
      <Image src="/pietro-fiorentini.png" alt="Pietro Fiorentini" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition"/>
    </div>

    
    <div className="flex justify-center">
      <Image src="/petrol.png" alt="PETROL Instruments S.r.l" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>

    
    <div className="flex justify-center">
      <Image src="/faure-herman.png" alt="FAURE HERMAN" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    
    <div className="flex justify-center">
      <Image src="/daesung.png" alt="DAESUNG" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>

   
    <div className="flex justify-center">
      <Image src="/galvanic.png" alt="Galvanic Applied Sciences" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>

    
    <div className="flex justify-center">
      <Image src="/flowmd.png" alt="Flow MD" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
</div>
</div>
<hr className="border-black w-1/2 mx-auto my-8 bg-transparent" />  
</section>

<section>
  
  <div className="mx-auto max-w-7xl p-10">
  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-2 pt-2">
    Our Clients
  </h2>
  <p className="text-center text-slate-600 max-w-3xl mx-auto p-6">
    Trusted by a diverse range of energy, petrochemical, and power sector partners for precision-engineered metering and process solutions.
  </p>
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center p-8">
    <div className="flex justify-center">
      <Image src="/clients/chevron.png" alt="client" width={110} height={110} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/conoco.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/pertamina.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/mwm.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/petrochina.png" alt="client" width={170} height={170} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/pp.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/saipem.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/santos.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center p-8">
    <div className="flex justify-center">
      <Image src="/clients/pjb.png" alt="client" width={110} height={110} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/pgn.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/jgc.svg" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/rekind.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/samsung.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/technip.svg" alt="client" width={130} height={130} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center p-8">
    <div className="flex justify-center">
      <Image src="/clients/tgi.svg" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/pln.svg" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/tripatra.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/wika.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
     <div className="flex justify-center">
      <Image src="/clients/ge.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/bright.png" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/ikpt.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/rpe.jpg" alt="client" width={150} height={150} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/solarturbin.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/salamander.jpg" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/srmd.jpeg" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/thyssenkrupp.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/hcml.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/hulurokan.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/indonesiapower.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/kpi.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/maspion.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/medco.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>

  
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center p-8">
    <div className="flex justify-center">
      <Image src="/clients/patrask.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/pgnsaka.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/spp.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/clients/timas.jpeg" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    </div>
  </div>
</section>
</>
  );
}