import { useState } from 'react'
import { CornerVineTopLeft, CornerVineBottomRight, DividerVine, SideVineLeft } from '../components/FloralDecor'

export default function Home() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-52 h-52 pointer-events-none select-none">
        <CornerVineTopLeft className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-52 h-52 pointer-events-none select-none"
           style={{ transform: 'scaleX(-1)' }}>
        <CornerVineTopLeft className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-52 h-52 pointer-events-none select-none">
        <CornerVineBottomRight className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-52 h-52 pointer-events-none select-none"
           style={{ transform: 'scaleX(-1)' }}>
        <CornerVineBottomRight className="w-full h-full" />
      </div>

      <div className="absolute left-0 top-1/4 w-16 pointer-events-none select-none opacity-50">
        <SideVineLeft className="w-full" />
      </div>
      <div className="absolute right-0 top-1/4 w-16 pointer-events-none select-none opacity-50"
           style={{ transform: 'scaleX(-1)' }}>
        <SideVineLeft className="w-full" />
      </div>

      {/* Hero image — swap the <img src="..."> below for your own photo/artwork.
          Recommended size: roughly 1600x900px (16:9). The frame stays the same
          rectangular shape and size no matter what image you drop in. */}
      <section className="pt-24">
        <div
          className="relative w-full overflow-hidden shadow-sm"
          style={{
            aspectRatio: '16 / 9',
            borderBottom: '1px solid rgba(146, 142, 94, 0.4)',
            background: 'linear-gradient(135deg, #DDD3C9 0%, #ECC4C3 50%, #928E5E 100%)',
          }}
        >
          <img
            src="`${import.meta.env.BASE_URL}hero-image.png`"
            alt="Sarah A. Turk"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ display: heroImageLoaded ? 'block' : 'none' }}
            onLoad={() => setHeroImageLoaded(true)}
            onError={() => setHeroImageLoaded(false)}
          />
          {!heroImageLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
              <span
                className="text-xs tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Aboreto', cursive", color: 'var(--dark-chocolate)', opacity: 0.6 }}
              >
                Your photo goes here
              </span>
              <span
                className="text-xs italic"
                style={{ fontFamily: "'Lora', serif", color: 'var(--charcoal)', opacity: 0.55 }}
              >
                Replace /public/hero-image.jpg with your own image
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center pt-16 pb-16 px-6 text-center">
        <p
          className="text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          style={{ color: 'var(--soldier-green)', fontFamily: "'Aboreto', cursive" }}
        >
          It's so nice to see you!
        </p>

        <h1
          className="text-6xl md:text-8xl mb-6 leading-none"
          style={{
            fontFamily: "'Aboreto', cursive",
            color: 'var(--dark-chocolate)',
            textShadow: '1px 2px 0px rgba(87,85,39,0.12)',
          }}
        >
          Hi! I'm Sarah.
        </h1>

        <p
          className="text-xl md:text-2xl italic max-w-xl leading-relaxed"
          style={{ color: 'var(--charcoal)', fontFamily: "'Lora', serif" }}
        >
          Teenage Author, Aspiring Engineer, Book Lover... the list goes on!
        </p>

        <div className="w-full max-w-lg mt-10 mb-10">
          <DividerVine className="w-full" />
        </div>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto px-8 pb-28">
        <div
          className="relative rounded-2xl px-10 py-12 shadow-sm"
          style={{
            background: 'linear-gradient(135deg, #66753F 0%, #7C8A4D 50%, #565F32 100%)',
            border: '1px solid rgba(146, 142, 94, 0.4)',
          }}
        >
          {/* Small vine accent */}
          <div className="absolute -top-5 -right-5 w-24 h-24 pointer-events-none select-none opacity-70">
            <CornerVineTopLeft className="w-full h-full" style={{ transform: 'scaleX(-1)' }} />
          </div>

          <h2
            className="text-3xl mb-6"
            style={{ fontFamily: "'Aboreto', cursive", color: '#d4d0be' }}
          >
            About me!
          </h2>

          <div className="space-y-4" style={{ color: 'rgba(212,208,190,0.9)', fontFamily: "'Lora', serif" }}>
            <p className="text-lg leading-relaxed">
              I'm a teenage girl — now teenage <em>author</em> — who has several diverse hobbies and loves to engage in all of them. What I value the most is my Egyptian heritage, my family, my friends, my books, soccer (the <em>real</em> football!), my instruments, a good matcha, and my desire to be a biomedical engineer. 
            </p>
            <p className="text-lg leading-relaxed">
              I engage in robotics, I'm working on my third research project and a patent for my second, and I spend most of my time studying and dreaming of going back to Egypt (and maybe staying there). I hope to pursue a dual career as both a biomedical engineer and author, and I long to study in Boston, Pittsburgh, or London. 
            </p>
            <p className="text-lg leading-relaxed"> 
              I really hope you'll love what I put on paper, but you didn't hear it from me!
            </p>
          </div>

          <div className="mt-8 text-right">
            <span
              className="text-3xl italic"
              style={{ fontFamily: "'EB Garamond', serif", color: 'var(--berry-good)' }}
            >
              — Sarah A. Turk
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
