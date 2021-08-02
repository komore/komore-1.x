import { Temporal } from '@js-temporal/polyfill';
import { toStartOfHour } from './to-start-of-hour';

describe('To start of hour', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456')],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456')],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]')]
  ])('can round a %s to the start of the hour', (_, temporal) => {
    given: 'a temporal';
    when: 'rounding to the hour';
    const result = toStartOfHour(temporal);
    expect: 'a temporal time rounded to the hour to have been returned';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
    expect(hour).toBe(temporal.hour);
    expect(minute).toBe(0);
    expect(second).toBe(0);
    expect(millisecond).toBe(0);
    expect(microsecond).toBe(0);
    expect(nanosecond).toBe(0);
  });
});
