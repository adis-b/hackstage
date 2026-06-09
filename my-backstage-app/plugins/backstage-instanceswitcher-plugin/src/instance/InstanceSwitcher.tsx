import { useState, type CSSProperties } from 'react';
import { useTranslationRef } from '@backstage/frontend-plugin-api';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloudIcon from '@material-ui/icons/Cloud';
import StorageIcon from '@material-ui/icons/Storage';

import {
  getVariantDisplayColor,
  type WienInstanceVariant,
} from '@wien/backstage-shared';
import { wienInstanceSwitcherTranslationRef } from '../i18n/wienInstanceSwitcherTranslationRef';
import { useCompactAfterDelay } from './useCompactAfterDelay';
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
  /** Ms at page top before shrinking to the compact circle. 0 disables compact mode. */
  compactDelayMs?: number;
  position?: 'top-center' | 'top-right';
  /** Fixed offset from the top of the viewport in px (default 8). */
  offsetTop?: number;
  /** Fixed offset from the right edge when `position` is `top-right` (default 20). */
  offsetRight?: number;
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    zIndex: theme.zIndex.snackbar + 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(0.25),
    padding: theme.spacing(0.5),
    borderRadius: 999,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[6],
    border: `1px solid ${theme.palette.divider}`,
    cursor: 'pointer',
    transition:
      'opacity 220ms ease, transform 220ms ease, padding 220ms ease, gap 220ms ease',
    userSelect: 'none',
  },
  rootCompact: {
    padding: 0,
    gap: 0,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  topCenter: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
  topCenterHidden: {
    left: '50%',
    transform: 'translateX(-50%) translateY(-120%)',
  },
  topRight: {},
  topRightHidden: {
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
  selection: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(0.75),
    minHeight: 28,
    padding: theme.spacing(0.5, 1.25),
    borderRadius: 999,
    color: '#fff',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 1,
    transition: 'min-width 220ms ease, padding 220ms ease, gap 220ms ease',
  },
  selectionCompact: {
    width: 32,
    height: 32,
    minHeight: 32,
    padding: 0,
    gap: 0,
    borderRadius: '50%',
    boxShadow: theme.shadows[4],
  },
  selectionIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    '& svg': {
      fontSize: 18,
    },
  },
  label: {
    maxWidth: 160,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transition: 'max-width 220ms ease, opacity 180ms ease',
  },
  labelCompact: {
    maxWidth: 0,
    opacity: 0,
  },
  chevron: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    color: theme.palette.text.secondary,
    overflow: 'hidden',
    transition: 'width 220ms ease, opacity 180ms ease',
  },
  chevronCompact: {
    width: 0,
    opacity: 0,
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
  return variant === 'cloud' ? (
    <CloudIcon fontSize="small" />
  ) : (
    <StorageIcon fontSize="small" />
  );
}

/**
 * Floating instance switcher shown near the top of the viewport when the
 * user has scrolled back to the top of the page. Shrinks to a compact
 * variant-coloured circle after `compactDelayMs` to stay out of the way.
 */
export const InstanceSwitcher = ({
  currentInstanceId,
  instances,
  scrollThreshold = 16,
  compactDelayMs = 4000,
  position = 'top-right',
  offsetTop = 8,
  offsetRight = 20,
}: InstanceSwitcherProps) => {
  const classes = useStyles();
  const { t } = useTranslationRef(wienInstanceSwitcherTranslationRef);
  const isAtTop = useScrollAtTop(scrollThreshold);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const current = instances.find(instance => instance.id === currentInstanceId);
  const hasEnoughInstances = Boolean(current) && instances.length >= 2;

  const canCompact = isAtTop && !anchorEl && !isHovered && !isFocused && hasEnoughInstances;
  const isCompact = useCompactAfterDelay(canCompact, compactDelayMs);
  const isExpanded = !isCompact || isHovered || isFocused || Boolean(anchorEl);

  if (!hasEnoughInstances || !current) {
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

  const ariaLabel = isExpanded
    ? t('instanceSwitcher.ariaLabel')
    : t('instanceSwitcher.compactAriaLabel', { label: current.label });

  const positioningStyle: CSSProperties = {
    top: offsetTop,
    ...(position === 'top-right' ? { right: offsetRight } : {}),
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={Boolean(anchorEl)}
        aria-label={ariaLabel}
        className={`${classes.root} ${positionClass} ${
          isAtTop ? classes.visible : `${classes.hidden} ${hiddenPositionClass}`
        } ${isExpanded ? '' : classes.rootCompact}`}
        style={positioningStyle}
        onClick={openMenu}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openMenu(event as unknown as React.MouseEvent<HTMLElement>);
          }
        }}
      >
        <div
          className={`${classes.selection} ${
            isExpanded ? '' : classes.selectionCompact
          }`}
          style={{ backgroundColor: getVariantDisplayColor(current.variant) }}
        >
          <span className={classes.selectionIcon}>{variantIcon(current.variant)}</span>
          <span
            className={`${classes.label} ${isExpanded ? '' : classes.labelCompact}`}
            aria-hidden={!isExpanded}
          >
            {current.label}
          </span>
        </div>
        <span
          className={`${classes.chevron} ${isExpanded ? '' : classes.chevronCompact}`}
          aria-hidden
        >
          <ArrowDropDownIcon fontSize="small" />
        </span>
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
