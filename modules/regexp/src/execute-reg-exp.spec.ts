import { feature } from '@komore/testing';

import { executeRegExp } from './execute-reg-exp';

feature('Execute regular expression', {
  'returns an empty list when there are no matches': () => {
    given: 'a regular expression and a string that would not match';
    const regExp = /test/g;
    const string = 'no-match';

    when: 'executing the regular expression';
    const results = Array.from(executeRegExp(regExp, string));

    expect: 'an empty list to be returned';
    results.length === 0;
  },
  'returns a single match when there is only one': () => {
    given: 'a regular expression and a string that would match once';
    const regExp = /gle-(test)/g;
    const string = 'single-test';

    when: 'executing the regular expression';
    const results = Array.from(executeRegExp(regExp, string));

    expect: 'the match to be returned';
    results.length === 1;
    results[0]?.[1] === 'test';
  },
  'returns multiple matches when there is more than one match': () => {
    given: 'a regular expression and a string that would match multiple times';
    const regExp = /a(\d+)b/g;
    const string = 'longer a123btest witha42b multiple matches';

    when: 'executing the regular expression';
    const results = Array.from(executeRegExp(regExp, string));

    expect: 'each match to be returned';
    results.length === 2;
    results[0]?.[1] === '123';
    results[1]?.[1] === '42';
  },
});
