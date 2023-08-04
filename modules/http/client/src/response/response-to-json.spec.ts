import { firstValueFrom } from '@komore/reactive';
import { expectTypeOf, mock } from '@komore/testing';

import { responseToJson } from './response-to-json';

describe('HTTP client response to JSON', () => {
  interface TestJson {
    readonly value: number;
  }

  it('waits for the response body to be available as a JSON object', async () => {
    given: 'a response';
    const responseJson: TestJson = { value: 42 };
    const response = mock<Response>();
    response.json.mockImplementationOnce(() => Promise.resolve(responseJson));

    when: 'creating a function that returns a response as JSON';
    const func = responseToJson<TestJson>();
    and: 'calling it';
    const $ = func(response);

    expect: 'the result to be the payload as a JSON object';
    const result = await firstValueFrom($);
    expect(response.json).toHaveBeenCalledTimes(1);
    expect(result).toBe(responseJson);
    and: 'the emitted value type to be the specified type';
    expectTypeOf(result).toEqualTypeOf<TestJson>();
  });

  it('defaults to Record<string, unknown> when no type is specified', async () => {
    given: 'a response';
    const response = mock<Response>();
    response.json.mockImplementationOnce(() => Promise.resolve(42));

    when: 'creating a function that returns a response as JSON';
    const func = responseToJson();
    and: 'calling it';
    const $ = func(response);

    expect: 'the type to have defaulted to Record<string, unknown>';
    const result = await firstValueFrom($);
    expectTypeOf(result).toBeUnknown();
  });
});
