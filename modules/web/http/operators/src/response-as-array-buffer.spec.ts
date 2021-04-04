import { of } from '@komore/reactive';
import { firstValueFrom } from '@komore/reactive/promise';
import { mock } from 'jest-mock-extended';
import { responseAsArrayBuffer } from './response-as-array-buffer';

describe('Response as array buffer', () => {
  it('waits for the response body to be available as an array buffer', async () => {
    given: 'a response';
    const responseArrayBuffer = mock<ArrayBuffer>();
    const response = mock<Response>();
    response.arrayBuffer.mockImplementationOnce(() => Promise.resolve(responseArrayBuffer));
    and: 'a response as array buffer operator function';
    const operatorFunction = responseAsArrayBuffer();
    when: 'applying the operator to a response';
    const $ = of(response).pipe(operatorFunction);
    expect: 'the result to be the payload as an array buffer';
    const result = await firstValueFrom($);
    expect(response.arrayBuffer).toHaveBeenCalledTimes(1);
    expect(result).toBe(responseArrayBuffer);
  });
});
