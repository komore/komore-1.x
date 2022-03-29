import { expectTypeOf } from 'expect-type';
import { type Observable } from '../observable';
import { forkJoin } from './fork-join';

describe('Fork join', () => {
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
