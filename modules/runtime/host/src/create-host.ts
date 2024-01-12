import { map, pairwise, tapNext } from '@komore/reactive';

import { type Host } from './host';

/**
 * Creates a host
 *
 * @param host Host
 * @returns Host
 */
export function createHost(host: Omit<Host, 'stateTransitions'>): Host {
  const stateTransitions = host.state.pipe(
    tapNext(state => console.log(`host state is now "${state}"`)),
    pairwise(),
    map(([previous, current]) => ({
      previous,
      current,
    }))
  );

  return {
    ...host,
    stateTransitions,
  };
}
