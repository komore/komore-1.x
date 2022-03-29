import { expectTypeOf } from 'expect-type';
import { type ArrayValueType } from './array-value-type';

describe('Array value type', () => {
  it('maps to the type of an array element', () => {
    given: 'an array';
    const array = [1];
    when: 'using its element type';
    type ElementType = ArrayValueType<typeof array>;
    expect: 'the type to match the array value type';
    expectTypeOf<ElementType>().toEqualTypeOf(array[0]);
  });
});
