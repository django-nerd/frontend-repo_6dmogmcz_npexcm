import { Phone, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_120%_-10%,rgba(24,24,27,.25),transparent_60%),radial-gradient(32rem_32rem_at_-10%_-10%,rgba(24,24,27,.2),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium ring-1 ring-emerald-700/10">
              Torkamani Järn & Smide AB Stockholm
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Ledande Professionell Järnsmide och Byggnadssmide Specialister
            </h1>
            <p className="mt-4 text-zinc-700 text-lg">
              Certifierade smedar levererar högkvalitativa stålkonstruktioner, grindar, räcken, trappor och arkitektoniska metallarbeten. Kostnadsfri 3D-design och auktoriserad svetsning enligt europeiska standarder.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#galleri" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-zinc-900 text-white hover:bg-zinc-800">
                Se vårt arbete
              </a>
              <a href="#kontakt" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-zinc-300 hover:bg-zinc-50">
                Kontakta oss
              </a>
            </div>
            <div className="mt-6 flex gap-6 text-sm text-zinc-600">
              <a href="tel:+46737517006" className="inline-flex items-center gap-2 hover:text-zinc-900"><Phone className="h-4 w-4"/> +46 73 751 70 06</a>
              <a href="mailto:david.torkamani@tjs-ab.com" className="inline-flex items-center gap-2 hover:text-zinc-900"><Mail className="h-4 w-4"/> david.torkamani@tjs-ab.com</a>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 bg-gradient-to-br from-zinc-100 to-zinc-200">
              <img src="/hero-forge.jpg" alt="Järnsmide i arbete" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm uppercase tracking-wide opacity-90">Professionell Järnsmide</p>
                <p className="text-lg font-semibold">Stockholm, Sverige</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
