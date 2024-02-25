import { feature } from '@komore/testing';

import { or } from './or';

feature('Or', {
  'returns false when there are no functions'() {
    given: 'a function that combines no functions';
    const func = or();

    when: 'calling it';
    const result = func(true);

    then: 'false is returned';
    result === false;
  },
  'returns false when no function returns true'() {
    given: 'a function combining functions that return false';
    const f1 = (_v: boolean) => false;
    const f2 = (_v: boolean) => false;
    const func = or(f1, f2);

    when: 'calling it';
    const result = func(true);

    then: 'false is returned';
    result === false;
  },
  'returns true if at least one function returns true'() {
    given: 'a function combining functions that return false';
    const f1 = (_v: boolean) => false;
    const f2 = (v: boolean) => v;
    const f3 = (_v: boolean) => false;
    const func = or(f1, f2, f3);

    when: 'calling it';
    const result = func(true);

    then: 'true is returned';
    result === true;
  },
});
