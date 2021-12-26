import { Temporal } from '@js-temporal/polyfill';
import { isNoon } from './is-noon';

describe('Is noon', () => {
  it.each([
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:00:00.000000001'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:00:00.000000000'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:00:00.000000001[Europe/Paris]'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:00:00.000000000[Europe/Paris]'), true],
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), false],
    ['plain time', Temporal.PlainTime.from('12:00:00.000000001'), false],
    ['plain time', Temporal.PlainTime.from('12:00:00.000000000'), true]
  ])('can test whether a %s occurs at noon', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs at noon';
    const result = isNoon(temporal);
    expect: 'true to be returned when the temporal occurs at noon';
    expect(result).toBe(expectedResult);
  });
});
