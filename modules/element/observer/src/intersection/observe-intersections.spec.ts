import { feature } from '@komore/testing';

import { observeIntersections } from './observe-intersections';

feature('Observe intersections', {
  todo() {
    const target = document.createElement('span');
    observeIntersections(target);
  },
});
