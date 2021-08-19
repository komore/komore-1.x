import { mock } from 'jest-mock-extended';
import { HttpErrorResponse } from './http-error-response';

describe('HTTP error response', () => {
  const mockResponse = mock<Response>({
    ok: false,
    status: 42
  });

  it('stores the response', () => {
    when: 'creating an HTTP error response';
    const httpErrorResponse = new HttpErrorResponse(mockResponse);
    expect: 'the HTTP error response to contain the response';
    expect(httpErrorResponse.response).toBe(mockResponse);
  });

  it('has a correct name', () => {
    when: 'creating an HTTP error response';
    const httpErrorResponse = new HttpErrorResponse(mockResponse);
    expect: 'the error name to be HttpErrorResponse';
    expect(httpErrorResponse.name).toBe('HttpErrorResponse');
  });

  it('specifies the status code in the error message', () => {
    when: 'creating an HTTP error response';
    const httpErrorResponse = new HttpErrorResponse(mockResponse);
    expect: 'the error message to mention the status code';
    expect(httpErrorResponse.message).toBe(`HTTP ${mockResponse.status} response`);
  });
});
