import { feature, thrown } from '@komore/testing';

import { assert } from './assert';
import { runtimeError } from './runtime.error';

feature('Assert', {
  'throws the specified error message when the condition is not met'() {
    given: 'an error message';
    const errorMessage = 'test-error-message';

    when: 'asserting a condition';
    assert(4 < 3, errorMessage);

    expect: 'an assertion failed error to be thrown when the condition is not met';
    const { context } = thrown(runtimeError.assertionFailed);
    and: 'the error context message to be the assertion message';
    context.message === errorMessage;
  },
  'throws the built error message when the condition is not met'() {
    given: 'a function that builds an error';
    const builtError = new Error('test');
    const errorFunction = () => builtError;

    when: 'asserting a condition';
    assert(4 < 3, errorFunction);

    expect: 'the built error to be thrown when the assertion condition is not met';
    const error = thrown(Error);
    error === builtError;
  },
  'performs type assertions'() {
    given: 'a variable that may be undefined';
    const variable = 'test' as string | undefined;

    expect: 'the variable type to be the union string | undefined';
    expectTypeOf(variable).toEqualTypeOf<string | undefined>();

    when: 'asserting that the variable is not undefined';
    assert(variable !== undefined, 'variable must be defined');

    then: 'the inferred variable type has changed to match the asserted condition';
    expectTypeOf(variable).toEqualTypeOf<string>();
  },
});
