// app/contact/page.tsx
"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_ob3pabn",
        "template_g7vn6be",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "XissUhOcE2e-mSvv0"
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
    }
  };

  return (
    <>
    <main className="bg-white text-slate-900 min-h-screen py-16 px-6">
      {/* page title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Address & Contact */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <Image
              src="/yuanlogo.png"
              alt="PT Yuan Sejati"
              width={90}
              height={90}
              className="w-32"
            />
          </div>
          <div>
            <p>Komplek Fatmawati Mas Blok II – 221</p>
            <p>Jl. RS Fatmawati No. 20, Jakarta 12430, Indonesia</p>
            <a
              href="https://maps.app.goo.gl/jJhZVDHRzopLRCWy7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              View on Maps
            </a>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="mr-3 text-rose-500">📞</span>
              <a href="tel:+62217654968" className="hover:underline">
                +62 21 7654968
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-rose-500">📠</span>
              <span>+62 21 7654967</span>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-rose-500">✉️</span>
              <a
                href="mailto:sales@yuansejati.co.id"
                className="hover:underline"
              >
                sales@yuansejati.co.id
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Message Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:ring-rose-400 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:ring-rose-400 focus:outline-none transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:ring-rose-400 focus:outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white px-6 py-3 rounded font-semibold transition"
          >
            Send Message
          </button>
          {sent && (
            <motion.p
              className="text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}
        </motion.form>
      </div>
    
    </main>
   <section className="text-center pb-2 mt-4 bg-gray-950 text-sm text-white">
               © 2025 PT. Yuan Sejati |{' '}
               <span className="inline-flex items-center gap-1">
               Website by
               <a
                 href="https://infimech.tech"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <Image
                   src="/imx_logo_blue.png"
                   alt="Infimech Tech Logo"
                   width={82}
                   height={82}
                   className="filter transition duration-200 hover:brightness-0 hover:invert"
                 />
               </a>
             </span>
             </section>
             </>
  );
}
