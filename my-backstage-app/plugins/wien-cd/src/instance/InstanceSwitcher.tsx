import { useState } from 'react';
import { useTranslationRef } from '@backstage/frontend-plugin-api';
import Chip from '@material-ui/core/Chip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloudIcon from '@material-ui/icons/Cloud';
import StorageIcon from '@material-ui/icons/Storage';

import { wienCdTranslationRef } from '../i18n/wienCdTranslationRef';
import {
  getVariantDisplayColor,
  type WienInstanceVariant,
} from '../theme/wienTheme';
import { useScrollAtTop } from './useScrollAtTop';
import { navigateToInstanceUrl } from './navigation';

export interface InstanceSwitcherInstance {
  id: string;
  label: string;
  url: string;
  variant: WienInstanceVariant;
}

export interface InstanceSwitcherProps {
  currentInstanceId: string;
  instances: InstanceSwitcherInstance[];
  scrollThreshold?: number;
  position?: 'top-center' | 'top-right';
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: 12,
    zIndex: theme.zIndex.snackbar + 1,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    padding: theme.spacing(0.75, 1.5),
    borderRadius: 999,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[6],
    border: `1px solid ${theme.palette.divider}`,
    cursor: 'pointer',
    transition: 'opacity 220ms ease, transform 220ms ease',
    userSelect: 'none',
  },
  topCenter: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
  topCenterHidden: {
    left: '50%',
    transform: 'translateX(-50%) translateY(-120%)',
  },
  topRight: {
    right: 24,
  },
  topRightHidden: {
    right: 24,
    transform: 'translateY(-120%)',
  },
  visible: {
    opacity: 1,
    pointerEvents: 'auto',
  },
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
  label: {
    fontWeight: 700,
    fontSize: 13,
    marginRight: theme.spacing(0.5),
    color: theme.palette.text.secondary,
  },
  currentChip: {
    fontWeight: 700,
    color: '#fff',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    flexShrink: 0,
  },
}));

function variantIcon(variant: WienInstanceVariant) {
  return variant === 'cloud' ? <CloudIcon fontSize="small" /> : <StorageIcon fontSize="small" />;
}

/**
 * Floating instance switcher shown near the top of the viewport when the
 * user has scrolled back to the top of the page.
 */
export const InstanceSwitcher = ({
  currentInstanceId,
  instances,
  scrollThreshold = 16,
  position = 'top-right',
}: InstanceSwitcherProps) => {
  const classes = useStyles();
  const { t } = useTranslationRef(wienCdTranslationRef);
  const isAtTop = useScrollAtTop(scrollThreshold);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const current = instances.find(instance => instance.id === currentInstanceId);
  if (!current || instances.length < 2) {
    return null;
  }

  const positionClass =
    position === 'top-right' ? classes.topRight : classes.topCenter;
  const hiddenPositionClass =
    position === 'top-right' ? classes.topRightHidden : classes.topCenterHidden;

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => setAnchorEl(null);

  const navigateTo = (url: string) => {
    closeMenu();
    navigateToInstanceUrl(url);
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={Boolean(anchorEl)}
        aria-label={t('instanceSwitcher.ariaLabel')}
        className={`${classes.root} ${positionClass} ${
          isAtTop ? classes.visible : `${classes.hidden} ${hiddenPositionClass}`
        }`}
        onClick={openMenu}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openMenu(event as unknown as React.MouseEvent<HTMLElement>);
          }
        }}
      >
        <span className={classes.label}>{t('instanceSwitcher.label')}</span>
        <Chip
          size="small"
          icon={variantIcon(current.variant)}
          label={current.label}
          className={classes.currentChip}
          style={{ backgroundColor: getVariantDisplayColor(current.variant) }}
        />
        <ArrowDropDownIcon fontSize="small" />
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: position === 'top-right' ? 'right' : 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: position === 'top-right' ? 'right' : 'center',
        }}
      >
        {instances.map(instance => {
          const isCurrent = instance.id === currentInstanceId;
          return (
            <MenuItem
              key={instance.id}
              disabled={isCurrent}
              className={classes.menuItem}
              onClick={() => navigateTo(instance.url)}
            >
              <span
                className={classes.dot}
                style={{ backgroundColor: getVariantDisplayColor(instance.variant) }}
              />
              {variantIcon(instance.variant)}
              {instance.label}
              {isCurrent ? ` (${t('instanceSwitcher.current')})` : ''}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
