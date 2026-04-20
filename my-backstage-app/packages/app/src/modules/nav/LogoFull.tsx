/**
 * Wien.gv.at style logo for the Backstage sidebar (expanded state).
 * Layout mirrors the official Stadt Wien digital wordmark:
 *   [Wappen]  Stadt Wien
 * Colours: white on the dark Fastschwarz sidebar background.
 */
export const LogoFull = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 220 48"
    height={36}
    role="img"
    aria-label="Stadt Wien – Entwicklerportal"
  >
    {/* ── Wien Wappen (simplified red eagle / shield silhouette) ── */}
    {/*
     * The real Wappen is complex heraldry. We use a clean geometric
     * approximation in Wien Rot (#FF0000) per the CD Manual rule that
     * Wien Rot is exclusively for the Wappen in the logo.
     */}
    <g transform="translate(2,2)">
      {/* Shield outline */}
      <path
        d="M22 0 L44 0 L44 28 Q44 44 22 48 Q0 44 0 28 L0 0 Z"
        fill="#FF0000"
      />
      {/* White eagle body (simplified) */}
      <g fill="#FFFFFF" transform="translate(8,6)">
        {/* Eagle head */}
        <circle cx="14" cy="6" r="4.5" />
        {/* Beak */}
        <polygon points="17.5,4 21,5.5 17.5,7" />
        {/* Body */}
        <ellipse cx="14" cy="16" rx="6" ry="8" />
        {/* Left wing */}
        <path d="M8,12 Q0,8 2,18 Q6,16 8,20 Z" />
        {/* Right wing */}
        <path d="M20,12 Q28,8 26,18 Q22,16 20,20 Z" />
        {/* Legs */}
        <rect x="11" y="24" width="3" height="5" rx="1" />
        <rect x="15" y="24" width="3" height="5" rx="1" />
        {/* Left foot */}
        <path d="M9,29 L11,29 L11,31 L9,31 Z" />
        <path d="M11,29 L13,29 L13,31 L11,31 Z" />
        {/* Right foot */}
        <path d="M15,29 L17,29 L17,31 L15,31 Z" />
        <path d="M17,29 L19,29 L19,31 L17,31 Z" />
        {/* Crown */}
        <path d="M10,2 L14,0 L18,2 L16,1 L14,3 L12,1 Z" />
      </g>
    </g>

    {/* ── "Stadt Wien" wordmark ── */}
    {/*
     * Rendered as SVG text so Wiener Melange (loaded via CSS) is used
     * once the font loads; falls back to system sans-serif.
     */}
    <text
      x="54"
      y="20"
      fontFamily="'WienerMelange','Lucida Sans Unicode',sans-serif"
      fontWeight="800"
      fontSize="15"
      fill="#FFFFFF"
      letterSpacing="-0.3"
    >
      Stadt Wien
    </text>
    <text
      x="54"
      y="38"
      fontFamily="'WienerMelange','Lucida Sans Unicode',sans-serif"
      fontWeight="400"
      fontSize="11"
      fill="#c8d8e4"
      letterSpacing="0"
    >
      Entwicklerportal
    </text>
  </svg>
);
