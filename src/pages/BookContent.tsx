import { CornerVineTopLeft, CornerVineBottomRight, DividerVine, SideVineLeft } from '../components/FloralDecor'

// Each post: swap `image` for a saved cover/thumbnail (drop the file in /public
// and point image at "/your-file.jpg"), set `title` to whatever caption/label
// you want under it, and `link` to the actual Instagram post URL.
interface Post {
  image: string
  title: string
  link: string
}

const posts: Post[] = [
  {
    image: {`${import.meta.env.BASE_URL}releaseday.png`},
    title: 'July 8 — Release Day!',
    link: 'https://www.instagram.com/theknightsofkusan/p/DahMaXWACTV/',
  },
  {
    image: {`${import.meta.env.BASE_URL}oneweek.png`},
    title: 'One Week of Publication Wrap-Up',
    link: 'https://www.instagram.com/theknightsofkusan/p/Da5Am45EV-r/',
  },
  {
    image: {`${import.meta.env.BASE_URL}characterquotes.png`},
    title: 'Quotes from Each of my Characters',
    link: 'https://www.instagram.com/theknightsofkusan/p/Dag_pTtAMu6/',
  },
  {
    image: {`${import.meta.env.BASE_URL}characterintros.png`},
    title: 'Introducing my Characters! (Again)',
    link: 'https://www.instagram.com/theknightsofkusan/p/DQl5TM6gLwc/',
  },
  {
    image: {`${import.meta.env.BASE_URL}mybook.png`},
    title: 'If my Book was/were...',
    link: 'https://www.instagram.com/theknightsofkusan/p/DPwiu83gHHL/',
  },
  {
    image: {`${import.meta.env.BASE_URL}fantasybookrecs.png`},
    title: 'My Fantasy Book Recommendations!',
    link: 'https://www.instagram.com/theknightsofkusan/p/DL5bPn6gPgG/',
  },
]

function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      style={{
        background: 'linear-gradient(135deg, rgba(87,85,39,0.2) 0%, rgba(146,142,94,0.18) 100%)',
        border: '1px solid rgba(87,85,39,0.25)',
      }}
    >
      <div className="w-full aspect-[4/5] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ filter: 'sepia(15%) saturate(90%)' }}
        />
      </div>
      <div className="px-4 py-4">
        <p
          className="text-sm tracking-wide"
          style={{ fontFamily: "'Aboreto', cursive", color: 'var(--dark-chocolate)' }}
        >
          {post.title}
        </p>
      </div>
    </a>
  )
}

export default function BookContent() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-44 h-44 pointer-events-none select-none">
        <CornerVineTopLeft className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none select-none" style={{ transform: 'scaleX(-1)' }}>
        <CornerVineTopLeft className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-44 h-44 pointer-events-none select-none">
        <CornerVineBottomRight className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-44 h-44 pointer-events-none select-none" style={{ transform: 'scaleX(-1)' }}>
        <CornerVineBottomRight className="w-full h-full" />
      </div>
      <div className="absolute left-0 top-48 w-14 pointer-events-none select-none opacity-40">
        <SideVineLeft className="w-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-24 pb-28">
        <div className="text-center mb-14">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-3"
            style={{ color: 'var(--soldier-green)', fontFamily: "'Aboreto', cursive" }}
          >
            Go to the "contact" tab to find my Instagram!
          </p>
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "'Aboreto', cursive", color: 'var(--dark-chocolate)' }}
          >
            Book Content
          </h1>
          <p
            className="mt-5 text-lg italic max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Lora', serif", color: 'var(--charcoal)' }}
          >
            Tap on any of these thumbnails to see some of my posts!
          </p>
          <div className="max-w-sm mx-auto mt-8">
            <DividerVine className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
