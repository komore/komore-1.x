import { firstValueFrom } from '@komore/reactive';
import { feature, mock } from '@komore/testing';

import { httpClientResponseToText } from './http-client-response-to-text';

feature('HTTP client response to text', {
  async 'waits for the response body to be available as a string'() {
    given: 'a response';
    const responseText = 'test';
    const response = mock<Response>();
    response.text.mockImplementationOnce(() => Promise.resolve(responseText));

    when: 'creating a function that returns a response as text';
    const func = httpClientResponseToText();
    and: 'calling it';
    const $ = func(response);

    expect: 'the result to be the payload as a string';
    const result = await firstValueFrom($);
    expect(response.text).toHaveBeenCalledTimes(1);
    result === responseText;
  },
});
