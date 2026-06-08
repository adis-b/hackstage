import { useEffect, useState } from 'react';

function isScrolledPast(element: HTMLElement, threshold: number): boolean {
  return element.scrollTop > threshold;
}

function isPageScrolled(threshold: number): boolean {
  if (window.scrollY > threshold) {
    return true;
  }
  if (document.documentElement.scrollTop > threshold) {
    return true;
  }
  if (document.body.scrollTop > threshold) {
    return true;
  }
  return false;
}

function isTargetOrAncestorScrolled(
  target: EventTarget | null,
  threshold: number,
): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  let element: HTMLElement | null = target;
  while (element) {
    if (isScrolledPast(element, threshold)) {
      return true;
    }
    element = element.parentElement;
  }
  return false;
}

function isAnyScrollContainerScrolled(threshold: number): boolean {
  if (isPageScrolled(threshold)) {
    return true;
  }

  for (const element of document.querySelectorAll('[data-testid="page-content"], main, article')) {
    if (element instanceof HTMLElement && isScrolledPast(element, threshold)) {
      return true;
    }
  }

  return false;
}

/**
 * Returns true when every known scroll container is at or near the top.
 * Uses capture-phase scroll listeners so Backstage's inner content panes
 * are tracked, not just `window`.
 */
export function useScrollAtTop(threshold = 16): boolean {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const evaluateAll = () => {
      setIsAtTop(!isAnyScrollContainerScrolled(threshold));
    };

    const onScroll = (event: Event) => {
      if (
        isPageScrolled(threshold) ||
        isTargetOrAncestorScrolled(event.target, threshold)
      ) {
        setIsAtTop(false);
        return;
      }
      evaluateAll();
    };

    evaluateAll();

    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });

    const observer = new MutationObserver(evaluateAll);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
      document.removeEventListener('scroll', onScroll, { capture: true });
      observer.disconnect();
    };
  }, [threshold]);

  return isAtTop;
}
