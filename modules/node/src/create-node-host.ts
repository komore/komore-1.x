import { Subject } from '@komore/reactive';
import { createHost, type HostLifecycleEvent } from '@komore/runtime/host';

import { buildNodeHostOptions } from './build-node-host-options';
import { createNodeHostErrorObservable } from './create-node-host-error-observable';
import { createNodeHostStateObservable } from './create-node-host-state-observable';
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
  options;
  const lifecycle = new Subject<HostLifecycleEvent>();

  const error = createNodeHostErrorObservable();
  const state = createNodeHostStateObservable();

  return createHost({
    error,
    lifecycle,
    state,
  });
}
