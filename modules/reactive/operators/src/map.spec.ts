import { of } from '@komore/reactive';
import { lastValueFrom } from '@komore/reactive/promise';
import { map } from './map';

describe('Map operator', () => {
  it('maps an emitted value', async () => {
    given: 'an observable';
    const value = 42;
    const $ = of(value);
    and: 'a mapping function';
    const mappingFunction = jest.fn((v: number) => v * 2);
    when: 'using the operator to map an emitted value';
    const result$ = $.pipe(map(mappingFunction));
    expect: 'the value to have been properly mapped';
    const result = await lastValueFrom(result$);
    expect(result).toBe(value * 2);
    and: 'the mapping function to have been called only once, with the value and the index';
    expect(mappingFunction).toHaveBeenCalledTimes(1);
    expect(mappingFunction).toHaveBeenCalledWith(value, 0);
  });
});
