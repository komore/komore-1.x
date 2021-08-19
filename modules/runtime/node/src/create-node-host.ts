import { fromEvent, Subject, Subscription } from '@komore/reactive';
import { tapValue } from '@komore/reactive/operators';
import type { HostLifecycleEvent, HostState } from '@komore/runtime';
import { buildNodeHostOptions } from './build-node-host-options';
import type { NodeHost } from './node-host';
import type { NodeHostOptions } from './node-host-options';

/**
 * Creates a Node host
 * @param hostOptions Node host options
 * @returns Node host
 */
export function createNodeHost(hostOptions?: Partial<NodeHostOptions>): NodeHost {
  const errors = new Subject<Error>();
  const options = buildNodeHostOptions(hostOptions);
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
    options,
    state
  };
}
