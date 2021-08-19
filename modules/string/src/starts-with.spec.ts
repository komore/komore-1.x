import { startsWith } from './starts-with';

describe('Starts with', () => {
  it.each([
    ['abcdef', 'abc', 0, true],
    ['abcdef', 'bc', 0, false],
    ['abcdef', 'abc', 1, false],
    ['abcdef', 'bcd', 1, true]
  ])(
    'creates a function that tests whether a string starts with a specific search string',
    (string, searchString, startPosition, expectedResult) => {
      given: 'a string, search string and start position';
      when: 'creating a function that tests whether a string starts with the search string at the start position';
      const func = startsWith(searchString, startPosition);
      and: 'calling the function';
      const result = func(string);
      expect: 'true to have been returned if the string starts with the search string at the start position';
      expect(result).toBe(expectedResult);
    }
  );
});
