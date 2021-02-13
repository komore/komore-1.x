import type { Host, HostLifecycleEvent, HostState } from '@komore/host';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Creates a local host
 * @param localHostOptions Local host options
 * @returns Local host
 */
export function createLocalHost(localHostOptions?: LocalHostOptions): Host {
  const events = new Subject<HostLifecycleEvent>();
  const state = new Subject<HostState>();
  const subscription = new Subscription();

  const beforeExitSubscription = fromEvent<number>(process, 'beforeExit').pipe(
    tap(() => state.next('stopping')),
  ).subscribe();

  const exitSubscription = fromEvent<number>(process, 'exit').pipe(
    tap(() => state.next('stopped'))
  ).subscribe();

  subscription.add(beforeExitSubscription);
  subscription.add(exitSubscription);

  return {
    events,
    state
  };
}
