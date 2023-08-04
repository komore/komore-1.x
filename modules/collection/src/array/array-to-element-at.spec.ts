import { arrayToElementAt } from './array-to-element-at';

describe('Array to element at', () => {
  it.each([
    [0, [1, 2, 3], 1],
    [1, [1, 2, 3], 2],
    [3, [1, 2, 3], undefined],
  ])('creates a function that returns an element from an array', (index, array, expectedResult) => {
    given: 'an array and an index';

    when: 'creating a function that returns an element from an array at the index';
    const func = arrayToElementAt(index);
    and: 'calling it with the array';
    const result = func(array);

    expect: 'the element at the specified index to have been returned';
    expect(result).toBe(expectedResult);
    where: 'indices may be in or out of bound';
    /* TODO: array     | index || expectedResult
    [1, 2, 3] | 0     || 1
    [1, 2, 3] | 1     || 2
    [1, 2, 3] | 3     || undefined*/
  });
});
