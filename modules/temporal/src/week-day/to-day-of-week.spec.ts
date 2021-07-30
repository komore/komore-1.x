import { Temporal } from 'proposal-temporal';
import { toDayOfWeek } from './to-day-of-week';
import { WeekDay } from './week-day';

describe('To day of week', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-01'), WeekDay.WEDNESDAY],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), WeekDay.WEDNESDAY],
    ['zoned date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), WeekDay.WEDNESDAY]
  ])('can get the week day from a %s', (_, temporal, expectedWeekDay) => {
    given: 'a temporal';
    when: 'getting the day of the week';
    const result = toDayOfWeek(temporal);
    expect: 'the correct day of the week to have been returned';
    expect(result).toBe(expectedWeekDay);
  });
});
