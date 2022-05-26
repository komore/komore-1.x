import { jsonToObject } from './json-to-object';

describe('JSON to object', () => {
  type TestType = Readonly<{ test: string }>;

  it('deserializes a JSON string to an object', () => {
    given: 'a JSON string';
    const jsonString = '{"test":"string"}';
    when: 'creating a function that parses a JSON string';
    const func = jsonToObject<TestType>();
    and: 'calling it with the JSON string';
    const object = func(jsonString);
    then: 'the value has been deserialized from JSON';
    expect(object).toStrictEqual({ test: 'string' });
  });

  it('deserializes a JSON string to an object, using a reviver', () => {
    given: 'a JSON string';
    const jsonString = '{"test":"string"}';
    and: 'a reviver';
    const reviver = (key: string, value: unknown) => (key === '' ? value : `${value}${value}`);
    when: 'creating a function that parses a JSON string, using a reviver';
    const func = jsonToObject<TestType>(reviver);
    and: 'calling it with the JSON string';
    const object = func(jsonString);
    then: 'the value has been deserialized from JSON';
    expect(object).toStrictEqual({ test: 'stringstring' });
  });
});
