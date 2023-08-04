import { expectEqual, feature } from '@komore/testing';

import { isHttpClientNetworkFailureError } from './is-http-client-network-failure-error';

feature('Is HTTP client network failure error', {
  'returns true when passed a TypeError error': () => {
    given: 'a TypeError error';
    const error = new TypeError('test');

    when: 'testing whether the error is an HTTP network failure error';
    const result = isHttpClientNetworkFailureError(error);

    expect: 'the error to have been recognized';
    result === true;
    expectEqual(result)(true);
  },
  'ignores other errors': () => {
    given: 'an error other than a TypeError';
    const error = new Error('test');

    when: 'testing whether the error is an HTTP network failure error';
    const result = isHttpClientNetworkFailureError(error);

    expect: 'the error to have been recognized';
    result === false;
    expectEqual(result)(false);
  },
});
