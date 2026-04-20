/**
 * Full sidebar logo for the Stadt Wien themed Backstage portal.
 * Combines the Wiener Wappen with a two-line wordmark typeset in
 * Wiener Melange.
 */
import { makeStyles } from '@material-ui/core';

import { WienerWappen } from './WienerWappen';
import { wienFontStack } from '../theme/wienTheme';

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
    fontFamily: wienFontStack,
    fontWeight: 800,
    fontSize: 20,
    letterSpacing: 0.2,
    color: '#ffffff',
  },
  small: {
    fontFamily: wienFontStack,
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: 1.2,
    marginTop: 4,
    color: '#d6d1ca',
    textTransform: 'uppercase',
  },
});

export interface WienSidebarLogoFullProps {
  /** Main line of the wordmark (defaults to "Wien"). */
  title?: string;
  /** Secondary line of the wordmark (defaults to "Developer Portal"). */
  subtitle?: string;
}

export const WienSidebarLogoFull = ({
  title = 'Wien',
  subtitle = 'Developer Portal',
}: WienSidebarLogoFullProps) => {
  const classes = useStyles();
  const aria = subtitle ? `${title} ${subtitle}` : title;
  return (
    <div className={classes.wrap} aria-label={aria}>
      <WienerWappen size={36} />
      <div className={classes.wordmark}>
        <span className={classes.big}>{title}</span>
        {subtitle ? <span className={classes.small}>{subtitle}</span> : null}
      </div>
    </div>
  );
};
