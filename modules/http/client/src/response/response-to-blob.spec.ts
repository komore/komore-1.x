import { firstValueFrom } from '@komore/reactive';
import { mock } from '@komore/testing';

import { responseToBlob } from './response-to-blob';

describe('HTTP client response to blob', () => {
  it('waits for the response body to be available as a blob', async () => {
    given: 'a response';
    const responseBlob = mock<Blob>();
    const response = mock<Response>();
    response.blob.mockImplementationOnce(() => Promise.resolve(responseBlob));

    when: 'creating a function that returns the response as an array buffer';
    const func = responseToBlob();
    when: 'calling it';
    const $ = func(response);

    expect: 'the result to be the payload as a blob';
    const result = await firstValueFrom($);
    expect(response.blob).toHaveBeenCalledTimes(1);
    expect(result).toBe(responseBlob);
  });
});
