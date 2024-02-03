import { expectTypeOf } from 'expect-type';
import { feature } from '@komore/testing';

import { forkJoin } from './fork-join';

feature('Fork join', () => {
  it('todo array', () => {
    // TODO array
  });

  it('todo', () => {
    forkJoin([]);
  });

  it('todo dictionary', () => {
    // TODO dictionary
  });

  it('returns an observable that never emits, given an empty dictionary', () => {
    // TODO (marble check)
    const $ = forkJoin({});
    expectTypeOf($).toEqualTypeOf<Observable<never>>();
  });
});
