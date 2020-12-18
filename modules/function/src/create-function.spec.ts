import { expectTypeOf } from 'expect-type';
import { Observable } from 'rxjs';
import { ignoreElements, mapTo } from 'rxjs/operators';
import { createFunction } from './create-function';

describe('Create function', () => {
  it('returns a function with the correct function name', () => {
    // when: creating a function
    const func = createFunction('test-function');
    // expect: the function's name matches the given name
    expect(func.name).toBe('test-function');
  });

  it('returns correctly typed functions when there is a projection', () => {
    // given: functions with or without parameters
    const withParameters = createFunction('test-function', ($: Observable<[value: string]>) => $.pipe(mapTo(42)));
    const withParametersNoResult = createFunction('test-function', ($: Observable<[value: string]>) => $.pipe(ignoreElements()));
    const withoutParameters = createFunction('test-function', $ => $.pipe(mapTo(42)));
    const withoutParametersNoResult = createFunction('test-function', $ => $.pipe(ignoreElements()));
    // expect: the correct types to be returned
    expectTypeOf(withParameters).parameter(0).toBeString();
    expectTypeOf(withParameters).returns.resolves.toBeNumber();
    expectTypeOf(withParametersNoResult).parameter(0).toBeString();
    expectTypeOf(withParametersNoResult).returns.toBeVoid();
    expectTypeOf(withoutParameters).parameter(0).toBeUndefined();
    expectTypeOf(withoutParameters).returns.resolves.toBeNumber();
    expectTypeOf(withoutParametersNoResult).parameter(0).toBeUndefined();
    expectTypeOf(withoutParametersNoResult).returns.toBeVoid();
  });

  it('returns correctly typed functions when there is no projection', () => {
    // given: functions with or without parameters
    const withParameters = createFunction<'test-function', [value: number]>('test-function');
    const withoutParameters = createFunction('test-function');
    // expect: the correct types to be returned
    expectTypeOf(withParameters).parameter(0).toBeNumber();
    expectTypeOf(withParameters).returns.resolves.toEqualTypeOf<[value: number]>();
    expectTypeOf(withoutParameters).parameter(0).toBeUndefined();
    expectTypeOf(withoutParameters).returns.resolves.toBeVoid();
  });
});
