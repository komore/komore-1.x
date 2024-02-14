import { feature } from '@komore/testing';

import { of } from '../creation/of';
import { firstValueFrom } from '../promise/first-value-from';
import { map } from './map';

feature('Map operator', {
  async 'maps an emitted value'() {
    given: 'an observable';
    const value = 42;
    const $ = of(value);
    and: 'a mapping function';
    const mappingFunction = jest.fn((v: number) => `test${v}`);

    when: 'using the operator to map an emitted value';
    const result$ = $.pipe(map(mappingFunction));

    expect: 'the value to have been properly mapped';
    const result = await firstValueFrom(result$);
    expect(result).toBe(`test${value}`);
    expectTypeOf(result).toEqualTypeOf<string>();
    and: 'the mapping function to have been called only once, with the value and the index';
    expect(mappingFunction).toHaveBeenCalledTimes(1);
    expect(mappingFunction).toHaveBeenCalledWith(value, 0);
  },
  async 'maps an emitted tuple'() {
    given: 'an observable';
    const value = [42, 'test', true] as const;
    const $ = of(value);
    and: 'mapping functions for some elements in the tuple';
    const mappingFunction0 = jest.fn(
      (v: number, [, s]: readonly [number, string, boolean], index: number) => `${s}${v}${index}`
    );
    const mappingFunction2 = jest.fn((v: boolean) => !v);

    when: 'using the operator to map an emitted value';
    const result$ = $.pipe(map([mappingFunction0, undefined, mappingFunction2]));

    expect: 'the value to have been properly mapped';
    const result = await firstValueFrom(result$);
    expect(result.length).toBe(value.length);
    expect(result[0]).toBe(`${value[1]}${value[0]}0`);
    expect(result[1]).toBe(value[1]);
    expect(result[2]).toBe(!value[2]);
    and: 'the mapping functions to have been called only once, with the value, the tuple and the index';
    expect(mappingFunction0).toHaveBeenCalledTimes(1);
    expect(mappingFunction0).toHaveBeenCalledWith(value[0], value, 0);
    expect(mappingFunction2).toHaveBeenCalledTimes(1);
    expect(mappingFunction2).toHaveBeenCalledWith(value[2], value, 0);
  },
  async 'maps an emitted object'() {
    given: 'an observable';
    const value = { n: 42, s: 'test', b: true } as const;
    const $ = of(value);
    and: 'mapping functions for some properties in the object';
    const mappingFunctionN = jest.fn((n: number, { s }: typeof value, index: number) => `${s}${n}${index}`);
    const mappingFunctionB = jest.fn((v: boolean) => !v);

    when: 'using the operator to map an emitted value';
    const result$ = $.pipe(map({ n: mappingFunctionN, b: mappingFunctionB }));

    expect: 'the value to have been properly mapped';
    const result = await firstValueFrom(result$);
    expect(result.b).toBe(!value.b);
    expect(result.n).toBe(`${value.s}${value.n}0`);
    expect(result.s).toBe(value.s);
    and: 'the mapping functions to have been called only once, with the value, the tuple and the index';
    expect(mappingFunctionN).toHaveBeenCalledTimes(1);
    expect(mappingFunctionN).toHaveBeenCalledWith(value.n, value, 0);
    expect(mappingFunctionB).toHaveBeenCalledTimes(1);
    expect(mappingFunctionB).toHaveBeenCalledWith(value.b, value, 0);
    and: 'the type of the resulting observable to have taken the mapping function return types into account';
    expectTypeOf(result).toEqualTypeOf<{ readonly n: string, readonly s: string, readonly b: boolean }>();
  },
});
