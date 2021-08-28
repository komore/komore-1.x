import { endsWith } from './ends-with';

describe('Ends with', () => {
  it.each([
    ['abcdef', 'def', undefined, true],
    ['abcdef', 'de', undefined, false],
    ['abcdef', 'def', 5, false],
    ['abcdef', 'cde', 5, true]
  ])(
    'creates a function that tests whether a string end with a specific search string',
    (string, searchString, length, expectedResult) => {
      given: 'a string, search string and length';
      when: 'creating a function that tests whether a string ends with the search string';
      const func = endsWith(searchString, length);
      and: 'calling the function';
      const result = func(string);
      expect: 'true to have been returned if the string ends with the search string';
      expect(result).toBe(expectedResult);
    }
  );
});
