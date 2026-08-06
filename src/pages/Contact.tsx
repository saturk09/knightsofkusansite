import type { CSSProperties } from 'react'
import { CornerVineTopLeft, CornerVineBottomRight, DividerVine, SideVineLeft } from '../components/FloralDecor'

// Platform names are rendered as regular DOM text (see PlatformName below)
// using the site's own typeface, so all three cards read consistently
// instead of each pulling in a different SVG-embedded font.
function EmailLogo({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-label="Email">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </svg>
  )
}
function PlatformName({ children, style }: { children: string; style?: CSSProperties }) {
  return (
    <span
      className="text-xl tracking-wide"
      style={{ fontFamily: "'Aboreto', cursive", fontWeight: 400, ...style }}
    >
      {children}
    </span>
  )
}

function InstagramLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Instagram">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export default function Contact() {
  const links = {
    amazon: 'https://www.amazon.com',
    instagram: 'https://www.instagram.com',
    goodreads: 'https://www.goodreads.com',
    email: 'mailto:theknightsofkusan@gmail.com',
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none select-none">
        <CornerVineTopLeft className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none select-none" style={{ transform: 'scaleX(-1)' }}>
        <CornerVineTopLeft className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none select-none">
        <CornerVineBottomRight className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none select-none" style={{ transform: 'scaleX(-1)' }}>
        <CornerVineBottomRight className="w-full h-full" />
      </div>
      <div className="absolute left-0 top-1/3 w-16 pointer-events-none select-none opacity-50">
        <SideVineLeft className="w-full" />
      </div>
      <div className="absolute right-0 top-1/3 w-16 pointer-events-none select-none opacity-50" style={{ transform: 'scaleX(-1)' }}>
        <SideVineLeft className="w-full" />
      </div>

      <div className="max-w-2xl mx-auto px-6 pt-24 pb-28 flex flex-col items-center text-center">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-3"
          style={{ color: 'var(--soldier-green)', fontFamily: "'Aboreto', cursive" }}
        >
          My platforms!
        </p>
        <h1
          className="text-5xl md:text-6xl"
          style={{ fontFamily: "'Aboreto', cursive", color: 'var(--dark-chocolate)' }}
        >
          Contact
        </h1>
        <div className="max-w-xs w-full mt-6 mb-10">
          <DividerVine className="w-full" />
        </div>

        <p
          className="text-lg italic leading-relaxed mb-14 max-w-md"
          style={{ fontFamily: "'Lora', serif", color: 'var(--charcoal)' }}
        >
          Buy my book, check out my content, and take a look at my author Goodreads page!
          Also, feel free to drop a review...
        </p>

        <div className="w-full flex flex-col gap-5">
          {/* Amazon */}
          <a
            href={links.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #251914 0%, #4A4A4A 100%)',
              color: 'var(--warm-fog)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--warm-fog)' }}
            >
              {/* Amazon "a" with smile — recolored to the site palette */}
              <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="19" cy="19" r="19" fill="var(--warm-fog)" />
                <text x="5" y="26" fontFamily="Georgia, serif" fontWeight="bold" fontSize="20" fill="var(--dark-chocolate)">a</text>
                <path d="M7 30 Q19 35 31 30" stroke="var(--blossom)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M28.5 27.5 L31 30 L28 32" fill="var(--blossom)" stroke="var(--blossom)" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="text-left flex-1">
              <p
                className="text-xs tracking-[0.2em] uppercase mb-1 opacity-70"
                style={{ fontFamily: "'Aboreto', cursive" }}
              >
                Buy the book!
              </p>
              <PlatformName style={{ color: '#ffffff' }}>Amazon</PlatformName>
            </div>
            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #B97D7B 0%, #ECC4C3 100%)',
              color: 'var(--dark-chocolate)',
              border: '1px solid rgba(180, 125, 123, 0.3)',
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, var(--blossom) 0%, var(--soldier-green) 100%)',
              }}
            >
              <InstagramLogo className="w-7 h-7 text-white" />
            </div>
            <div className="text-left flex-1">
              <p
                className="text-xs tracking-[0.2em] uppercase mb-1 opacity-60"
                style={{ fontFamily: "'Aboreto', cursive" }}
              >
                Follow for bookish content!
              </p>
              <PlatformName style={{ color: 'var(--dark-chocolate)' }}>Instagram</PlatformName>
            </div>
            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Goodreads */}
          <a
            href={links.goodreads}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #575527 0%, #928E5E 100%)',
              color: 'var(--warm-fog)',
              border: '1px solid rgba(87,85,39,0.4)',
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--warm-fog)' }}
            >
              {/* Goodreads "g" mark — recolored to the site palette */}
              <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="19" cy="19" r="19" fill="var(--warm-fog)" />
                <text x="7" y="28" fontFamily="Georgia, serif" fontWeight="bold" fontSize="24" fill="var(--soldier-green)">g</text>
              </svg>
            </div>
            <div className="text-left flex-1">
              <p
                className="text-xs tracking-[0.2em] uppercase mb-1 opacity-70"
                style={{ fontFamily: "'Aboreto', cursive" }}
              >
                See what I'm reading!
              </p>
              <PlatformName style={{ color: 'var(--warm-fog)' }}>Goodreads</PlatformName>
            </div>
            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Email */}
          <a
            href={links.email}
            className="group flex items-center gap-5 px-8 py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, var(--warm-fog) 0%, #F5F1E8 100%)',
              color: 'var(--dark-chocolate)',
              border: '1px solid rgba(87,85,39,0.25)',
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#F5F1E8', border: '1px solid rgba(87,85,39,0.2)' }}
            >
              <EmailLogo className="w-7 h-7" style={{ color: 'var(--meadow-mauve)' }} />
            </div>
            <div className="text-left flex-1">
              <p
                className="text-xs tracking-[0.2em] uppercase mb-1 opacity-70"
                style={{ fontFamily: "'Aboreto', cursive" }}
              >
                Just say hi!
              </p>
              <PlatformName style={{ color: 'var(--dark-chocolate)' }}>Email</PlatformName>
            </div>
            <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div >

        {/* Closing note */}
        < div className="mt-14 max-w-sm" >
          <DividerVine className="w-full mb-8" />
          <p
            className="text-base italic leading-relaxed"
            style={{ fontFamily: "'EB Garamond', serif", color: 'var(--charcoal)' }}
          >
            Thank you so much — you guys are amazing!
          </p>
          <p
            className="mt-3 text-2xl italic"
            style={{ fontFamily: "'EB Garamond', serif", color: 'var(--soldier-green)' }}
          >
            — Sarah
          </p>
        </div >
      </div >
    </div >
  )
}
