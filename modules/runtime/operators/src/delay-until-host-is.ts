import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { concat } from '@komore/reactive';
import { filter, ignoreValues, take } from '@komore/reactive/operators';
import type { HostState } from '@komore/runtime';
import { observeHostState } from '@komore/runtime';

/**
 * Delays subscription to the source observable until the host reaches a specific state
 * @param expectedHostState Expected host state
 * @template T Value type
 */
export function delayUntilHostIs<T>(expectedHostState: HostState): MonoTypeOperatorFunction<T> {
  const isMatchingState = observeHostState().pipe(
    filter(state => state === expectedHostState),
    take(1),
    ignoreValues()
  );
  return source => concat([isMatchingState, source]);
}
