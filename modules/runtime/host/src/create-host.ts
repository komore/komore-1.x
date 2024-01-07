import { map, pairwise, tapNext } from '@komore/reactive';

import { type Host } from './host';

export function createHost(host: Omit<Host, 'stateTransitions'>): Host {
  const stateTransitions = host.state.pipe(
    tapNext(x => console.log('host state', x)),
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
