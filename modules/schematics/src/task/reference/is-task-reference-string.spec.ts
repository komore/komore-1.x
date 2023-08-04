import { isTaskReferenceString } from './is-task-reference-string';

describe('Is task reference string', () => {
  it.each([
    ['a', false],
    ['a:b', true],
    ['@a:b', true],
    ['@a/b', false],
    ['@a/b:c', true],
    ['@a/b:c/d', false],
  ])('returns true when a string is valid', (str, expectedResult) => {
    given: 'a string';

    when: 'testing whether it is a valid task reference string';
    const isValid = isTaskReferenceString(str);

    then: 'true is returned if the string was a valid task reference string';
    expect(isValid).toBe(expectedResult);
  });
});
