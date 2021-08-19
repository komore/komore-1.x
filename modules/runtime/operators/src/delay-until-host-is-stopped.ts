import { HostState } from '@komore/runtime';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { delayUntilHostIs } from './delay-until-host-is';

/**
 * Delays subscription to the source observable until the host reaches a stopped state
 * @template T Value type
 */
export function delayUntilHostIsStopped<T>(): MonoTypeOperatorFunction<T> {
  return delayUntilHostIs(HostState.STOPPED);
}
