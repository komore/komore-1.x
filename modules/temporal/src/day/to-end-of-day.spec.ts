import { Temporal } from 'proposal-temporal';
import { toEndOfDay } from './to-end-of-day';

describe('To end of day', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789')],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789')],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]')]
  ])('can return a %s that occurs at the end of the day', (_, temporal) => {
    given: 'a temporal';
    when: 'getting a temporal at the end of the day';
    const result = toEndOfDay(temporal);
    expect: 'a temporal at 23:59:59.999999999 to have been returned';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
    expect(hour).toBe(23);
    expect(minute).toBe(59);
    expect(second).toBe(59);
    expect(millisecond).toBe(999);
    expect(microsecond).toBe(999);
    expect(nanosecond).toBe(999);
  });
});
