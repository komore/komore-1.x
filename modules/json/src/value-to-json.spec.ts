import { feature } from '@komore/testing';

import { valueToJson } from './value-to-json';

feature('Value to JSON', {
  'returns a function that serializes its parameter to JSON'() {
    given: 'a value';
    const value = { test: 'string' };
    and: 'a function that serializes its parameter to JSON';
    const func = valueToJson();

    when: 'calling the function';
    const json = func(value);

    expect: 'the returned string to be a JSON representation of the value';
    json === '{"test":"string"}';
  },
  'returns a function that serializes its parameter to JSON with a replacer and spaces'() {
    given: 'a value';
    const value = { test: 'string' };
    and: 'a function that serializes its parameter to JSON with a replacer and spaces';
    const func = valueToJson((key, value) => {
      if (key === '') {
        return value;
      }
      const strValue = value as string;
      return strValue + strValue;
    }, 1);

    when: 'calling the function';
    const json = func(value);

    expect: 'the returned string to be a JSON representation of the value using the replacer and specified indentation';
    json === '{\n "test": "stringstring"\n}';
  },
});
