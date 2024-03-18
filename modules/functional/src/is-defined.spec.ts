import { feature } from '@komore/testing';

import { isDefined } from './is-defined';

feature('Is defined', {
  'returns true when a value is defined'() {
    expect: 'true to be returned when the value is defined';
    isDefined('test') === true;
  },
  'returns false when a value is undefined'() {
    expect: 'false to be returned when the value is undefined';
    isDefined(undefined) === false;
  },
  'acts as a type guard'() {
    given: 'a value that may be undefined';
    const value: string | undefined = 'test';
    if (isDefined(value)) {
      type value === string;
    }
  },
});
