import { attributeBooleanValue } from './attribute-boolean-value';

describe('attributeBooleanValue()', () => {
  it.each([
    ['strings', 'test', true],
    ['strings (empty)', '', false],
    ['true', true, true],
    ['false', false, false],
    ['undefined', undefined, false],
    ['null', null, false]
  ])('works with %p', (_, value, exceptedBooleanValue) => {
    expect(attributeBooleanValue(value)).toBe(exceptedBooleanValue);
  });
});
