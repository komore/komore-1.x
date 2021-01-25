import { expectTypeOf } from 'expect-type';
import { assert } from './assert';

describe('Assert', () => {
  it('throws the specified error message when the condition is not met', () => {
    given: 'an error message'
    const errorMessage = 'test-error-message';
    expect: 'an error to be thrown when the assertion condition is not met'
    expect(() => assert(4 < 3, errorMessage)).toThrowError(errorMessage);
  });

  it('throws the built error message when the condition is not met', () => {
    given: 'a function that builds an error'
    const error = new Error('test');
    const errorFunction = () => error;
    expect: 'the built error to be thrown when the assertion condition is not met'
    expect(() => assert(4 < 3, errorFunction)).toThrow(error);
  });

  it('performs type assertions', () => {
    given: 'a variable that may be undefined'
    const variable = 'test' as string | undefined;
    expect: 'the variable type to be the union string | undefined'
    expectTypeOf(variable).toEqualTypeOf<string | undefined>();
    when: 'asserting that the variable is not undefined'
    assert(variable !== undefined, 'variable must be defined');
    then: 'the inferred variable type has changed to match the asserted condition'
    expectTypeOf(variable).toEqualTypeOf<string>();
  });
});
