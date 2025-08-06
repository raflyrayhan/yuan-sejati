// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home"},
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP / STICKY BAR */}
      <nav className="fixed inset-x-0 top-0 z-40 bg-black/80 backdrop-blur-sm text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/yuanlogo.png"
              alt="PT Yuan Sejati"
              width={350}
              height={340}
              priority
              className="h-10 w-auto filter invert"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-orange-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN MENU */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

        {/* panel */}
        <nav className="relative flex flex-col items-center justify-center h-full text-white">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <ul className="space-y-8 text-2xl font-semibold">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
