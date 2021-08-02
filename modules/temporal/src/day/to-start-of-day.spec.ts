import { Temporal } from '@js-temporal/polyfill';
import { toStartOfDay } from './to-start-of-day';

describe('To start of day', () => {
  it('can return a plain time that occurs at the start of the day', () => {
    given: 'a plain time';
    const temporal = Temporal.PlainTime.from('12:34:56.789');
    when: 'getting a temporal at the start of the day';
    const result = toStartOfDay(temporal);
    expect: 'a temporal at 00:00:00.000000000 to have been returned';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
    expect(hour).toBe(0);
    expect(minute).toBe(0);
    expect(second).toBe(0);
    expect(millisecond).toBe(0);
    expect(microsecond).toBe(0);
    expect(nanosecond).toBe(0);
  });

  it.each([
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789')],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]')]
  ])('can return a %s that occurs at the start of the day', (_, temporal) => {
    given: 'a temporal';
    when: 'getting a temporal at the start of the day';
    const result = toStartOfDay(temporal);
    expect: 'a temporal at 00:00:00.000000000 to have been returned';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
    expect(hour).toBe(0);
    expect(minute).toBe(0);
    expect(second).toBe(0);
    expect(millisecond).toBe(0);
    expect(microsecond).toBe(0);
    expect(nanosecond).toBe(0);
    and: 'the date units to remain untouched';
    const { year, month, day } = result;
    expect(year).toBe(temporal.year);
    expect(month).toBe(temporal.month);
    expect(day).toBe(temporal.day);
  });
});
