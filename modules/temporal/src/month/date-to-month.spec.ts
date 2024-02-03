import { feature } from '@komore/testing';

import { dateToMonth } from './date-to-month';
import { Month } from './month';

feature('Date to month', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', Month.JANUARY],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', Month.JANUARY],
    ['zoned date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', Month.JANUARY],
    ['year month', Temporal.PlainYearMonth, '2020-01', Month.JANUARY],
    ['month day', Temporal.PlainMonthDay, '01-01', Month.JANUARY],
  ])('can get the month from a %s', (_, temporalClass, value, expectedMonth) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the month';
    const month = dateToMonth(temporal);

    expect: 'the correct month to have been returned';
    expect(month).toBe(expectedMonth);
  });
});
