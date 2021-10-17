import { HostState } from '@komore/runtime';
import type { MonoTypeOperatorFunction } from '@komore/reactive';
import { skipUntilHostStateIs } from './skip-until-host-state-is';

/**
 * Skips values emitted by the source observable until the host reaches a running state
 * @template T Value type
 */
export function delayUntilHostIsRunning<T>(): MonoTypeOperatorFunction<T> {
  return skipUntilHostStateIs(HostState.RUNNING);
}
