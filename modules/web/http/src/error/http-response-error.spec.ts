import { mock } from 'jest-mock-extended';
import { HttpResponseError } from './http-response-error';

describe('HTTP response error', () => {
  const mockResponse = mock<Response>({
    ok: false,
    status: 42
  });

  it('stores the response', () => {
    when: 'creating an HTTP response error';
    const httpErrorResponse = new HttpResponseError(mockResponse);

    expect: 'the HTTP response error to contain the response';
    expect(httpErrorResponse.response).toBe(mockResponse);
  });

  it('has a correct name', () => {
    when: 'creating an HTTP response error';
    const httpErrorResponse = new HttpResponseError(mockResponse);

    expect: 'the error name to be HttpErrorResponse';
    expect(httpErrorResponse.name).toBe('HttpErrorResponse');
  });

  it('specifies the status code in the error message', () => {
    when: 'creating an HTTP response error';
    const httpErrorResponse = new HttpResponseError(mockResponse);

    expect: 'the error message to mention the status code';
    expect(httpErrorResponse.message).toBe(`HTTP ${mockResponse.status} response`);
  });
});
