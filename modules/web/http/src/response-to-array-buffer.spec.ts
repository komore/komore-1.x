import { firstValueFrom } from '@komore/reactive';
import { mock } from 'jest-mock-extended';
import { responseToArrayBuffer } from './response-to-array-buffer';

describe('Response to array buffer', () => {
  it('returns an observable that emits array buffer when the response body is available', async () => {
    given: 'a response';
    const responseArrayBuffer = mock<ArrayBuffer>();
    const response = mock<Response>();
    response.arrayBuffer.mockImplementationOnce(() => Promise.resolve(responseArrayBuffer));
    and: 'a response as array buffer operator function';
    when: 'getting the response as an array buffer';
    const $ = responseToArrayBuffer(response);
    expect: 'the observable to be cold';
    expect(response.arrayBuffer).toHaveBeenCalledTimes(0);
    and: 'the result to be the payload as an array buffer';
    const result = await firstValueFrom($);
    expect(response.arrayBuffer).toHaveBeenCalledTimes(1);
    expect(result).toBe(responseArrayBuffer);
  });
});
