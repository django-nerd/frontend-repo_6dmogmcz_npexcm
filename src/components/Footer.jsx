export default function Footer() {
  return (
    <footer className="pt-16">
      <div className="border-t border-zinc-200 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-600 text-white grid place-items-center font-bold">T</div>
                <div className="leading-tight">
                  <p className="font-semibold text-zinc-900">Torkamani</p>
                  <p className="text-xs text-zinc-600">Järn & Smide AB</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-600 max-w-xl">
                Vi skapar professionell järnsmide och metallarbeten i Stockholm med kvalitet och 3D-design, formad efter människors önskan.
              </p>
              <div className="mt-4 text-sm text-zinc-700 space-y-1">
                <p>+46 73 751 70 06</p>
                <p>david.torkamani@tjs-ab.com</p>
                <p>Konsul Johnsons väg 1</p>
                <p>149 45 Nynäshamn, Sweden</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-zinc-900">Snabblänkar</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                <li><a href="#" className="hover:text-zinc-900">Hem</a></li>
                <li><a href="#tjanster" className="hover:text-zinc-900">Tjänster</a></li>
                <li><a href="#galleri" className="hover:text-zinc-900">Galleri</a></li>
                <li><a href="#team" className="hover:text-zinc-900">Arbetare</a></li>
                <li><a href="#kontakt" className="hover:text-zinc-900">Kontakta</a></li>
                <li><a href="/test" className="hover:text-zinc-900">3D FBX Viewer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-zinc-900">Öppettider</h4>
              <ul className="mt-3 space-y-1 text-sm text-zinc-700">
                <li>Måndag - Fredag: 08:00 - 17:00</li>
                <li>Lördag: 09:00 - 15:00</li>
                <li>Söndag: Stängt</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-zinc-200 text-sm text-zinc-600 flex items-center justify-between">
            <p>© 2025 Torkamani Järn & Smide AB. Alla rättigheter förbehållna.</p>
            <a href="#" className="hover:text-zinc-900">Tillbaka till toppen</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
