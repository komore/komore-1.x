import { mapTo, redactValue } from '@komore/reactive';
import { feature, type, typeOf } from '@komore/testing';

import { createFunction } from './create-function';

feature('Create function', {
  'returns a function with the correct function name'() {
    given: 'a function name';
    const functionName = 'test-function';

    when: 'creating a function';
    const func = createFunction(functionName, parameters$ => parameters$.pipe(redactValue()));

    then: 'the function name matches the given name';
    func.name === functionName;
  },
  'correctly types the function when there is no result or parameters'() {
    when: 'creating a function with no result or parameters';
    const func = createFunction('test-function', $ => $.pipe(redactValue()));

    then: 'the function type has no return type or parameters';
    typeOf(func) === type<() => Promise<void>>();
  },
  'correctly types the function when there is a result but no parameters'() {
    given: 'creating a function with a result but no parameters';
    const func = createFunction('test-function', $ => $.pipe(mapTo(42)));

    then: 'the function type has a return type and no parameters';
    typeOf(func) === type<() => Promise<number>>();
  },
  'correctly types the function when there is a result and parameters'() {
    when: 'creating a function with a result and parameters';
    const func = createFunction('test-function', ($: Observable<readonly [value: string]>) => $.pipe(mapTo(42)));

    then: 'the function type has parameters and a return type';
    typeOf(func) === type<(value: string) => Promise<number>>();
  },
  'correctly types the function when there are parameters but no result'() {
    when: 'creating a function with parameters but no result';
    const func = createFunction('test-function', ($: Observable<readonly [value: string]>) => $.pipe(redactValue()));

    then: 'the function type has parameters but a void return type';
    typeOf(func) === type<(value: string) => Promise<void>>();
  },
});
