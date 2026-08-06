export function CornerVineTopLeft({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main stem going right */}
      <path d="M 0 30 C 40 25, 80 35, 120 20 C 160 5, 200 15, 260 10" stroke="#575527" strokeWidth="1.5" fill="none" opacity="0.7"/>
      {/* Main stem going down */}
      <path d="M 30 0 C 25 40, 35 80, 20 120 C 5 160, 15 200, 10 260" stroke="#575527" strokeWidth="1.5" fill="none" opacity="0.7"/>
      {/* Branching vine horizontal */}
      <path d="M 0 30 C 20 50, 50 40, 70 60 C 90 80, 100 70, 130 80" stroke="#575527" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M 30 0 C 50 20, 40 50, 60 70 C 80 90, 70 100, 80 130" stroke="#575527" strokeWidth="1" fill="none" opacity="0.5"/>

      {/* Leaf cluster 1 - right side */}
      <ellipse cx="80" cy="22" rx="18" ry="7" fill="#575527" opacity="0.4" transform="rotate(-15 80 22)"/>
      <ellipse cx="80" cy="22" rx="14" ry="5" fill="#928E5E" opacity="0.5" transform="rotate(-15 80 22)"/>

      {/* Leaf cluster 2 - down side */}
      <ellipse cx="22" cy="80" rx="7" ry="18" fill="#575527" opacity="0.4" transform="rotate(-15 22 80)"/>
      <ellipse cx="22" cy="80" rx="5" ry="14" fill="#928E5E" opacity="0.5" transform="rotate(-15 22 80)"/>

      {/* Small leaves on branch */}
      <ellipse cx="70" cy="60" rx="12" ry="5" fill="#575527" opacity="0.35" transform="rotate(35 70 60)"/>
      <ellipse cx="60" cy="70" rx="5" ry="12" fill="#575527" opacity="0.35" transform="rotate(35 60 70)"/>

      {/* Rose 1 - top area */}
      <circle cx="140" cy="18" r="10" fill="#ECC4C3" opacity="0.8"/>
      <circle cx="140" cy="18" r="7" fill="#B97D7B" opacity="0.7"/>
      <circle cx="140" cy="18" r="4" fill="#ECC4C3" opacity="0.9"/>
      <circle cx="137" cy="15" r="5" fill="#ECC4C3" opacity="0.6"/>
      <circle cx="143" cy="15" r="5" fill="#ECC4C3" opacity="0.6"/>
      <circle cx="140" cy="13" r="4" fill="#ECC4C3" opacity="0.5"/>
      {/* Rose 1 sepals */}
      <ellipse cx="136" cy="24" rx="4" ry="7" fill="#575527" opacity="0.5" transform="rotate(-20 136 24)"/>
      <ellipse cx="144" cy="24" rx="4" ry="7" fill="#575527" opacity="0.5" transform="rotate(20 144 24)"/>

      {/* Rose 2 - left area */}
      <circle cx="18" cy="140" r="10" fill="#ECC4C3" opacity="0.8"/>
      <circle cx="18" cy="140" r="7" fill="#B97D7B" opacity="0.7"/>
      <circle cx="18" cy="140" r="4" fill="#ECC4C3" opacity="0.9"/>
      <circle cx="15" cy="137" r="5" fill="#ECC4C3" opacity="0.6"/>
      <circle cx="15" cy="143" r="5" fill="#ECC4C3" opacity="0.6"/>
      <circle cx="13" cy="140" r="4" fill="#ECC4C3" opacity="0.5"/>
      <ellipse cx="24" cy="136" rx="7" ry="4" fill="#575527" opacity="0.5" transform="rotate(-20 24 136)"/>
      <ellipse cx="24" cy="144" rx="7" ry="4" fill="#575527" opacity="0.5" transform="rotate(20 24 144)"/>

      {/* Small bud on branch */}
      <ellipse cx="115" cy="78" rx="5" ry="7" fill="#ECC4C3" opacity="0.7"/>
      <ellipse cx="78" cy="115" rx="7" ry="5" fill="#ECC4C3" opacity="0.7"/>
      <ellipse cx="115" cy="78" rx="3" ry="2" fill="#575527" opacity="0.5" transform="translate(0 5)"/>

      {/* Tiny dots / berries */}
      <circle cx="55" cy="30" r="2.5" fill="#B97D7B" opacity="0.6"/>
      <circle cx="62" cy="35" r="2" fill="#B97D7B" opacity="0.5"/>
      <circle cx="30" cy="55" r="2.5" fill="#B97D7B" opacity="0.6"/>
      <circle cx="35" cy="62" r="2" fill="#B97D7B" opacity="0.5"/>
    </svg>
  )
}

export function CornerVineBottomRight({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: 'rotate(180deg)' }}
      aria-hidden="true"
    >
      <path d="M 0 30 C 40 25, 80 35, 120 20 C 160 5, 200 15, 260 10" stroke="#575527" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <path d="M 30 0 C 25 40, 35 80, 20 120 C 5 160, 15 200, 10 260" stroke="#575527" strokeWidth="1.5" fill="none" opacity="0.7"/>
      <path d="M 0 30 C 20 50, 50 40, 70 60 C 90 80, 100 70, 130 80" stroke="#575527" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M 30 0 C 50 20, 40 50, 60 70 C 80 90, 70 100, 80 130" stroke="#575527" strokeWidth="1" fill="none" opacity="0.5"/>
      <ellipse cx="80" cy="22" rx="18" ry="7" fill="#575527" opacity="0.4" transform="rotate(-15 80 22)"/>
      <ellipse cx="80" cy="22" rx="14" ry="5" fill="#928E5E" opacity="0.5" transform="rotate(-15 80 22)"/>
      <ellipse cx="22" cy="80" rx="7" ry="18" fill="#575527" opacity="0.4" transform="rotate(-15 22 80)"/>
      <ellipse cx="22" cy="80" rx="5" ry="14" fill="#928E5E" opacity="0.5" transform="rotate(-15 22 80)"/>
      <ellipse cx="70" cy="60" rx="12" ry="5" fill="#575527" opacity="0.35" transform="rotate(35 70 60)"/>
      <ellipse cx="60" cy="70" rx="5" ry="12" fill="#575527" opacity="0.35" transform="rotate(35 60 70)"/>
      <circle cx="140" cy="18" r="10" fill="#ECC4C3" opacity="0.8"/>
      <circle cx="140" cy="18" r="7" fill="#B97D7B" opacity="0.7"/>
      <circle cx="140" cy="18" r="4" fill="#ECC4C3" opacity="0.9"/>
      <circle cx="137" cy="15" r="5" fill="#ECC4C3" opacity="0.6"/>
      <circle cx="143" cy="15" r="5" fill="#ECC4C3" opacity="0.6"/>
      <circle cx="140" cy="13" r="4" fill="#ECC4C3" opacity="0.5"/>
      <ellipse cx="136" cy="24" rx="4" ry="7" fill="#575527" opacity="0.5" transform="rotate(-20 136 24)"/>
      <ellipse cx="144" cy="24" rx="4" ry="7" fill="#575527" opacity="0.5" transform="rotate(20 144 24)"/>
      <circle cx="18" cy="140" r="10" fill="#ECC4C3" opacity="0.8"/>
      <circle cx="18" cy="140" r="7" fill="#B97D7B" opacity="0.7"/>
      <circle cx="18" cy="140" r="4" fill="#ECC4C3" opacity="0.9"/>
      <circle cx="15" cy="137" r="5" fill="#ECC4C3" opacity="0.6"/>
      <circle cx="15" cy="143" r="5" fill="#ECC4C3" opacity="0.6"/>
      <circle cx="13" cy="140" r="4" fill="#ECC4C3" opacity="0.5"/>
      <ellipse cx="24" cy="136" rx="7" ry="4" fill="#575527" opacity="0.5" transform="rotate(-20 24 136)"/>
      <ellipse cx="24" cy="144" rx="7" ry="4" fill="#575527" opacity="0.5" transform="rotate(20 24 144)"/>
      <ellipse cx="115" cy="78" rx="5" ry="7" fill="#ECC4C3" opacity="0.7"/>
      <ellipse cx="78" cy="115" rx="7" ry="5" fill="#ECC4C3" opacity="0.7"/>
      <circle cx="55" cy="30" r="2.5" fill="#B97D7B" opacity="0.6"/>
      <circle cx="62" cy="35" r="2" fill="#B97D7B" opacity="0.5"/>
      <circle cx="30" cy="55" r="2.5" fill="#B97D7B" opacity="0.6"/>
      <circle cx="35" cy="62" r="2" fill="#B97D7B" opacity="0.5"/>
    </svg>
  )
}

export function DividerVine({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M 0 30 C 80 20, 160 40, 300 30 C 440 20, 520 40, 600 30" stroke="#575527" strokeWidth="1.2" fill="none" opacity="0.5"/>
      {/* Left cluster */}
      <ellipse cx="120" cy="24" rx="14" ry="5" fill="#575527" opacity="0.35" transform="rotate(-20 120 24)"/>
      <ellipse cx="130" cy="36" rx="12" ry="5" fill="#928E5E" opacity="0.3" transform="rotate(15 130 36)"/>
      {/* Right cluster */}
      <ellipse cx="480" cy="24" rx="14" ry="5" fill="#575527" opacity="0.35" transform="rotate(20 480 24)"/>
      <ellipse cx="470" cy="36" rx="12" ry="5" fill="#928E5E" opacity="0.3" transform="rotate(-15 470 36)"/>
      {/* Center rose */}
      <circle cx="300" cy="30" r="10" fill="#ECC4C3" opacity="0.8"/>
      <circle cx="300" cy="30" r="7" fill="#B97D7B" opacity="0.7"/>
      <circle cx="300" cy="30" r="4" fill="#ECC4C3" opacity="0.9"/>
      <circle cx="297" cy="27" r="5" fill="#ECC4C3" opacity="0.6"/>
      <circle cx="303" cy="27" r="5" fill="#ECC4C3" opacity="0.6"/>
      <ellipse cx="295" cy="37" rx="4" ry="6" fill="#575527" opacity="0.4" transform="rotate(-20 295 37)"/>
      <ellipse cx="305" cy="37" rx="4" ry="6" fill="#575527" opacity="0.4" transform="rotate(20 305 37)"/>
      {/* Left bud */}
      <circle cx="180" cy="28" r="6" fill="#ECC4C3" opacity="0.7"/>
      <circle cx="180" cy="28" r="4" fill="#B97D7B" opacity="0.6"/>
      <ellipse cx="178" cy="34" rx="3" ry="5" fill="#575527" opacity="0.4" transform="rotate(-15 178 34)"/>
      {/* Right bud */}
      <circle cx="420" cy="28" r="6" fill="#ECC4C3" opacity="0.7"/>
      <circle cx="420" cy="28" r="4" fill="#B97D7B" opacity="0.6"/>
      <ellipse cx="422" cy="34" rx="3" ry="5" fill="#575527" opacity="0.4" transform="rotate(15 422 34)"/>
      {/* Tiny berries */}
      <circle cx="240" cy="25" r="2" fill="#B97D7B" opacity="0.5"/>
      <circle cx="248" cy="30" r="2" fill="#B97D7B" opacity="0.4"/>
      <circle cx="360" cy="25" r="2" fill="#B97D7B" opacity="0.5"/>
      <circle cx="352" cy="30" r="2" fill="#B97D7B" opacity="0.4"/>
    </svg>
  )
}

export function SideVineLeft({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M 40 0 C 30 60, 50 120, 35 180 C 20 240, 50 300, 30 360 C 15 420, 45 460, 40 500" stroke="#575527" strokeWidth="1.5" fill="none" opacity="0.5"/>
      {/* Leaves along the vine */}
      <ellipse cx="55" cy="100" rx="18" ry="7" fill="#575527" opacity="0.35" transform="rotate(-30 55 100)"/>
      <ellipse cx="22" cy="180" rx="16" ry="6" fill="#928E5E" opacity="0.4" transform="rotate(25 22 180)"/>
      <ellipse cx="55" cy="260" rx="18" ry="7" fill="#575527" opacity="0.35" transform="rotate(-20 55 260)"/>
      <ellipse cx="22" cy="340" rx="16" ry="6" fill="#928E5E" opacity="0.4" transform="rotate(30 22 340)"/>
      <ellipse cx="50" cy="420" rx="14" ry="6" fill="#575527" opacity="0.35" transform="rotate(-25 50 420)"/>
      {/* Roses */}
      <circle cx="38" cy="140" r="9" fill="#ECC4C3" opacity="0.8"/>
      <circle cx="38" cy="140" r="6" fill="#B97D7B" opacity="0.7"/>
      <circle cx="38" cy="140" r="3" fill="#ECC4C3" opacity="0.9"/>
      <ellipse cx="34" cy="148" rx="3" ry="6" fill="#575527" opacity="0.4" transform="rotate(-15 34 148)"/>
      <ellipse cx="42" cy="148" rx="3" ry="6" fill="#575527" opacity="0.4" transform="rotate(15 42 148)"/>

      <circle cx="36" cy="310" r="8" fill="#ECC4C3" opacity="0.75"/>
      <circle cx="36" cy="310" r="5" fill="#B97D7B" opacity="0.65"/>
      <circle cx="36" cy="310" r="3" fill="#ECC4C3" opacity="0.85"/>
      <ellipse cx="32" cy="317" rx="3" ry="5" fill="#575527" opacity="0.4" transform="rotate(-15 32 317)"/>
      <ellipse cx="40" cy="317" rx="3" ry="5" fill="#575527" opacity="0.4" transform="rotate(15 40 317)"/>

      <circle cx="40" cy="460" r="7" fill="#ECC4C3" opacity="0.7"/>
      <circle cx="40" cy="460" r="4" fill="#B97D7B" opacity="0.6"/>
      {/* Berries */}
      <circle cx="50" cy="220" r="2.5" fill="#B97D7B" opacity="0.5"/>
      <circle cx="28" cy="230" r="2" fill="#B97D7B" opacity="0.4"/>
      <circle cx="45" cy="380" r="2.5" fill="#B97D7B" opacity="0.5"/>
    </svg>
  )
}
