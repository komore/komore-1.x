import { expectTypeOf } from 'expect-type';
import { feature } from '@komore/testing';

import { race } from './race';

feature('Race', () => {
  it('todo', () => {
    race([]);
  });

  it('todo never', () => {
    const $ = race([]);
    expectTypeOf($).toEqualTypeOf<Observable<never>>();
  });
});
