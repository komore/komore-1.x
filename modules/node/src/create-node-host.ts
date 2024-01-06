import { fromEvent, map, Subject, Subscription, tapNext } from '@komore/reactive';
import { createHost, runtimeHostError, type HostLifecycleEvent, type HostState } from '@komore/runtime/host';

import { buildNodeHostOptions } from './build-node-host-options';
import { type NodeHost } from './node-host';
import { type NodeHostOptions } from './node-host-options';
import { createNodeHostStateObservable } from './create-node-host-state-observable';

/**
 * Creates a Node host
 *
 * @param hostOptions Node host options
 * @returns Node host
 */
export function createNodeHost(hostOptions?: Partial<NodeHostOptions>): NodeHost {
  const options = buildNodeHostOptions(hostOptions);
  options;
  const lifecycle = new Subject<HostLifecycleEvent>();

  const state = createNodeHostStateObservable();

  const error = fromEvent(process, 'uncaughtException').pipe(
    tapNext(() => (process.exitCode = 1)),
    map(error => error as Error),
    map(thrownError =>
      runtimeHostError.unhandled({
        message: thrownError.message,
        source: { column: 0, line: 0, name: '?' },
        thrownError,
      })
    )
  );

  return createHost({
    error,
    lifecycle,
    state,
  });
}
