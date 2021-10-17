import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { HostState } from '../host-state';
import { delayUntilHostIs } from '../host-state-is';

/**
 * Delays subscription to the source observable until the host reaches a running state
 * @template T Value type
 */
export function delayUntilHostIsRunning<T>(): MonoTypeOperatorFunction<T> {
  return delayUntilHostIs(HostState.RUNNING);
}
