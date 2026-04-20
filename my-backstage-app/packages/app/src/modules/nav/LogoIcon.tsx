/**
 * Wien Wappen icon for the collapsed sidebar state.
 * The red shield with white eagle per Wien CD Manual.
 */
export const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 50"
    height={32}
    role="img"
    aria-label="Stadt Wien"
  >
    {/* Shield */}
    <path
      d="M22 0 L44 0 L44 30 Q44 46 22 50 Q0 46 0 30 L0 0 Z"
      fill="#FF0000"
    />
    {/* Eagle (white) */}
    <g fill="#FFFFFF" transform="translate(8,6)">
      <circle cx="14" cy="6" r="4.5" />
      <polygon points="17.5,4 21,5.5 17.5,7" />
      <ellipse cx="14" cy="16" rx="6" ry="8" />
      <path d="M8,12 Q0,8 2,18 Q6,16 8,20 Z" />
      <path d="M20,12 Q28,8 26,18 Q22,16 20,20 Z" />
      <rect x="11" y="24" width="3" height="5" rx="1" />
      <rect x="15" y="24" width="3" height="5" rx="1" />
      <path d="M9,29 L13,31 L9,31 Z" />
      <path d="M15,29 L19,31 L19,29 Z" />
      <path d="M10,2 L14,0 L18,2 L16,1 L14,3 L12,1 Z" />
    </g>
  </svg>
);
