import { useState } from 'react'
import Home from './pages/Home'
import Book from './pages/Book'
import Recipes from './pages/Recipes'
import BookContent from './pages/BookContent'
import Contact from './pages/Contact'
import { DividerVine } from './components/FloralDecor'

type Page = 'home' | 'book' | 'bookContent' | 'recipes' | 'contact'

const navItems: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'book', label: 'Book(s)' },
  { id: 'bookContent', label: 'Book Content' },
  { id: 'recipes', label: 'Recipes' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (id: Page) => {
    setPage(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ background: '#d4d0be', minHeight: '100vh' }}>
      {/* Navigation — soldier green bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4"
        style={{
          background: 'rgba(92, 111, 76, 0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(163, 173, 128, 0.35)',
        }}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('home')}
            className="transition-opacity hover:opacity-70"
            style={{
              fontFamily: "'Aboreto', cursive",
              fontSize: '1.1rem',
              color: '#d4d0be',
              letterSpacing: '0.12em',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Sarah A. Turk
          </button>

          {/* Desktop nav — hidden on small screens */}
          <ul className="hidden md:flex items-center gap-2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navItems.map((item, i) => (
              <li key={item.id} className="flex items-center gap-2">
                {i > 0 && (
                  <span
                    className="text-xs"
                    style={{ color: 'var(--meadow-mauve)', opacity: 0.6, userSelect: 'none' }}
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                )}
                <button
                  onClick={() => navigate(item.id)}
                  className="px-3 py-1 text-sm tracking-widest uppercase transition-all duration-200"
                  style={{
                    fontFamily: "'Aboreto', cursive",
                    color: page === item.id ? '#d4d0be' : 'rgba(212,208,190,0.55)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: page === item.id ? 'underline' : 'none',
                    textDecorationColor: 'var(--meadow-mauve)',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger button — shown only on small screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center gap-1.5"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
            aria-label="Toggle menu"
          >
            <span style={{ width: '22px', height: '2px', background: '#d4d0be', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
            <span style={{ width: '22px', height: '2px', background: '#d4d0be', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ width: '22px', height: '2px', background: '#d4d0be', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <ul
            className="md:hidden flex flex-col items-center mt-4 pb-2"
            style={{ listStyle: 'none', margin: 0, padding: 0, gap: '4px' }}
          >
            {navItems.map((item) => (
              <li key={item.id} style={{ width: '100%' }}>
                <button
                  onClick={() => navigate(item.id)}
                  className="w-full py-2 text-sm tracking-widest uppercase transition-all duration-200"
                  style={{
                    fontFamily: "'Aboreto', cursive",
                    color: page === item.id ? '#d4d0be' : 'rgba(212,208,190,0.55)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: page === item.id ? 'underline' : 'none',
                    textDecorationColor: 'var(--meadow-mauve)',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <main className="pt-16">
      {page === 'home' && <Home />}
      {page === 'book' && <Book />}
      {page === 'bookContent' && <BookContent />}
      {page === 'recipes' && <Recipes />}
      {page === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer
        className="text-center py-10 px-6"
        style={{
          borderTop: '1px solid rgba(87,85,39,0.25)',
          background: 'rgba(87, 85, 39, 0.12)',
        }}
      >
        <div className="max-w-xs mx-auto mb-6">
          <DividerVine className="w-full opacity-60" />
        </div>
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Aboreto', cursive", color: 'var(--soldier-green)' }}
        >
          © {new Date().getFullYear()} Sarah A. Turk · All rights reserved
        </p>
        <p
          className="mt-2 text-xs italic"
          style={{ fontFamily: "'Lora', serif", color: 'var(--meadow-mauve)', opacity: 0.8 }}
        >
          We don't fight because we hate, we fight because we love.
        </p>
      </footer>
    </div>
  )
}
