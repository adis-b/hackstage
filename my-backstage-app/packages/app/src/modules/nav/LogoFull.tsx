/**
 * Wien.gv.at sidebar logo — expanded state.
 *
 * Uses the exact Wappen path from https://eurovision.wien.gv.at/assets/shared/img/favicon.svg
 * (the official Stadt Wien favicon, filled #FF0000 per Wien CD Manual:
 *  Wien Rot is exclusively for the Wappen in the logo).
 *
 * Layout: [Wappen]  Stadt Wien
 *                   Entwicklerportal
 */
export const LogoFull = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 230 48"
    height={38}
    role="img"
    aria-label="Stadt Wien – Entwicklerportal"
    style={{ overflow: 'visible' }}
  >
    {/* Wappen — exact path from the official Wien favicon, scaled to 32×38 */}
    <g transform="scale(0.32) translate(0,-1)">
      <path
        fill="#FF0000"
        d="M 43,92.02568 V 67 h 14.42787 14.427871 l -2.466093,9.214987
           C 64.556552,94.274698 54.459097,111.12563 45.781479,115.613
           L 43,117.05136 Z
           M 24.125266,110.25 C 17.442166,103.52566 11.479903,92.137055
           7.558808,78.606178 3.8882734,65.939931 2.8432733,67 19,67
           h 14 v 24.5 c 0,28.41945 0.237247,27.91821 -8.874734,18.75 z
           M 2.5529156,55.2773 c -0.3635841,-0.947485 -0.9311285,-7.697485
           -1.2612097,-15 L 0.6915583,27 H 16.845779 33 V 42 57
           H 18.106989 C 4.935569,57 3.1375607,56.800861 2.5529156,55.2773 Z
           M 64.400215,54.220687 C 62.695333,52.724309 58.764254,49.566088
           55.664483,47.202417 42.710387,37.324519 39.40033,19.697068
           48.807235,10.68468 54.118177,5.5964757 63.179929,5.8200056
           65.397443,11.093918 l 1.271592,3.024227 2.427625,-4.7173356
           C 76.887468,-5.7382049 98.85875,-0.67654899 97.74196,16
           97.1829,24.348355 94.58215,28.461516 81.895373,41.06185
           c -6.402641,6.359018 -11.953686,12.546518 -12.335657,13.75
           -0.883034,2.782196 -1.381121,2.725127 -5.159501,-0.591163 z
           M 69.368385,47.75 C 70.135759,45.9625 74.208309,40.508225
           78.418496,35.629389 87.104501,25.563898 89,22.405889 89,18
           89,5.3879126 74.366352,4.5519176 68.058297,16.803637
           l -1.186075,2.303636 -2.050797,-2.607164
           C 57.931686,7.7412244 48.506342,19.479081 52.083769,32.362954
           54.33581,40.473536 67.471939,52.16753 69.368385,47.75 Z"
      />
    </g>

    {/* "Stadt Wien" — ExtraBold, white */}
    <text
      x="42"
      y="21"
      fontFamily="'WienerMelange','Lucida Sans Unicode',sans-serif"
      fontWeight="800"
      fontSize="16"
      fill="#ffffff"
      letterSpacing="-0.3"
    >
      Stadt Wien
    </text>

    {/* "Entwicklerportal" — Regular, Nebelgrau-light */}
    <text
      x="42"
      y="37"
      fontFamily="'WienerMelange','Lucida Sans Unicode',sans-serif"
      fontWeight="400"
      fontSize="11"
      fill="oklch(86% 0.01 76.41)"
      letterSpacing="0.1"
    >
      Entwicklerportal
    </text>
  </svg>
);
