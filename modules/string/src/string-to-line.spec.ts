import { stringToLine } from './string-to-line';

describe('String to line', () => {
  it.each([
    [1, 'single-line string'],
    [2, undefined],
  ])('can return a line from single-line strings', (lineNumber, expectedResult) => {
    given: 'a single-line string';
    const str = 'single-line string';
    and: 'a line number';

    when: 'creating a function that returns the specific line number from a string';
    const func = stringToLine(lineNumber);
    and: 'calling it with a single-line string';
    const result = func(str);

    then: 'the correct line is returned, or undefined if there was no such line';
    expect(result).toBe(expectedResult);
  });

  it.each([
    [1, 'first line'],
    [2, 'second line'],
    [3, 'third line'],
    [4, ''],
    [5, undefined],
  ])('can return a line from multi-line strings', (lineNumber, expectedResult) => {
    given: 'a multi-line string';
    const str = 'first line\nsecond line\r\nthird line\n';
    and: 'a line number';

    when: 'creating a function that returns the specific line number from a string';
    const func = stringToLine(lineNumber);
    and: 'calling it with a multi-line string';
    const result = func(str);

    then: 'the correct line is returned, or undefined if there was no such line';
    expect(result).toBe(expectedResult);
  });

  it('throws an error when using an invalid line number', () => {
    given: 'an invalid file number';
    const lineNumber = -1;

    expect: 'creating a function that returns an invalid line number to throw an error';
    expect(() => stringToLine(lineNumber)).toThrowError(`invalid line number ${lineNumber}`);
  });
});
