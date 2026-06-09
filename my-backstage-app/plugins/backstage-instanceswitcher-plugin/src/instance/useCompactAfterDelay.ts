import { useEffect, useState } from 'react';

/**
 * After `delayMs` of continuous eligibility, returns true. Resets when
 * `enabled` becomes false (e.g. user scrolls away or pins expanded).
 */
export function useCompactAfterDelay(
  enabled: boolean,
  delayMs: number,
): boolean {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    if (!enabled || delayMs <= 0) {
      setIsCompact(false);
      return undefined;
    }

    setIsCompact(false);
    const timer = window.setTimeout(() => setIsCompact(true), delayMs);
    return () => window.clearTimeout(timer);
  }, [enabled, delayMs]);

  return isCompact;
}
