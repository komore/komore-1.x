import { expectTypeOf } from 'expect-type';
import { type Observable } from '../observable';
import { fromArray } from './from-array';

describe('From array', () => {
  it('todo', () => {
    fromArray([1, 2, 3]);
  });

  it('todo2', () => {
    const $ = fromArray([]);
    expectTypeOf($).toEqualTypeOf<Observable<never>>();
  });
});
