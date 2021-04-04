import { of } from '@komore/reactive';
import { firstValueFrom } from '@komore/reactive/promise';
import { mock } from 'jest-mock-extended';
import { withResponseAsArrayBuffer } from './with-response-as-array-buffer';

describe('With response as array buffer', () => {
  it('waits for the response body to be available as an array buffer and emits it alongside the response', async () => {
    given: 'a response';
    const responseArrayBuffer = mock<ArrayBuffer>();
    const response = mock<Response>();
    response.arrayBuffer.mockImplementationOnce(() => Promise.resolve(responseArrayBuffer));
    and: 'a with response as array buffer operator function';
    const operatorFunction = withResponseAsArrayBuffer();
    when: 'applying the operator to a response';
    const $ = of(response).pipe(operatorFunction);
    expect: 'the result to be the response and the payload as an array buffer';
    const result = await firstValueFrom($);
    expect(response.arrayBuffer).toHaveBeenCalledTimes(1);
    expect(result).toEqual([response, responseArrayBuffer]);
  });
});
