import { getCollectionSize } from './get-collection-size';

describe('getCollectionSize', () => {
  const array = [1, 2];

  it.each([
    ['arrays', array],
    ['maps', new Map(array.map((v, k) => [k, v]))],
    ['sets', new Set(array)]
  ])('works with %p', (_, collection) => {
    // expect: the correct size to be returned for arrays, maps and sets
    expect(getCollectionSize(collection)).toBe(array.length);
  });
});
