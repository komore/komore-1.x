import { Temporal } from '@js-temporal/polyfill';
import { toNoon } from './to-noon';

describe('To noon', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456')],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456')],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]')]
  ])('returns a %s that occurs at noon', (_, temporal) => {
    given: 'a temporal';
    when: 'creating a temporal that occurs the same day at noon';
    const result = toNoon(temporal);
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
