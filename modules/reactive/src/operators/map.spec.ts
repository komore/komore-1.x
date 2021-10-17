import { expectTypeOf } from 'expect-type';
import { of } from '../creation/of';
import { firstValueFrom } from '../promise/first-value-from';
import { map } from './map';

describe('Map operator', () => {
  it('maps an emitted value', async () => {
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
    and: 'the mapping function to have been called only once, with the value and the index';
    expect(mappingFunction).toHaveBeenCalledTimes(1);
    expect(mappingFunction).toHaveBeenCalledWith(value, 0);
  });

  it('maps an emitted tuple', async () => {
    given: 'an observable';
    const value = [42, 'test', true] as const;
    const $ = of(value);
    and: 'mapping functions for some elements in the tuple';
    const mappingFunction0 = jest.fn((v: number, [, s]: [number, string, boolean]) => `${s}${v}`);
    const mappingFunction2 = jest.fn((v: boolean) => !v);
    when: 'using the operator to map an emitted value';
    const result$ = $.pipe(map([mappingFunction0, , mappingFunction2]));
    expect: 'the value to have been properly mapped';
    const result = await firstValueFrom(result$);
    expect(result).toBe([`${value[1]}${value[0]}`, value[1], !value[2]]);
    and: 'the mapping functions to have been called only once, with the value, the tuple and the index';
    expect(mappingFunction0).toHaveBeenCalledTimes(1);
    expect(mappingFunction0).toHaveBeenCalledWith(value[0], value, 0);
    expect(mappingFunction2).toHaveBeenCalledTimes(1);
    expect(mappingFunction2).toHaveBeenCalledWith(value[2], value, 0);
  });

  it('maps an emitted object', async () => {
    given: 'an observable';
    const value = { n: 42, s: 'test', b: true };
    const $ = of(value);
    and: 'mapping functions for some properties in the object';
    const mappingFunctionN = jest.fn((v: number, { s }: typeof value) => `${s}${v}`);
    const mappingFunctionB = jest.fn((v: boolean) => !v);
    when: 'using the operator to map an emitted value';
    const result$ = $.pipe(map({ n: mappingFunctionN, b: mappingFunctionB }));
    expect: 'the value to have been properly mapped';
    const result = await firstValueFrom(result$);
    expect(result).toBe({ n: `${value.s}${value.n}`, s: value.s, b: !value.b });
    and: 'the mapping functions to have been called only once, with the value, the tuple and the index';
    expect(mappingFunctionN).toHaveBeenCalledTimes(1);
    expect(mappingFunctionN).toHaveBeenCalledWith(value.n, value, 0);
    expect(mappingFunctionB).toHaveBeenCalledTimes(1);
    expect(mappingFunctionB).toHaveBeenCalledWith(value.b, value, 0);
    and: 'the type of the resulting observable to have taken the mapping function return types into account';
    expectTypeOf(result).toEqualTypeOf<{ n: string: s: string, b: boolean }>();
  });
});
