import { useEffect, useState } from 'react';

function isScrollContainer(element: Element): element is HTMLElement {
  if (!(element instanceof HTMLElement)) {
    return false;
  }
  const style = window.getComputedStyle(element);
  const overflowY = style.overflowY;
  return (
    (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') &&
    element.scrollHeight > element.clientHeight
  );
}

function collectScrollContainers(): HTMLElement[] {
  const containers: HTMLElement[] = [document.documentElement, document.body];
  for (const element of document.querySelectorAll('main, [class*="Backstage"]')) {
    if (isScrollContainer(element)) {
      containers.push(element);
    }
  }
  return containers;
}

/**
 * Returns true when every known scroll container is at or near the top.
 * Uses capture-phase scroll listeners so Backstage's inner content panes
 * are tracked, not just `window`.
 */
export function useScrollAtTop(threshold = 16): boolean {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const evaluate = () => {
      const containers = collectScrollContainers();
      const scrolled = containers.some(
        container => container.scrollTop > threshold,
      );
      const windowScrolled = window.scrollY > threshold;
      setIsAtTop(!scrolled && !windowScrolled);
    };

    evaluate();

    window.addEventListener('scroll', evaluate, { passive: true });
    document.addEventListener('scroll', evaluate, { passive: true, capture: true });

    const observer = new MutationObserver(() => evaluate());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', evaluate);
      document.removeEventListener('scroll', evaluate, { capture: true });
      observer.disconnect();
    };
  }, [threshold]);

  return isAtTop;
}
