import { lastValueFrom, of } from 'rxjs';
import { serializeJson } from './serialize-json';

describe('Serialize JSON operator function', () => {
  it('serializes an emitted value to JSON', async () => {
    // given: an emitted value serialized to json
    const value$ = of({ test: 'string' }).pipe(serializeJson());
    // when: retrieving the value
    const json = await lastValueFrom(value$);
    // then: the value has been serialized to JSON
    expect(json).toBe('{"test":"string"}');
  });

  it('serializes an emitted value to JSON u', async () => {
    // given: an emitted value serialized to json with a replacer and spaces
    const value$ = of({ test: 'string' }).pipe(serializeJson((key, value) => (key === '' ? value : value + value), 1));
    // when: retrieving the value
    const json = await lastValueFrom(value$);
    // then: the value has been serialized to JSON
    expect(json).toBe('{\n "test": "stringstring"\n}');
  });
});
