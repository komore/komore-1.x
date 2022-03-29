import { parseBooleanCliParameter } from './parse-boolean-cli-parameter';

describe('Parse boolean CLI parameter', () => {
  it.each([
    { value: 'true', expectedResult: true },
    { value: 'tRuE', expectedResult: true },
    { value: 'yes', expectedResult: true },
    { value: 'YeS', expectedResult: true },
    { value: 'false', expectedResult: false },
    { value: 'fAlSe', expectedResult: false },
    { value: 'no', expectedResult: false },
    { value: 'No', expectedResult: false },
  ])('can parse "$value"', ({ value, expectedResult }) => {
    given: 'a value "$value"';

    when: 'parsing the value to a boolean';
    const result = parseBooleanCliParameter(value);

    expect: 'the value to have been parsed to $expectedResult';
    expect(result).toBe(expectedResult);
  });

  it('throw an error when an invalid string is passed', () => {
    given: 'an invalid string';
    const invalidString = 'test';

    expect: 'an error to be thrown when parsing the string';
    expect(() => parseBooleanCliParameter(invalidString)).toThrowError(`invalid boolean value "${invalidString}"`);
  });
});
