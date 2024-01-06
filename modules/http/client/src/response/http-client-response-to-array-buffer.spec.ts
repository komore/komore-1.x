import { firstValueFrom } from '@komore/reactive';
import { feature, mock } from '@komore/testing';

import { responseToArrayBuffer } from './response-to-array-buffer';

feature('HTTP client response to array buffer', {
  async 'returns an observable that emits array buffer when the response body is available'() {
    given: 'a response';
    const responseArrayBuffer = mock<ArrayBuffer>();
    const response = mock<Response>();
    response.arrayBuffer.mockImplementationOnce(() => Promise.resolve(responseArrayBuffer));

    when: 'creating a function that returns the response as an array buffer';
    const func = responseToArrayBuffer();
    when: 'calling it';
    const result$ = func(response);

    expect: 'the observable to be cold';
    expect(response.arrayBuffer).toHaveBeenCalledTimes(0);
    and: 'the result to be the payload as an array buffer';
    const result = await firstValueFrom(result$);
    expect(response.arrayBuffer).toHaveBeenCalledTimes(1);
    expect(result).toBe(responseArrayBuffer);
  },
});
