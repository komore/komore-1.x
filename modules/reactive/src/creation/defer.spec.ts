import { feature } from '@komore/testing';

import { defer } from './defer';
import { of } from './of';

feature('Defer', {
  TODO() {
    defer(() => {
      return of(42);
    });
  },
});
