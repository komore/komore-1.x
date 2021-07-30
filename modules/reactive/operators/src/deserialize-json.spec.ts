import { lastValueFrom, of } from 'rxjs';
import { deserializeJson } from './deserialize-json';

describe('Deserialize JSON operator', () => {
  type TestType = Readonly<{ test: string }>;

  it('deserializes an emitted value from JSON', async () => {
    given: 'an emitted value deserialized from JSON';
    const value$ = of('{"test":"string"}').pipe(deserializeJson<TestType>());
    when: 'retrieving the value';
    const object = await lastValueFrom(value$);
    then: 'the value has been deserialized from JSON';
    expect(object).toStrictEqual({ test: 'string' });
  });

  it('deserializes an emitted value from JSON with a reviver', async () => {
    given: 'an emitted value deserialized from JSON with a reviver';
    const value$ = of('{"test":"string"}').pipe(
      deserializeJson<TestType>((key, value) => (key === '' ? value : value + value))
    );
    when: 'retrieving the value';
    const object = await lastValueFrom(value$);
    then: 'the value has been deserialized from JSON';
    expect(object).toStrictEqual({ test: 'stringstring' });
  });
});
