import { expectTypeOf } from 'expect-type';
import { objectKeys } from './object-keys';

describe('Object keys', () => {
  it('works', () => {
    given: 'a value';
    const value = {
      a: 'test',
      b: 42
    } as const;
    when: 'getting the property keys from the value';
    const keys = objectKeys(value);
    expect: 'the keys to be an array of property keys';
    expectTypeOf(keys).toEqualTypeOf<ReadonlyArray<keyof typeof value>>();
    and: 'all property keys to be part of the array';
    expect(keys).toEqual(expect.arrayContaining(['a', 'b']));
  });
});
