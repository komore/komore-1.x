import { mapTo, type Observable, redactValue } from '@komore/reactive';
import { expectTypeOf } from 'expect-type';
import { createFunction } from './create-function';

describe('Create function', () => {
  it('returns a function with the correct function name', () => {
    when: 'creating a function';
    const functionName = 'test-function';
    const func = createFunction(functionName);
    expect: 'the function name to match the given name';
    expect(func.name).toBe(functionName);
  });

  it('returns correctly typed functions when there is a projection', () => {
    given: 'functions with or without parameters';
    const withParameters = createFunction('test-function', ($: Observable<[value: string]>) => $.pipe(mapTo(42)));
    const withParametersNoResult = createFunction('test-function', ($: Observable<[value: string]>) =>
      $.pipe(redactValue())
    );
    const withoutParameters = createFunction('test-function', $ => $.pipe(mapTo(42)));
    const withoutParametersNoResult = createFunction('test-function', $ => $.pipe(redactValue()));
    expect: 'the correct types to have been returned';
    expectTypeOf(withParameters).parameter(0).toBeString();
    expectTypeOf(withParameters).returns.resolves.toBeNumber();
    expectTypeOf(withParametersNoResult).parameter(0).toBeString();
    expectTypeOf(withParametersNoResult).returns.resolves.toBeVoid();
    expectTypeOf(withoutParameters).parameter(0).toBeUndefined();
    expectTypeOf(withoutParameters).returns.resolves.toBeNumber();
    expectTypeOf(withoutParametersNoResult).parameter(0).toBeUndefined();
    expectTypeOf(withoutParametersNoResult).returns.resolves.toBeVoid();
  });

  it('returns correctly typed functions when there is no projection', () => {
    given: 'functions with or without parameters';
    const withParameters = createFunction<'test-function', [value: number]>('test-function');
    const withoutParameters = createFunction('test-function');
    expect: 'the correct types to have been returned';
    expectTypeOf(withParameters).parameter(0).toBeNumber();
    expectTypeOf(withParameters).returns.resolves.toEqualTypeOf<[value: number]>();
    expectTypeOf(withoutParameters).parameter(0).toBeUndefined();
    expectTypeOf(withoutParameters).returns.resolves.toBeVoid();
  });
});
