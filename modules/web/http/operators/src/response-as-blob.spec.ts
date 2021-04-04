import { of } from '@komore/reactive';
import { firstValueFrom } from '@komore/reactive/promise';
import { mock } from 'jest-mock-extended';
import { responseAsBlob } from './response-as-blob';

describe('Response as blob', () => {
  it('waits for the response body to be available as a blob', async () => {
    given: 'a response';
    const responseBlob = mock<Blob>();
    const response = mock<Response>();
    response.blob.mockImplementationOnce(() => Promise.resolve(responseBlob));
    and: 'a response as blob operator function';
    const operatorFunction = responseAsBlob();
    when: 'applying the operator to a response';
    const $ = of(response).pipe(operatorFunction);
    expect: 'the result to be the payload as a blob';
    const result = await firstValueFrom($);
    expect(response.blob).toHaveBeenCalledTimes(1);
    expect(result).toBe(responseBlob);
  });
});
