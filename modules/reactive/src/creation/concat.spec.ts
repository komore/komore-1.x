import { expectTypeOf } from 'expect-type';

import { feature } from '@komore/testing';

import { concat } from './concat';

feature('Concat', () => {
  it('todo', () => {
    concat([]);
  });

  it('todo', () => {
    const $ = concat([]);
    expectTypeOf($).toEqualTypeOf<Observable<never>>();
  });
});
