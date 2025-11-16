import { useState } from 'react'

const IMAGES = Array.from({ length: 12 }).map((_, i) => ({
  src: `/gallery/${(i % 6) + 1}.jpg`,
  title: ['Grind', 'Räcke', 'Staket', 'Övriga'][i % 4],
  location: ['Enskede', 'Värmdö', 'Stockholm', 'Nacka'][i % 4],
}))

export default function Gallery() {
  const [filter, setFilter] = useState('Alla')

  const counts = {
    Alla: 86,
    Grind: 7,
    Räcke: 46,
    Staket: 6,
    Övriga: 27,
  }

  const filtered = filter === 'Alla' ? IMAGES : IMAGES.filter((img) => img.title === filter)

  return (
    <section id="galleri" className="py-16 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900">Vårt galleri</h2>
            <p className="mt-2 text-zinc-600">Utforska våra finaste järn- och metallarbetsprojekt</p>
          </div>
          <div className="flex items-center gap-2">
            {Object.keys(counts).map((k) => (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className={`px-3 py-1.5 rounded-full text-sm border ${
                  filter === k ? 'bg-zinc-900 text-white border-zinc-900' : 'border-zinc-300 hover:bg-white'
                }`}
              >
                {k} ({counts[k]})
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
              <img src={img.src} alt={`${img.title} - ${img.location}`} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
                <p className="text-sm opacity-90">{img.title} - {img.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-zinc-600">+79 more images</div>
      </div>
    </section>
  )
}
