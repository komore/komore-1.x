import { arrayToMap } from './array-to-map';

describe('Array to map', () => {
  it('maps using the key mapper', () => {
    given: 'an array';
    const array = createTestArray();
    and: 'a key mapper';
    const keyMapper = ({ id }: TestItem) => id;
    when: 'creating a function that maps to a map using the key mapper';
    const func = arrayToMap(keyMapper);
    and: 'calling it';
    const map = func(array);
    expect: 'the map to have been built using the mapped keys';
    expect(map.size).toBe(2);
    expect(map.has(1)).toBe(true);
    expect(map.has(2)).toBe(true);
  });

  it('maps using the key and value mappers', () => {
    given: 'an array';
    const array = createTestArray();
    and: 'a key mapper';
    const keyMapper = ({ id }: TestItem) => id;
    and: 'a value mapper';
    const valueMapper = ({ value }: TestItem) => value;
    when: 'creating a function that maps to a map using the key and value mappers';
    const func = arrayToMap(keyMapper, valueMapper);
    and: 'calling it';
    const map = func(array);
    expect: 'the map to have been built using the mapped keys and values';
    expect(map.size).toBe(2);
    expect(map.get(1)).toBe('test1');
    expect(map.get(2)).toBe('test2');
  });

  it('passes mapped keys to the value mapper', () => {
    given: 'an array';
    const array = createTestArray();
    and: 'a key mapper';
    const keyMapper = ({ id }: TestItem) => id + 4;
    and: 'a value mapper';
    const valueMapper = ({ value }: TestItem, key: number) => value + '_' + key;
    when: 'creating a function that maps to a map using the key and value mappers';
    const func = arrayToMap(keyMapper, valueMapper);
    and: 'calling it';
    const map = func(array);
    expect: 'the map to have been built using the mapped keys and values';
    expect(map.size).toBe(2);
    expect(map.get(5)).toBe('test1_5');
    expect(map.get(6)).toBe('test2_6');
  });

  it('can resolve conflicts when a merger is passed', () => {
    given: 'an array';
    const array: ReadonlyArray<TestItem> = [
      { id: 1, value: 'test1' },
      { id: 1, value: 'test2' },
    ];
    and: 'a key mapper';
    const keyMapper = ({ id }: TestItem) => id;
    and: 'a merger';
    const merger = ({ value: lhs }: TestItem, { value: rhs }: TestItem, key: number) => ({
      id: key + 1,
      value: lhs + rhs,
    });
    when: 'creating a function that maps to a map usingg the key mapper and the merger';
    const func = arrayToMap(keyMapper, undefined, merger);
    and: 'calling it';
    const map = func(array);
    expect: 'the map to have been built using the merged keys';
    expect(map.size).toBe(1);
    expect(map.get(1)).toStrictEqual({ id: 2, value: 'test1test2' });
  });
});

interface TestItem {
  readonly id: number;
  readonly value: string;
}

function createTestArray(): ReadonlyArray<TestItem> {
  return [
    { id: 1, value: 'test1' },
    { id: 2, value: 'test2' },
  ];
}
