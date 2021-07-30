

import { Temporal } from 'proposal-temporal';
import { isWeekDay } from './is-week-day';
import { WeekDay } from './week-day';

describe('Is week day', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-01'), WeekDay.WEDNESDAY, true],
    ['plain date', Temporal.PlainDate.from('2020-01-02'), WeekDay.WEDNESDAY, false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), WeekDay.WEDNESDAY, true],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-02T12:34:56.789'), WeekDay.WEDNESDAY, false],
    ['zoned date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), WeekDay.WEDNESDAY, true],
    ['zoned date time', Temporal.PlainDateTime.from('2020-01-02T12:34:56.789[Europe/Paris]'), WeekDay.WEDNESDAY, false]
  ])('can test whether a %s occurs on a specific week day', (_, temporal, weekDay, expectedResult) => {
    given: 'a temporal';
    when: 'creating a function that tests whether a temporal occurs on a specific week day'
    const func = isWeekDay(weekDay);
    and: 'calling the function';
    const result = func(temporal);
    expect: 'the week day to have been correctly tested';
    expect(result).toBe(expectedResult);
  });
});
