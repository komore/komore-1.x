import { Temporal } from '@js-temporal/polyfill';
import { isMidnight } from './is-midnight';

describe('Is midnight', () => {
  it.each([
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T00:00:00.000000001', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T00:00:00.000000000', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T00:00:00.000000001[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T00:00:00.000000000[Europe/Paris]', true],
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', false],
    ['plain time', Temporal.PlainTime, '00:00:00.000000001', false],
    ['plain time', Temporal.PlainTime, '00:00:00.000000000', true],
  ])('can test whether a %s occurs at midnight', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs at midnight';
    const result = isMidnight(temporal);

    expect: 'true to have been returned if the temporal occurs at midnight';
    expect(result).toBe(expectedResult);
  });
});
