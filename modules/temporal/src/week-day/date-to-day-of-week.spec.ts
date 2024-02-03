import { feature } from '@komore/testing';

import { dateToDayOfWeek } from './date-to-day-of-week';
import { wednesday } from './wednesday';

feature('Date to day of week', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', wednesday],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', wednesday],
    ['zoned date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', wednesday],
  ])('can get the week day from a %s', (_, temporalClass, value, expectedWeekDay) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the day of the week';
    const result = dateToDayOfWeek(temporal);

    expect: 'the correct day of the week to have been returned';
    expect(result).toBe(expectedWeekDay);
  });
});
