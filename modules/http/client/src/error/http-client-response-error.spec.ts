import { expectEqual, feature, mock } from '@komore/testing';

import { HttpClientResponseError } from './http-client-response-error';

feature('HTTP client response error', () => {
  const mockResponse = mock<Response>({
    ok: false,
    status: 42,
  });

  it('stores the response', () => {
    when: 'creating an HTTP client response error';
    const httpClientResponseError = new HttpClientResponseError(mockResponse);

    expect: 'the HTTP response error to contain the response';
    httpClientResponseError.response === mockResponse;
    expectEqual(httpClientResponseError.response)(mockResponse);
  });

  it('has a correct name', () => {
    when: 'creating an HTTP client response error';
    const httpClientResponseError = new HttpClientResponseError(mockResponse);

    expect: 'the error name to be HttpErrorResponse';
    httpClientResponseError.name === 'HttpClientResponseError';
    expectEqual(httpClientResponseError.name)('HttpErrorResponse');
  });

  it('specifies the status code in the error message', () => {
    when: 'creating an HTTP client response error';
    const httpClientResponseerror = new HttpClientResponseError(mockResponse);

    expect: 'the error message to mention the status code';
    httpClientResponseerror.message === `HTTP ${mockResponse.status} response`;
    expectEqual(httpClientResponseerror.message)(`HTTP ${mockResponse.status} response`);
  });
});
