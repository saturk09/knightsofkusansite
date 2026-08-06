import { CornerVineTopLeft, CornerVineBottomRight, DividerVine } from '../components/FloralDecor'

function BookCoverMockup() {
  return (
    <svg
      viewBox="0 0 240 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="The Knights of Kusan book cover"
    >
      {/* Green background */}
      <rect width="240" height="360" fill="#5a7a5a"/>
      <rect width="240" height="360" fill="url(#greenGrad)" opacity="0.8"/>
      <defs>
        <linearGradient id="greenGrad" x1="0" y1="0" x2="240" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6a8a62"/>
          <stop offset="50%" stopColor="#527052"/>
          <stop offset="100%" stopColor="#3d5c3d"/>
        </linearGradient>
      </defs>

      {/* Subtle texture lines */}
      <line x1="0" y1="60" x2="240" y2="60" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
      <line x1="0" y1="120" x2="240" y2="120" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
      <line x1="0" y1="180" x2="240" y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
      <line x1="0" y1="240" x2="240" y2="240" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
      <line x1="0" y1="300" x2="240" y2="300" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>

      {/* Border frame */}
      <rect x="8" y="8" width="224" height="344" rx="2" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none"/>
      <rect x="12" y="12" width="216" height="336" rx="1" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" fill="none"/>

      {/* Title text at top */}
      <text x="120" y="44" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold" fontSize="22" fill="rgba(255,255,255,0.92)" letterSpacing="1">The Knights</text>
      <text x="120" y="66" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold" fontSize="22" fill="rgba(255,255,255,0.92)" letterSpacing="1">of Kusan</text>

      {/* Decorative line under title */}
      <line x1="60" y1="74" x2="180" y2="74" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>

      {/* Branch / twig */}
      <path d="M 80 270 Q 120 255 160 265 Q 180 268 195 260" stroke="rgba(60,40,20,0.7)" strokeWidth="2" fill="none"/>
      <path d="M 95 270 Q 100 260 105 255" stroke="rgba(60,40,20,0.5)" strokeWidth="1.2" fill="none"/>
      <path d="M 140 265 Q 143 255 148 250" stroke="rgba(60,40,20,0.5)" strokeWidth="1.2" fill="none"/>

      {/* Pink blossoms on the branch */}
      <circle cx="105" cy="253" r="6" fill="#d4a0a0" opacity="0.85"/>
      <circle cx="105" cy="253" r="3.5" fill="#e8c0c0" opacity="0.9"/>
      <circle cx="99" cy="257" r="5" fill="#d4a0a0" opacity="0.75"/>
      <circle cx="113" cy="250" r="4.5" fill="#d4a0a0" opacity="0.8"/>

      <circle cx="148" cy="248" r="5.5" fill="#d4a0a0" opacity="0.85"/>
      <circle cx="148" cy="248" r="3" fill="#e8c0c0" opacity="0.9"/>
      <circle cx="142" cy="252" r="4.5" fill="#d4a0a0" opacity="0.75"/>
      <circle cx="155" cy="245" r="4" fill="#d4a0a0" opacity="0.8"/>

      {/* Small buds */}
      <ellipse cx="125" cy="262" rx="3" ry="4.5" fill="#d4a0a0" opacity="0.7" transform="rotate(-10 125 262)"/>
      <ellipse cx="170" cy="258" rx="2.5" ry="4" fill="#d4a0a0" opacity="0.65" transform="rotate(5 170 258)"/>

      {/* Crane / heron bird — white crane in flight */}
      {/* Body */}
      <ellipse cx="118" cy="175" rx="38" ry="14" fill="rgba(240,240,230,0.92)" transform="rotate(-12 118 175)"/>
      {/* Neck */}
      <path d="M 145 168 Q 155 150 150 130 Q 148 120 153 112" stroke="rgba(230,230,220,0.9)" strokeWidth="8" fill="none" strokeLinecap="round"/>
      {/* Head */}
      <ellipse cx="155" cy="108" rx="10" ry="8" fill="rgba(235,235,225,0.92)" transform="rotate(-20 155 108)"/>
      {/* Beak */}
      <path d="M 162 103 L 178 98" stroke="rgba(80,60,20,0.8)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Eye */}
      <circle cx="160" cy="105" r="2" fill="rgba(30,20,10,0.8)"/>
      {/* Red cap mark */}
      <ellipse cx="157" cy="103" rx="5" ry="3" fill="rgba(160,30,30,0.7)" transform="rotate(-20 157 103)"/>
      {/* Left wing extended */}
      <path d="M 90 172 Q 55 155 30 170 Q 50 160 70 175" fill="rgba(235,235,225,0.88)"/>
      <path d="M 90 172 Q 55 145 25 148" stroke="rgba(220,220,210,0.6)" strokeWidth="1" fill="none"/>
      {/* Wing tips / feathers */}
      <path d="M 30 170 Q 18 180 20 190" stroke="rgba(200,200,190,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M 26 160 Q 14 165 16 175" stroke="rgba(200,200,190,0.6)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Right wing back */}
      <path d="M 148 182 Q 175 195 195 185" fill="rgba(210,210,200,0.75)"/>
      {/* Tail feathers */}
      <path d="M 82 183 Q 68 198 72 210" stroke="rgba(215,215,205,0.7)" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M 88 186 Q 76 202 80 215" stroke="rgba(215,215,205,0.6)" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Legs trailing */}
      <path d="M 108 188 Q 100 215 98 230" stroke="rgba(140,100,60,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M 115 188 Q 108 215 106 230" stroke="rgba(140,100,60,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Author name bottom */}
      <line x1="60" y1="310" x2="180" y2="310" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
      <text x="120" y="328" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="bold" fontSize="14" fill="rgba(255,255,255,0.88)" letterSpacing="2">SARAH TURK</text>

      {/* Subtle vine at bottom corners */}
      <path d="M 20 345 Q 30 330 45 338" stroke="rgba(60,40,20,0.4)" strokeWidth="1" fill="none"/>
      <circle cx="46" cy="337" r="3" fill="rgba(212,160,160,0.5)"/>
      <path d="M 220 345 Q 210 330 195 338" stroke="rgba(60,40,20,0.4)" strokeWidth="1" fill="none"/>
      <circle cx="194" cy="337" r="3" fill="rgba(212,160,160,0.5)"/>
    </svg>
  )
}

export default function Book() {
  const amazonUrl = 'https://www.amazon.com/Knights-Kusan-Sarah-Turk/dp/B0H6L2H65S'

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

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-28">
        {/* Page title */}
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--soldier-green)', fontFamily: "'Aboreto', cursive" }}
          >
            My Book(s)!
          </p>
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "'Aboreto', cursive", color: 'var(--dark-chocolate)' }}
          >
            The Knights of Kusan
          </h1>
          <div className="max-w-sm mx-auto mt-6">
            <DividerVine className="w-full" />
          </div>
        </div>

        {/* Book showcase */}
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Book cover */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div
              className="rounded-lg overflow-hidden shadow-2xl"
              style={{
                width: '15rem',
                height: '22.5rem',
                border: '2px solid rgba(87,85,39,0.35)',
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}book-cover.png`}
                alt="The Knights of Kusan book cover"
                className="w-full h-full object-cover"
              />
          </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#FF9900" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <span className="ml-1 text-xs" style={{ color: 'var(--meadow-mauve)', fontFamily: "'Lora', serif" }}>
                5.0 · 2 reviews
              </span>
            </div>

            {/* Amazon button */}
            <div className="mt-6">
              <a
                href={amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  fontFamily: "'Aboreto', cursive",
                  background: 'var(--soldier-green)',
                  color: '#d4d0be',
                  border: '1px solid rgba(87,85,39,0.5)',
                }}
              >
                Find on Amazon
              </a>
            </div>
          </div>

          {/* Book details */}
          <div className="flex-1">
            <div
              className="rounded-2xl px-8 py-10"
              style={{
                background: 'linear-gradient(135deg, rgba(87,85,39,0.18) 0%, rgba(146,142,94,0.15) 100%)',
                border: '1px solid rgba(87,85,39,0.22)',
              }}
            >
              <div className="flex flex-wrap gap-2 mb-5">
                {['Book 1 of 3', 'Epic Fantasy', 'YA', '444 pages'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs tracking-widest uppercase"
                    style={{
                      background: 'rgba(87,85,39,0.15)',
                      color: 'var(--soldier-green)',
                      fontFamily: "'Aboreto', cursive",
                      border: '1px solid rgba(87,85,39,0.22)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                className="text-lg tracking-widest uppercase mb-5"
                style={{ fontFamily: "'Aboreto', cursive", color: 'var(--soldier-green)' }}
              >
                About the Book
              </h3>
              <div className="space-y-4" style={{ color: 'var(--dark-chocolate)', fontFamily: "'Lora', serif" }}>
                <p className="text-lg leading-relaxed font-medium">
                  Three years ago, Sabina Elsher lost everything… and she <em>still</em> hasn't recovered.
                </p>
                <p className="text-lg leading-relaxed">
                  As commander of West Kusan's army, Sabina watched the city of Hanrich fall under her command — and she's never forgiven herself for it. Her title and her confidence perished alongside the city.
                </p>
                <p className="text-lg leading-relaxed">
                  When word spreads that East Kusan, Hanrich's destroyer, is preparing to strike again, Sabina is summoned back to the castle. The queen needs every capable knight available, so Sabina is pushed back into a life she had been praying to leave behind for good.
                </p>
                <p className="text-lg leading-relaxed">
                  Then, a new threat arises: there's a spy inside the walls of West Kusan's castle.
                </p>
                <p className="text-lg leading-relaxed font-medium">
                  In this trilogy filled with war, betrayals, uprisings, and resilience, <em>The Knights of Kusan</em> follows a former commander doing what it takes to save her kingdom, when both the kingdom and her past are against her.
                </p>
              </div>
            </div>

            {/* Pull quote */}
            <div
              className="mt-6 px-8 py-6 rounded-xl italic text-lg leading-relaxed relative"
              style={{
                fontFamily: "'EB Garamond', serif",
                color: 'var(--charcoal)',
                background: 'rgba(87,85,39,0.1)',
                borderLeft: '3px solid var(--soldier-green)',
              }}
            >
              <span
                className="absolute -top-4 left-6 text-5xl leading-none"
                style={{ color: 'var(--soldier-green)', fontFamily: "'EB Garamond', serif" }}
              >
                "
              </span>
              We don't fight because we hate, we fight because we love.
              <span
                className="block mt-3 text-sm not-italic tracking-widest uppercase"
                style={{ fontFamily: "'Aboreto', cursive", color: 'var(--meadow-mauve)' }}
              >
                — The Knights of Kusan
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
