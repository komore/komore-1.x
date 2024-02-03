import { feature } from '@komore/testing';

import { dateToElapsedDaysInMonth } from './date-to-elapsed-days-in-month';

feature('Date to elapsed days in month', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-15', 14],
    [Temporal.PlainDateTime, '2020-01-15T12:34:56.789', 14],
    [Temporal.ZonedDateTime, '2020-01-15T12:34:56.789+01:00[Europe/Paris]', 14],
    [Temporal.PlainMonthDay, '01-15', 14],
  ])("returns the number of elapsed days until the end of a date's month", (temporalClass, value, expectedDays) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the number of elapsed days';
    const elapsedDays = dateToElapsedDaysInMonth(temporal);

    expect: 'the correct number of days to have been returned';
    expect(elapsedDays).toBe(expectedDays);
  });
});
