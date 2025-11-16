import { Menu, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#tjanster', label: 'Tjänster' },
    { href: '#galleri', label: 'Galleri' },
    { href: '#team', label: 'Arbetare' },
    { href: '#kontakt', label: 'Kontakta' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-600 text-white grid place-items-center font-bold">T</div>
            <div className="leading-tight">
              <p className="font-semibold text-zinc-900">Torkamani</p>
              <p className="text-xs text-zinc-600">Järn & Smide AB</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+46737517006" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-900 text-white text-sm hover:bg-zinc-800">
              <Phone className="h-4 w-4" /> Ring nu
            </a>
            <a href="mailto:david.torkamani@tjs-ab.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-zinc-300 text-sm hover:bg-zinc-50">
              <Mail className="h-4 w-4" /> Skicka e-post
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-zinc-300">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-zinc-700 hover:bg-zinc-100">
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a href="tel:+46737517006" className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-zinc-900 text-white text-sm">
                <Phone className="h-4 w-4" /> Ring
              </a>
              <a href="mailto:david.torkamani@tjs-ab.com" className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-zinc-300 text-sm">
                <Mail className="h-4 w-4" /> E-post
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
