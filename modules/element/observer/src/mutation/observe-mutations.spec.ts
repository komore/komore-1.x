import { feature } from '@komore/testing';

import { observeMutations } from './observe-mutations';

feature('Observe mutations', {
  todo() {
    observeMutations(undefined as unknown as Node);
  },
});
