import { feature } from '@komore/testing';

import { dateToWeekOfYear } from './date-to-week-of-year';

feature('Date to week of year', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', 1],
    ['plain date', Temporal.PlainDate, '2021-01-01', 53],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 1],
    ['plain date time', Temporal.PlainDateTime, '2021-01-01T12:34:56.789', 53],
    ['zoned date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', 1],
    ['zoned date time', Temporal.PlainDateTime, '2021-01-01T12:34:56.789[Europe/Paris]', 53],
  ])('can get the week number from a %s', (_, temporalClass, value, expectedWeek) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the week number of the year';
    const result = dateToWeekOfYear(temporal);

    expect: 'the correct week number to have been returned';
    expect(result).toBe(expectedWeek);
  });
});
