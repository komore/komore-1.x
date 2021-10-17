import { firstValueFrom, of, throwError } from '@komore/reactive';
import { catchHttpNetworkFailure } from './catch-http-network-failure';

describe('Catch HTTP network failure', () => {
  it('catches TypeError errors', async () => {
    given: 'a response';
    given: 'a thrown TypeError error';
    const error = new TypeError('test');
    const error$ = throwError(() => error);
    and: 'a catch HTTP network failure operator function';
    const selector = jest.fn((error: unknown) => of(error));
    const operatorFunction = catchHttpNetworkFailure(selector);
    when: 'applying the operator';
    const $ = error$.pipe(operatorFunction);
    const result = await firstValueFrom($);
    expect: 'the error to have been caught';
    expect(result).toBe(error);
    and: 'the selector to have been called once with the error';
    expect(selector).toHaveBeenCalledTimes(1);
    expect(selector.mock.calls[0][0]).toBe(error);
  });

  it('ignores other errors', () => {
    given: 'a thrown Error error';
    const error = new Error('test');
    const error$ = throwError(() => error);
    and: 'a catch HTTP network failure operator function';
    const selector = jest.fn((error: unknown) => of(error));
    const operatorFunction = catchHttpNetworkFailure(selector);
    when: 'applying the operator';
    const $ = error$.pipe(operatorFunction);
    expect: 'the error to remain untouched';
    expect(() => firstValueFrom($)).rejects.toThrowError(error);
    and: 'the selector not to have been called';
    expect(selector).not.toHaveBeenCalled();
  });
});
