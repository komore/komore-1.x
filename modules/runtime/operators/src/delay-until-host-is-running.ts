import { HostState } from '@komore/runtime';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { delayUntilHostIs } from './delay-until-host-is';

/**
 * Delays subscription to the source observable until the host reaches a running state
 * @template T Value type
 */
export function delayUntilHostIsRunning<T>(): MonoTypeOperatorFunction<T> {
  return delayUntilHostIs(HostState.RUNNING);
}
