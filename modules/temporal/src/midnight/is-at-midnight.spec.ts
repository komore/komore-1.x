import { Temporal } from '@js-temporal/polyfill';
import { isAtMidnight } from './is-at-midnight';

describe('Is at midnight', () => {
  it.each([
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T00:00:00.000000001'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T00:00:00.000000000'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T00:00:00.000000001[Europe/Paris]'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T00:00:00.000000000[Europe/Paris]'), true],
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), false],
    ['plain time', Temporal.PlainTime.from('00:00:00.000000001'), false],
    ['plain time', Temporal.PlainTime.from('00:00:00.000000000'), true]
  ])('can test whether a %s occurs at midnight', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs at midnight';
    const result = isAtMidnight(temporal);
    expect: 'true to have been returned if the temporal occurs at midnight';
    expect(result).toBe(expectedResult);
  });
});
