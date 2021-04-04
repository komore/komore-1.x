import { of } from '@komore/reactive';
import { firstValueFrom } from '@komore/reactive/promise';
import { mock } from 'jest-mock-extended';
import { withResponseAsBlob } from './with-response-as-blob';

describe('With response as blob', () => {
  it('waits for the response body to be available as a blob and emits it alongside the response', async () => {
    given: 'a response';
    const responseBlob = mock<Blob>();
    const response = mock<Response>();
    response.blob.mockImplementationOnce(() => Promise.resolve(responseBlob));
    and: 'a with response as blob operator function';
    const operatorFunction = withResponseAsBlob();
    when: 'applying the operator to a response';
    const $ = of(response).pipe(operatorFunction);
    expect: 'the result to be the response and the payload as a blob';
    const result = await firstValueFrom($);
    expect(response.blob).toHaveBeenCalledTimes(1);
    expect(result).toEqual([response, responseBlob]);
  });
});
