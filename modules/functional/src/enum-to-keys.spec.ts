import { enumToKeys } from './enum-to-keys';

describe('Enum keys', () => {
  it('can list enum keys in an enum with no values', () => {
    given: 'an enum with no values';
    enum EnumWithNoValues {
      A,
      B,
      C,
    }
    when: 'getting the list of enum keys';
    const keys = enumToKeys(EnumWithNoValues);
    expect: 'the list to contain all the enum keys';
    expect(keys).toStrictEqual(['A', 'B', 'C']);
  });

  it('can list enum keys in an enum with values', () => {
    given: 'an enum with values';
    enum EnumWithValues {
      A = 123,
      B = '456',
      C = 789,
    }
    when: 'getting the list of enum keys';
    const keys = enumToKeys(EnumWithValues);
    expect: 'the list to contain all the enum keys';
    expect(keys).toStrictEqual(['A', 'B', 'C']);
  });
});
