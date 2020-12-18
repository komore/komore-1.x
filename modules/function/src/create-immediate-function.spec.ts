import { createImmediateFunction } from './create-immediate-function';

describe('Create immediate function', () => {
  it('returns a noop function when there are no function parameters', async () => {
    // given: a function with no parameters
    const func = createImmediateFunction('test-function');
    // when: calling the function
    const result = await func();
    // then: the result is undefined
    expect(result).toBeUndefined();
  });

  it('returns an identity function when there are function parameters', async () => {
    // given: a function with parameters
    const func = createImmediateFunction<'test-function', [value: number]>('test-function');
    // when: calling the function
    const result = await func(42);
    // then: the result is the function parameters
    expect(result).toStrictEqual([42]);
  });
});
