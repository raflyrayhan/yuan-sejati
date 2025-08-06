import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-slate-300 py-6">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
        <div>
          <Image src="/yuanlogo.png" alt="logo" className="filter invert" width={60} height={60}/>
          <p className="text-sm">
            Komplek Fatmawati Mas Blok II – 221<br />
            Jl. RS Fatmawati No. 20, Jakarta 12430, Indonesia
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm">📞 +62 21 7654968</p>
          <p className="text-sm">📠 +62 21 7654967</p>
          <p className="text-sm">✉️ sales@yuansejati.co.id</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">
            Certifications
          </h4>
          <p className="text-sm">
            ISO 9001 | ISO 14001 | ISO 45001 | ISO 37001
          </p>
        </div>
      </div>
      <section className="text-center pb-2 pt-8 mt-10 bg-gray-950 text-sm text-white">
        © 2025 PT. Yuan Sejati |{' '}
        <span className="inline-flex items-center gap-1">
        Website by
        <a
          href="https://infimech-tech.vercel.app"
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
    </footer>
  );
}