export default function Services() {
  const services = [
    {
      title: 'Byggnadssmide & Stålkonstruktioner',
      desc:
        'Levererar högkvalitativa stålkonstruktioner, säkerhetsräcken, grindar, metalltrappor och speciallösningar. Våra auktoriserade svetsare utför professionella metallarbeten enligt europeiska standarder för privat- och företagskunder i Stockholm.',
    },
    {
      title: '3D-Design & Projektkonsultation',
      desc:
        'Erbjuder 3D-visualisering och projektmodellering för att säkerställa att kunder kan se det slutliga resultatet innan produktionsstart. Vår kostnadsfria designtjänst inkluderar konsultation och teknisk rådgivning. Designändringar efter godkänd första version medför tilläggskostnader.',
    },
    {
      title: 'Reparation & Underhåll',
      desc:
        'Utför reparationsarbeten, underhåll och renovering av befintliga stålkonstruktioner, säkerhetsräcken och grindar. Våra certifierade tekniker säkerställer förlängd livslängd och optimal funktionalitet för metallinstallationer genom kvalitetssäkrade underhållsprocesser.',
    },
    {
      title: 'Flexibilitet & Kundanpassning',
      desc:
        'Specialiserar oss på skräddarsydda metallarbetslösningar för projekt av alla storlekar. Från mindre reparationsarbeten till industriella installationer anpassar vi våra tjänster efter kundens krav och budgetförutsättningar med professionell standard.',
    },
  ]

  return (
    <section id="tjanster" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900">Våra Tjänster</h2>
        <p className="mt-2 text-zinc-600 max-w-3xl">
          Som specialister inom järnsmide och byggnadssmide erbjuder vi metallarbetslösningar, stålkonstruktioner och auktoriserad svetsning för privat- och företagskunder.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-zinc-200 bg-white/70">
              <h3 className="text-lg font-semibold text-zinc-900">{s.title}</h3>
              <p className="mt-2 text-zinc-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
