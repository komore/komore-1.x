import { isTypeOf } from './is-type-of';

describe('Is type of', () => {
  it.each([
    ['bigint', 42n, true],
    ['bigint', 'str', false],
    ['bigint', 42, false],
    ['boolean', true, true],
    ['boolean', false, true],
    ['boolean', 1, false],
    ['boolean', 'true', false],
    ['function', () => void 0, true],
    ['function', 'str', false],
    ['function', '42', false],
    ['number', 42, true],
    ['number', 42n, false],
    ['number', 'str', false],
    ['number', true, false],
    ['object', {}, true],
    ['object', [], true],
    ['object', 'str', false],
    ['object', '42', false],
    ['object', true, false],
    ['undefined', undefined, true],
    ['undefined', 'str', false],
    ['undefined', 0, false],
    ['undefined', false, false],
    ['string', 'str', true],
    ['string', 42, false],
    ['string', true, false],
    ['symbol', Symbol('str'), true],
    ['symbol', 'str', false],
    ['symbol', 42, false],
    ['symbol', true, false]
  ] as const)('creates a function that tests whether a value is of a given type', (typeName, value, expectedResult) => {
    given: 'a type name';
    when: 'creating a function that tests whether a value is of the given type';
    const func = isTypeOf(typeName);
    and: 'calling it';
    const result = func(value);
    expect: 'true to have been returned if the value is of the given type';
    expect(result).toBe(expectedResult);
  });
});
