import { Temporal } from '@js-temporal/polyfill';
import { isNoon } from './is-noon';

describe('Is noon', () => {
  it.each([
    ['12:34:56.789123456', false],
    ['12:00:00.000000001', false],
    ['12:00:00.000000000', true]
  ])('can test whether a plain time is noon', (plainTimeString, expectedResult) => {
    given: 'a plain time';
    const plainTime = Temporal.PlainTime.from(plainTimeString);
    when: 'testing whether the plain time is noon';
    const result = isNoon(plainTime);
    expect: 'true to be returned when the plain time is noon';
    expect(result).toBe(expectedResult);
  });
});
