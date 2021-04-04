import { of } from '@komore/reactive';
import { firstValueFrom } from '@komore/reactive/promise';
import { mock } from 'jest-mock-extended';
import { withResponseAsText } from './with-response-as-text';

describe('With response as text', () => {
  it('waits for the response body to be available as a string and emits it alongside the response', async () => {
    given: 'a response';
    const responseText = 'test';
    const response = mock<Response>();
    response.text.mockImplementationOnce(() => Promise.resolve(responseText));
    and: 'a with response as text operator function';
    const operatorFunction = withResponseAsText();
    when: 'applying the operator to a response';
    const $ = of(response).pipe(operatorFunction);
    expect: 'the result to be the response and the payload as a string';
    const result = await firstValueFrom($);
    expect(response.text).toHaveBeenCalledTimes(1);
    expect(result).toEqual([response, responseText]);
  });
});
