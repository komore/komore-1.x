import { expectTypeOf } from 'expect-type';
import { type Observable } from '../observable';
import { race } from './race';

describe('Race', () => {
  it('todo', () => {
    race([]);
  });

  it('todo never', () => {
    const $ = race([]);
    expectTypeOf($).toEqualTypeOf<Observable<never>>();
  });
});
