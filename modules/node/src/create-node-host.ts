import { fromEvent, map, Subject, Subscription, tapNext } from '@komore/reactive';
import { type HostLifecycleEvent, type HostState } from '@komore/runtime';
import { HostError } from '@komore/runtime';
import { buildNodeHostOptions } from './build-node-host-options';
import { type NodeHost } from './node-host';
import { type NodeHostOptions } from './node-host-options';

/**
 * Creates a Node host
 *
 * @param hostOptions Node host options
 * @returns Node host
 */
export function createNodeHost(hostOptions?: Partial<NodeHostOptions>): NodeHost {
  const options = buildNodeHostOptions(hostOptions);
  const lifecycle = new Subject<HostLifecycleEvent>();
  const state = new Subject<HostState>();
  const subscription = new Subscription();

  const beforeExitSubscription = fromEvent<number>(process, 'beforeExit')
    .pipe(tapNext(() => state.next('stopping')))
    .subscribe();

  const exitSubscription = fromEvent<number>(process, 'exit')
    .pipe(tapNext(() => state.next('stopped')))
    .subscribe();

  subscription.add(beforeExitSubscription);
  subscription.add(exitSubscription);

  const errors = fromEvent<Error>(process, 'uncaughtException').pipe(
    tapNext(() => (process.exitCode = 1)),
    map(error => new HostError(error.message, '', 0, 0, error))
  );

  return {
    errors,
    lifecycle,
    options,
    state
  };
}
