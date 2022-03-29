import { expectTypeOf } from 'expect-type';
import { enumToValues } from './enum-to-values';

describe('Enum values', () => {
  it('can list enum values in an enum with no values', () => {
    given: 'an enum with no values';
    enum EnumWithNoValues {
      A,
      B,
      C,
    }
    when: 'getting the list of enum values';
    const values = enumToValues(EnumWithNoValues);
    expect: 'the list to contain all the enum values';
    expect(values).toStrictEqual([0, 1, 2]);
  });

  it('can list enum values in an enum with values', () => {
    given: 'an enum with values';
    enum EnumWithValues {
      A = 123,
      B = '456',
      C = 789,
    }
    when: 'getting the list of enum values';
    const values = enumToValues(EnumWithValues);
    expect: 'the list to contain all the enum values';
    expect(values).toStrictEqual([123, '456', 789]);
  });

  it('properly types enums with string values', () => {
    given: 'an enum with string values';
    enum EnumWithStringValues {
      A = 'A',
      B = 'B',
    }
    when: 'getting the list of enum values';
    const values = enumToValues(EnumWithStringValues);
    expect: 'the list to be an array of strings';
    expectTypeOf(values).toEqualTypeOf<ReadonlyArray<EnumWithStringValues>>();
    // TODO:
    // expectTypeOf(values).toEqualTypeOf<readonly ['A' | 'B']>();
  });

  it('properly types enums with number values', () => {
    given: 'an enum with number values';
    enum EnumWithStringValues {
      A = 123,
      B = 456,
    }
    when: 'getting the list of enum values';
    const values = enumToValues(EnumWithStringValues);
    expect: 'the list to be an array of numbers';
    expectTypeOf(values).toEqualTypeOf<ReadonlyArray<number>>();
    // TODO:
    // expectTypeOf(values).toEqualTypeOf<readonly [123, 456]>();
  });
});
