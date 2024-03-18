import { feature } from '@komore/testing';

import { isInstanceOf } from './is-instance-of';

feature('Is instance of', {
  'creates a function that tests whether a value is an instance of a given class'(
    instanceClass,
    value,
    expectedResult
  ) {
    given: 'an instance class';

    when: 'creating a function that tests whether a value is an instance of the given class';
    const func = isInstanceOf(instanceClass);

    and: 'calling it';
    const result = func(value);

    expect: 'true to have been returned if the value is an instance of the given class';
    result === expectedResult;

    where: 'TODO'[
      ([Array, [], true],
      [Array, {}, false],
      [Function, () => void 0, true],
      [Function, {}, false],
      [Object, {}, true],
      [Object, [], true],
      [Object, 'str', false])
    ];
  },

  'TODO: performs type assertion'() {},
});
