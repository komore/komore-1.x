import { enumValues } from './enum-values';

describe('Enum values', () => {
  it('can list enum values in an enum with no values', () => {
    given: 'an enum with no values';
    enum EnumWithNoValues {
      A,
      B,
      C
    }
    when: 'getting the list of enum values';
    const values = enumValues(EnumWithNoValues);
    expect: 'the list to contain all the enum values';
    expect(values).toStrictEqual([0, 1, 2]);
  });

  it('can list enum values in an enum with values', () => {
    given: 'an enum with values';
    enum EnumWithValues {
      A = 123,
      B = '456',
      C = 789
    }
    when: 'getting the list of enum values';
    const values = enumValues(EnumWithValues);
    expect: 'the list to contain all the enum values';
    expect(values).toStrictEqual([123, '456', 789]);
  });
});
