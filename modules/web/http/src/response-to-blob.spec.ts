import { firstValueFrom, of } from '@komore/reactive';
import { mock } from 'jest-mock-extended';
import { responseToBlob } from './response-to-blob';

describe('Map response to blob', () => {
  it('waits for the response body to be available as a blob', async () => {
    given: 'a response';
    const responseBlob = mock<Blob>();
    const response = mock<Response>();
    response.blob.mockImplementationOnce(() => Promise.resolve(responseBlob));
    and: 'a response as blob operator function';
    const operatorFunction = responseToBlob();
    when: 'applying the operator to a response';
    const $ = of(response).pipe(operatorFunction);
    expect: 'the result to be the payload as a blob';
    const result = await firstValueFrom($);
    expect(response.blob).toHaveBeenCalledTimes(1);
    expect(result).toBe(responseBlob);
  });
});
