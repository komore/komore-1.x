import { Temporal } from '@js-temporal/polyfill';
import { timeToNoon } from './time-to-noon';

describe('Time to noon', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456'],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456'],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]'],
  ])('returns a %s that occurs at noon', (_, temporalClass, value) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'creating a temporal that occurs the same day at noon';
    const result = timeToNoon(temporal);

    expect: 'a temporal occuring at 12:00 to have been returned';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
    expect(hour).toBe(12);
    expect(minute).toBe(0);
    expect(second).toBe(0);
    expect(millisecond).toBe(0);
    expect(microsecond).toBe(0);
    expect(nanosecond).toBe(0);
  });
});
