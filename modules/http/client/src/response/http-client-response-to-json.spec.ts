import { firstValueFrom } from '@komore/reactive';
import { expectTypeOf, feature, mock } from '@komore/testing';

import { httpClientResponseToJson } from './http-client-response-to-json';

feature('HTTP client response to JSON', {
  async 'waits for the response body to be available as a JSON object'() {
    given: 'a response';
    const responseJson: TestJson = { value: 42 };
    const response = mock<Response>();
    response.json.mockImplementationOnce(() => Promise.resolve(responseJson));

    when: 'creating a function that returns a response as JSON';
    const func = httpClientResponseToJson<TestJson>();
    and: 'calling it';
    const result$ = func(response);

    expect: 'the result to be the payload as a JSON object';
    const result = await firstValueFrom(result$);
    expect(response.json).toHaveBeenCalledTimes(1);
    expect(result).toBe(responseJson);
    and: 'the emitted value type to be the specified type';
    expectTypeOf(result).toEqualTypeOf<TestJson>();
  },
  async 'defaults to Record<string, unknown> when no type is specified'() {
    given: 'a response';
    const response = mock<Response>();
    response.json.mockImplementationOnce(() => Promise.resolve(42));

    when: 'creating a function that returns a response as JSON';
    const func = httpClientResponseToJson();
    and: 'calling it';
    const result$ = func(response);

    expect: 'the type to have defaulted to Record<string, unknown>';
    const result = await firstValueFrom(result$);
    expectTypeOf(result).toBeUnknown();
  },
});

interface TestJson {
  readonly value: number;
}
