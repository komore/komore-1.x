import { Temporal } from '@js-temporal/polyfill';
import { timeToNanosecond } from './time-to-nanosecond';

describe('Time to nanosecond', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 456],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 456],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 456],
  ])('can return the nanosecond from a %s', (_, temporalClass, value, expectedNanosecond) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the nanosecond';
    const result = timeToNanosecond(temporal);

    expect: 'the correct nanosecond to have been returned';
    expect(result).toBe(expectedNanosecond);
  });
});
