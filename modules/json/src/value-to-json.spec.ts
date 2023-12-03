import { toJson } from './to-json';

describe('To JSON', () => {
  it('returns a function that serializes its parameter to JSON', async () => {
    given: 'a value';
    const value = { test: 'string' };
    and: 'a function that serializes its parameter to JSON';
    const func = toJson();
    when: 'calling the function';
    const json = func(value);
    expect: 'the returned string to be a JSON representation of the value';
    expect(json).toBe('{"test":"string"}');
  });

  it('returns a function that serializes its parameter to JSON with a replacer and spaces', async () => {
    given: 'a value';
    const value = { test: 'string' };
    and: 'a function that serializes its parameter to JSON with a replacer and spaces';
    const func = toJson((key, value) => {
      if (key === '') {
        return value;
      }
      const strValue = value as string;
      return strValue + strValue;
    }, 1);
    when: 'calling the function';
    const json = func(value);
    expect: 'the returned string to be a JSON representation of the value using the replacer and specified indentation';
    expect(json).toBe('{\n "test": "stringstring"\n}');
  });
});
