import { expectTypeOf } from 'expect-type';
import { type Observable } from '../observable';
import { combineLatest } from './combine-latest';

describe('Combine latest', () => {
  it('todo', () => {
    combineLatest([]);
  });
  it('todo never', () => {
    const $ = combineLatest([]);
    expectTypeOf($).toEqualTypeOf<Observable<never>>();
  });
});
