import { renderHook, act } from '@testing-library/react';

import { useCompactAfterDelay } from './useCompactAfterDelay';

describe('useCompactAfterDelay', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('stays expanded until the delay elapses', () => {
    const { result, rerender } = renderHook(
      ({ enabled, delayMs }) => useCompactAfterDelay(enabled, delayMs),
      { initialProps: { enabled: true, delayMs: 4000 } },
    );

    expect(result.current).toBe(false);
    act(() => {
      jest.advanceTimersByTime(3999);
    });
    expect(result.current).toBe(false);

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(result.current).toBe(true);

    rerender({ enabled: false, delayMs: 4000 });
    expect(result.current).toBe(false);
  });

  it('does not compact when delay is zero', () => {
    const { result } = renderHook(() => useCompactAfterDelay(true, 0));

    act(() => {
      jest.advanceTimersByTime(10000);
    });

    expect(result.current).toBe(false);
  });
});
