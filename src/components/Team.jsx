export default function Team() {
  const members = [
    {
      initials: 'DT',
      name: 'David Torkamani',
      roles: ['Svetsare', 'Professionell 3D-Designer', 'Projektledare'],
      email: 'david.torkamani@tjs-ab.com',
    },
    {
      initials: 'AT',
      name: 'Alex Torkamani',
      roles: ['Svetsare', 'Projektledare'],
      email: 'alex.torkamani@tjs-ab.com',
    },
  ]

  return (
    <section id="team" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900">Vårt team</h2>
        <p className="mt-2 text-zinc-600 max-w-3xl">
          Möt våra högt kvalificerade och certifierade specialister inom professionell byggnadssmide, avancerade stålarbeten och auktoriserad svetsning i Stockholm
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {members.map((m) => (
            <div key={m.email} className="p-6 rounded-xl border border-zinc-200 bg-white/70">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-zinc-900 text-white grid place-items-center font-semibold">{m.initials}</div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">{m.name}</h3>
                  <ul className="mt-1 text-sm text-zinc-600 list-disc list-inside">
                    {m.roles.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <a href={`mailto:${m.email}`} className="mt-3 inline-block text-sm text-zinc-700 hover:text-zinc-900">{m.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
