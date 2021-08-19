import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { filter, skipUntil, take } from '@komore/reactive/operators';
import type { HostState } from '@komore/runtime';
import { observeHostState } from '@komore/runtime';

/**
 * Skips values emitted by the source observable until the host reaches a specific state
 * @param expectedHostState Expected host state
 * @template T Value type
 */
export function skipUntilHostIs<T>(expectedHostState: HostState): MonoTypeOperatorFunction<T> {
  const isMatchingState = observeHostState().pipe(
    filter(state => state === expectedHostState),
    take(1)
  );
  return skipUntil(isMatchingState);
}
