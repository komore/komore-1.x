import { firstValueFrom } from '@komore/reactive';
import { mock } from '@komore/testing';

import { responseToText } from './response-to-text';

describe('HTTP client response to text', () => {
  it('waits for the response body to be available as a string', async () => {
    given: 'a response';
    const responseText = 'test';
    const response = mock<Response>();
    response.text.mockImplementationOnce(() => Promise.resolve(responseText));

    when: 'creating a function that returns a response as text';
    const func = responseToText();
    and: 'calling it';
    const $ = func(response);

    expect: 'the result to be the payload as a string';
    const result = await firstValueFrom($);
    expect(response.text).toHaveBeenCalledTimes(1);
    expect(result).toBe(responseText);
  });
});
