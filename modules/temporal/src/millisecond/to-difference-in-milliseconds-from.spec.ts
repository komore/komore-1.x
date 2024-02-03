import { feature } from '@komore/testing';

import { toDifferenceInMillisecondsFrom } from './to-difference-in-milliseconds-from';

feature('To difference in milliseconds from', () => {
  it('todo', () => {
    toDifferenceInMillisecondsFrom(Temporal.Now.plainDateTimeISO());
  });
});
