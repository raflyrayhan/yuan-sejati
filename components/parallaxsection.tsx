"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CertGallery() {

  return (
    <>
    <section id="vision-mission" className="py-16 md:py-24 bg-white">
  <div className="mx-auto max-w-7xl px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-slate-900 mb-12"
    >
      Vision &amp; Mission
    </motion.h2>

    <div className="grid gap-8 lg:grid-cols-3">
      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-amber-50 rounded-2xl shadow-lg p-8"
      >
        <span className="inline-block bg-amber-500 text-white text-xs font-semibold uppercase rounded-full px-3 py-1 mb-4">
          Vision
        </span>
        <p className="text-slate-800 leading-relaxed">
          To become the one-stop solution provider for metering systems and related packages across Indonesia and beyond.
        </p>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-slate-50 rounded-2xl shadow-lg p-8"
      >
        <span className="inline-block bg-slate-700 text-white text-xs font-semibold uppercase rounded-full px-3 py-1 mb-4">
          Values
        </span>
        <ul className="text-slate-800 list-disc list-inside space-y-2">
          <li>Honestly</li>
          <li>Competency</li>
          <li>Continuous Improvement</li>
        </ul>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-blue-50 rounded-2xl shadow-lg p-8"
      >
        <span className="inline-block bg-blue-500 text-white text-xs font-semibold uppercase rounded-full px-3 py-1 mb-4">
          Mission
        </span>
        <p className="text-slate-800 leading-relaxed">
          Provide excellent products and services safely at a competitive budget, empowering clients to measure, manage and monetize energy with confidence.
        </p>
      </motion.div>
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
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center p-8">
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
    <div className="flex justify-center">
      <Image src="/hulumahakam.jpeg" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    <div className="flex justify-center">
      <Image src="/pertaminaep.png" alt="client" width={100} height={100} className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition" />
    </div>
    </div>
  </div>
</section>
</>
  );
}