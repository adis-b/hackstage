/**
 * Wiener Wappen icon — a red shield with the historical white cross,
 * rendered as inline SVG so it inherits `currentColor` where needed and
 * does not require a font-awesome or external icon set.
 *
 * This is a simplified, flat version of the official City of Vienna
 * coat of arms that is suited for small sidebar icons (28-36 px). For
 * print or hero artwork the official SVG from wien.gv.at should be used
 * instead.
 */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: { width: 'auto', height: 32 },
});

export interface WienerWappenProps {
  /** Height in CSS pixels (defaults to 32). */
  size?: number;
  /** Fill colour for the shield (defaults to Wien Rot `#ff0000`). */
  color?: string;
}

export const WienerWappen = (props: WienerWappenProps = {}) => {
  const classes = useStyles();
  const color = props.color ?? '#ff0000';
  const height = props.size ?? 32;
  return (
    <svg
      className={classes.svg}
      style={{ height }}
      viewBox="0 0 32 36"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>Wiener Wappen</title>
      <path
        d="M16 0L32 6v12c0 8.5-6.2 15.4-16 18C6.2 33.4 0 26.5 0 18V6l16-6z"
        fill={color}
      />
      <path
        d="M15.1 8.5h1.8v5.6h5.6v1.8h-5.6v5.6h-1.8v-5.6H9.5v-1.8h5.6z"
        fill="#ffffff"
      />
    </svg>
  );
};
