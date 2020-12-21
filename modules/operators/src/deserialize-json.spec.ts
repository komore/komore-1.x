import { lastValueFrom, of } from 'rxjs';
import { deserializeJson } from './deserialize-json';

describe('Deserialize JSON operator function', () => {
  type TestType = Readonly<{ test: string }>;

  it('deserializes an emitted value from JSON', async () => {
    // given: an emitted value deserialized from JSON
    const value$ = of('{"test":"string"}').pipe(deserializeJson<TestType>());
    // when: retrieving the value
    const json = await lastValueFrom(value$);
    // then: the value has been serialized to JSON
    expect(json).toStrictEqual({ test: 'string' });
  });
});
