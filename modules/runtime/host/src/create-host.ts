import { map, pairwise } from '@komore/reactive';

import { type Host } from './host';

export function createHost(host: Omit<Host, 'stateTransitions'>): Host {
  const stateTransitions = host.state.pipe(
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
