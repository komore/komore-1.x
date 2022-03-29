import { expectTypeOf } from 'expect-type';
import { type Observable } from '../observable';
import { concat } from './concat';

describe('Concat', () => {
  it('todo', () => {
    concat([]);
  });

  it('todo', () => {
    const $ = concat([]);
    expectTypeOf($).toEqualTypeOf<Observable<never>>();
  });
});
