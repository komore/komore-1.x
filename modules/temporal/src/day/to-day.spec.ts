import { Temporal } from 'proposal-temporal';
import { toDay } from './to-day';

describe('To day', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-01'), 1],
    ['plain date', Temporal.PlainDate.from('2020-01-15'), 15],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), 1],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-15T12:34:56.789'), 15],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), 1],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-15T12:34:56.789[Europe/Paris]'), 15]
  ])('can return the day of the month from a %s', (_, temporal, expectedDay) => {
    given: 'a temporal';
    when: 'getting the day of the month';
    const result = toDay(temporal);
    expect: 'the correct day to have been returned';
    expect(result).toBe(expectedDay);
  });
});
