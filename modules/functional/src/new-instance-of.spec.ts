import { feature } from '@komore/testing';

import { newInstanceOf } from './new-instance-of';

feature('New instance of', () => {
  newInstanceOf(String);
});
