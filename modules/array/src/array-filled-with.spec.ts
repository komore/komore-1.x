import { arrayFilledWith } from './array-filled-with';

describe('Array filled with', () => {
  it('creates a function that returns a new array filled with a value', () => {
    given: 'an array and a value';
    const array = [1, 2, 3];
    const value = 'a';
    when: 'creating a function that returns an array filled with a the value';
    const func = arrayFilledWith(value);
    and: 'calling it with the array';
    const result = func(array);
    expect: 'an array with the same length as the original array but filled with the value';
    expect(result).toStrictEqual(['a', 'a', 'a']);
  });

  it('creates a function that returns an array with the specified length filled with a value', () => {
    given: 'a length and a value';
    const length = 3;
    const value = 'a';
    when: 'creating a function that returns an array filled with a the value';
    const func = arrayFilledWith(value);
    and: 'calling it with the length';
    const result = func(length);
    expect: 'an array with the specified length filled with the value';
    expect(result).toStrictEqual(['a', 'a', 'a']);
  });
});
