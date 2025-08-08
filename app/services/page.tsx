// app/services/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "@/public/service-hero.jpg";

const services = [
  {
    title: "Calibration Agent",
    desc: "We perform on-site calibration of flow, pressure, and temperature instruments—ensuring every meter reads accurately and complies with industry standards.",
    img: "/services/calibration.jpg",
  },
  {
    title: "Metering Certification",
    desc: "Our team audits and certifies custody metering systems, verifying performance, leak integrity, and full regulatory compliance for both gas and liquid measurement.",
    img: "/services/metering.jpg",
  },
  {
    title: "Maintenance Contract",
    desc: "Comprehensive maintenance agreements covering preventive inspections, safety checks, and corrective repairs to maximize uptime and extend equipment life.",
    img: "/services/maintenance.jpg",
  },
  {
    title: "System Upgrading",
    desc: "Upgrade legacy metering skids, instrumentation packages, and control systems with the latest technologies—boosting efficiency, safety, and data accuracy.",
    img: "/services/system-upgrade.jpg",
  },
  {
    title: "Metering Training",
    desc: "Hands-on training programs on metering principles, system operation, troubleshooting, and best practices—empowering your team with practical skills.",
    img: "/services/training.jpg",
  },
  {
    title: "Spare Part Supply",
    desc: "A reliable supply chain for genuine spare parts and consumables, ensuring fast replacement and minimal downtime for your critical installations.",
    img: "/services/spare-parts.jpg",
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="fixed inset-0 w-full h-screen -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0"
          >
            <Image
              src={heroImg}
              alt="Services Hero"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/25 to-transparent" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-4 max-w-2xl text-lg md:text-xl text-white/90"
          >
            From calibration to full EPC solutions, we deliver end-to-end
            metering expertise you can trust.
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

      {/* CONTENT */}
      <div className="relative z-10 mt-[100vh] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Explore Our Expertise
          </motion.h2>

          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`flex flex-col md:flex-row items-center mb-20 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image side */}
              <div className="md:w-1/2 w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text side */}
              <div className="md:w-1/2 w-full md:px-8 px-0 mt-6 md:mt-0">
                <h3 className="text-2xl font-semibold mb-4 text-slate-600">
                  {svc.title}
                </h3>
                <p className="text-lg text-black leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
   
    </main>
  );
}
