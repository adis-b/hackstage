import {
  Link,
  sidebarConfig,
  useSidebarOpenState,
} from '@backstage/core-components';
import { makeStyles } from '@material-ui/core';

import { WienerWappen } from './WienerWappen';
import {
  WienSidebarLogoFull,
  WienSidebarLogoFullProps,
} from './WienSidebarLogoFull';

/**
 * Top-of-sidebar logo. Renders the full "Wappen + Wordmark" version
 * when the sidebar is expanded and just the Wappen icon when the
 * sidebar is collapsed.
 */
const useStyles = makeStyles({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 24,
  },
});

export type WienSidebarLogoProps = WienSidebarLogoFullProps;

export const WienSidebarLogo = (props: WienSidebarLogoProps) => {
  const classes = useStyles();
  const { isOpen } = useSidebarOpenState();
  return (
    <div className={classes.root}>
      <Link
        to="/"
        underline="none"
        className={classes.link}
        aria-label={props.title ?? 'Home'}
      >
        {isOpen ? <WienSidebarLogoFull {...props} /> : <WienerWappen />}
      </Link>
    </div>
  );
};
