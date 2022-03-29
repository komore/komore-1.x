import { Temporal } from '@js-temporal/polyfill';
import { dateToDayOfWeek } from './date-to-day-of-week';
import { WeekDay } from './week-day';

describe('Date to day of week', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', WeekDay.WEDNESDAY],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', WeekDay.WEDNESDAY],
    ['zoned date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', WeekDay.WEDNESDAY],
  ])('can get the week day from a %s', (_, temporalClass, value, expectedWeekDay) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the day of the week';
    const result = dateToDayOfWeek(temporal);

    expect: 'the correct day of the week to have been returned';
    expect(result).toBe(expectedWeekDay);
  });
});
