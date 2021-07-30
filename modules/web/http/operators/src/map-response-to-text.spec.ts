import { of } from '@komore/reactive';
import { firstValueFrom } from '@komore/reactive/promise';
import { mock } from 'jest-mock-extended';
import { mapResponseToText } from './map-response-to-text';

describe('Map response to text', () => {
  it('waits for the response body to be available as a string', async () => {
    given: 'a response';
    const responseText = 'test';
    const response = mock<Response>();
    response.text.mockImplementationOnce(() => Promise.resolve(responseText));
    and: 'a response as text operator function';
    const operatorFunction = mapResponseToText();
    when: 'applying the operator to a response';
    const $ = of(response).pipe(operatorFunction);
    expect: 'the result to be the payload as a string';
    const result = await firstValueFrom($);
    expect(response.text).toHaveBeenCalledTimes(1);
    expect(result).toBe(responseText);
  });
});
