import { enumEntries } from './enum-entries';

describe('Enum entries', () => {
  it('can list enum values in an enum with no values', () => {
    given: 'an enum with no values';
    enum EnumWithNoValues {
      A,
      B,
      C
    }
    when: 'getting the list of enum entries';
    const keys = enumEntries(EnumWithNoValues);
    expect: 'the list to contain all the enum entries';
    expect(keys).toStrictEqual([
      ['A', 0],
      ['B', 1],
      ['C', 2]
    ]);
  });

  it('can list enum values in an enum with values', () => {
    given: 'an enum with values';
    enum EnumWithValues {
      A = 123,
      B = '456',
      C = 789
    }
    when: 'getting the list of enum entries';
    const entries = enumEntries(EnumWithValues);
    expect: 'the list to contain all the enum entries';
    expect(entries).toStrictEqual([
      ['A', 123],
      ['B', '456'],
      ['C', 789]
    ]);
  });
});
