import { feature } from '@komore/testing';

import { expectTypeOf } from 'expect-type';

import { combineLatest } from './combine-latest';

feature('Combine latest', () => {
  it('todo', () => {
    combineLatest([]);
  });
  it('todo never', () => {
    const $ = combineLatest([]);
    expectTypeOf($).toEqualTypeOf<Observable<never>>();
  });
});
