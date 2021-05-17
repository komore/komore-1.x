import type { Host, HostLifecycleEvent, HostState } from '@komore/runtime';
import { fromEvent, Subject, Subscription } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { NodeHostOptions } from './node-host-options';

/**
 * Creates a Node host
 * @param options Node host options
 * @returns Node host
 */
export function createNodeHost(options?: NodeHostOptions): Host {
  const errors = new Subject<Error>();
  const exitTimeout = options?.exitTimeout ?? 0;
  const lifecycle = new Subject<HostLifecycleEvent>();
  const state = new Subject<HostState>();
  const subscription = new Subscription();

  const beforeExitSubscription = fromEvent<number>(process, 'beforeExit').pipe(
    tapValue(() => state.next('stopping')),
  ).subscribe();

  const exitSubscription = fromEvent<number>(process, 'exit').pipe(
    tapValue(() => state.next('stopped'))
  ).subscribe();

  subscription.add(beforeExitSubscription);
  subscription.add(exitSubscription);

  process.on('uncaughtException', error => errors.next(error));

  return {
    errors,
    lifecycle,
    state
  };
}
