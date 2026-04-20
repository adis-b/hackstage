import { makeStyles } from '@material-ui/core';

/**
 * Full logo for the Stadt Wien themed Backstage portal.
 *
 * Combines the Wiener Wappen (stylised white cross on red shield) with a
 * "Wien Developer Portal" wordmark typeset in Wiener Melange.
 */
const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    color: '#ffffff',
  },
  wordmark: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1,
  },
  big: {
    fontFamily:
      '"Wiener Melange", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", sans-serif',
    fontWeight: 800,
    fontSize: 20,
    letterSpacing: 0.2,
    color: '#ffffff',
  },
  small: {
    fontFamily:
      '"Wiener Melange", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", sans-serif',
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: 1.2,
    marginTop: 4,
    color: '#d6d1ca',
    textTransform: 'uppercase',
  },
});

export const LogoFull = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrap} aria-label="Stadt Wien Developer Portal">
      <svg
        width="32"
        height="36"
        viewBox="0 0 32 36"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>Wiener Wappen</title>
        <path d="M16 0L32 6v12c0 8.5-6.2 15.4-16 18C6.2 33.4 0 26.5 0 18V6l16-6z" fill="#ff0000" />
        <path
          d="M15.1 8.5h1.8v5.6h5.6v1.8h-5.6v5.6h-1.8v-5.6H9.5v-1.8h5.6z"
          fill="#ffffff"
        />
      </svg>
      <div className={classes.wordmark}>
        <span className={classes.big}>Wien</span>
        <span className={classes.small}>Developer Portal</span>
      </div>
    </div>
  );
};
