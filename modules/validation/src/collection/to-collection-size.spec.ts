import { toCollectionSize } from './to-collection-size';

describe('To collection size', () => {
  const array = [1, 2];

  it.each([
    { type: 'array', collection: array },
    { type: 'map', collection: new Map(array.map((v, k) => [k, v])) },
    { type: 'set', collection: new Set(array) },
  ])('Computing the size of a $type', ({ collection }) => {
    given: 'a $type collection';

    when: 'getting the collection size';
    const size = toCollectionSize(collection);

    then: 'the collection size is returned';
    expect(size).toBe(array.length);
  });
});
