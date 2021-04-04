import { mock } from 'jest-mock-extended';
import { HttpResponseError } from './http-response-error';

describe('HTTP response error', () => {
  const mockResponse = mock<Response>({
    ok: false,
    status: 42
  });

  it('stores the response', () => {
    when: 'creating an HTTP response error';
    const httpResponseError = new HttpResponseError(mockResponse);
    expect: 'the HTTP response error to contain the response';
    expect(httpResponseError.response).toBe(mockResponse);
  });

  it('has a correct name', () => {
    when: 'creating an HTTP response error';
    const httpResponseError = new HttpResponseError(mockResponse);
    expect: 'the error name to be HttpResponseError';
    expect(httpResponseError.name).toBe('HttpResponseError');
  });

  it('specifies the status code in the error message', () => {
    when: 'creating an HTTP response error';
    const httpResponseError = new HttpResponseError(mockResponse);
    expect: 'the error messge to mention the status code';
    expect(httpResponseError.message).toBe(`HTTP ${mockResponse.status} response`);
  });
});
