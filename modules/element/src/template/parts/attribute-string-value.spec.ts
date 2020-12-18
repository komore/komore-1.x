import { attributeStringValue } from './attribute-string-value';

describe('attributeStringValue()', () => {
  it.each([
    ['strings', 'test', 'test'],
    ['strings (empty)', '', ''],
    ['true', true, 'true'],
    ['false', false, 'false'],
    ['undefined', undefined, ''],
    ['null', null, '']
  ])('works with %p', (_, value, exceptedStringValue) => {
    expect(attributeStringValue(value)).toBe(exceptedStringValue);
  });
});
