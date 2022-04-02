import { isHttpNetworkFailureError } from './is-http-network-failure-error';

describe('Is HTTP network failure error', () => {
  it('returns true when passed a TypeError error', async () => {
    given: 'a TypeError error';
    const error = new TypeError('test');

    when: 'testing whether the error is an HTTP network failure error';
    const result = isHttpNetworkFailureError(error);

    expect: 'the error to have been recognized';
    expect(result).toBe(true);
  });

  it('ignores other errors', () => {
    given: 'an error other than a TypeError';
    const error = new Error('test');

    when: 'testing whether the error is an HTTP network failure error';
    const result = isHttpNetworkFailureError(error);

    expect: 'the error to have been recognized';
    expect(result).toBe(false);
  });
});
