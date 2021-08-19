import { of } from '@komore/reactive';
import { firstValueFrom } from '@komore/reactive/promise';
import { expectTypeOf } from 'expect-type';
import { mock } from 'jest-mock-extended';
import { mapResponseToJson } from './map-response-to-json';

describe('Map response to JSON', () => {
  interface TestJson {
    readonly value: number;
  }

  it('waits for the response body to be available as a JSON object', async () => {
    given: 'a response';
    const responseJson: TestJson = { value: 42 };
    const response = mock<Response>();
    response.json.mockImplementationOnce(() => Promise.resolve(responseJson));
    and: 'a response as JSON operator function';
    const operatorFunction = mapResponseToJson<TestJson>();
    when: 'applying the operator to a response';
    const $ = of(response).pipe(operatorFunction);
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
    and: 'a response as JSON operator function';
    const operatorFunction = mapResponseToJson();
    when: 'applying the operator to a response';
    const $ = of(response).pipe(operatorFunction);
    expect: 'the type to have defaulted to Record<string, unknown>';
    const result = await firstValueFrom($);
    expectTypeOf(result).toEqualTypeOf<Record<string, unknown>>();
  });
});
