import type { Host, HostLifecycleEvent, HostState } from '@komore/host';
import { fromEvent, Subject, Subscription } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { LocalHostOptions } from './local-host-options';

/**
 * Creates a local host
 * @param localHostOptions Local host options
 * @returns Local host
 */
export function createLocalHost(localHostOptions?: LocalHostOptions): Host {
  const exitTimeout = localHostOptions?.exitTimeout ?? 0;
  const events = new Subject<HostLifecycleEvent>();
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

  return {
    events,
    state
  };
}
