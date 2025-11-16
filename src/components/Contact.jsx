import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="py-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900">Kontakta Oss</h2>
            <p className="mt-2 text-zinc-600 max-w-3xl">
              Kontakta vårt expertteam av certifierade specialister för ditt nästa professionella järnarbets- och metallkonstruktionsprojekt i Stockholm
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-zinc-700 mt-1" />
                <div>
                  <p className="text-sm text-zinc-500">Telefon</p>
                  <p className="font-medium text-zinc-900">+46 737 517 006</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-zinc-700 mt-1" />
                <div>
                  <p className="text-sm text-zinc-500">E-post</p>
                  <a className="font-medium text-zinc-900 hover:underline" href="mailto:david.torkamani@tjs-ab.com">david.torkamani@tjs-ab.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-zinc-700 mt-1" />
                <div>
                  <p className="text-sm text-zinc-500">Verkstadsplats</p>
                  <p className="font-medium text-zinc-900">Konsul Johnsons väg 1<br/>149 45 Nynäshamn, Sweden</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-zinc-700 mt-1" />
                <div>
                  <p className="text-sm text-zinc-500">Öppettider</p>
                  <div className="text-zinc-900 text-sm">
                    <p>Måndag - Fredag: 08:00 - 17:00</p>
                    <p>Lördag: 09:00 - 15:00</p>
                    <p>Söndag: Stängt</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a href="tel:+46737517006" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-zinc-900 text-white hover:bg-zinc-800">Ring nu</a>
              <a href="mailto:david.torkamani@tjs-ab.com" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-zinc-300 hover:bg-white">Skicka e-post</a>
            </div>

            <p className="mt-6 text-sm text-zinc-600 max-w-xl">
              Är ni redo att påbörja ert professionella järnsmides- och metallkonstruktionsprojekt i Stockholm? Kontakta våra certifierade specialister idag för en kostnadsfri konsultation och avancerad 3D-designvisualisering.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-zinc-200">
            <h3 className="text-lg font-semibold text-zinc-900">Kontakta Oss - Professionell Järnsmide Stockholm</h3>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm text-zinc-600">Namn</label>
                <input className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Fullständigt namn" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-600">Telefon</label>
                  <input className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" placeholder="Ex. +46 73 751 70 06" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-600">E-post</label>
                  <input className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" placeholder="namn@exempel.se" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-zinc-600">Meddelande</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2" placeholder="Beskriv ert projekt kort"></textarea>
              </div>
              <button type="button" className="w-full inline-flex items-center justify-center px-5 py-3 rounded-md bg-zinc-900 text-white hover:bg-zinc-800">
                Skicka förfrågan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
