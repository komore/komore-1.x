import { expectTypeOf } from 'expect-type';
import type { TypeNames } from './type-names';

describe('Type names', () => {
  it('cover all possible types', () => {
    expect: 'all possible types to be covered';
    const t = typeof 0;
    type AllTypes = typeof t;
    expectTypeOf<keyof TypeNames>().toEqualTypeOf<AllTypes>();
  });
});
