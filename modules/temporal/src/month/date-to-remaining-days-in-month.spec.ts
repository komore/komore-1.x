import { Temporal } from '@js-temporal/polyfill';
import { dateToRemainingDaysInMonth } from './date-to-remaining-days-in-month';

describe('Date to remaining days in month', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-15', 16],
    [Temporal.PlainDateTime, '2020-01-15T12:34:56.789', 16],
    [Temporal.ZonedDateTime, '2020-01-15T12:34:56.789+01:00[Europe/Paris]', 16],
    [Temporal.PlainMonthDay, '01-15', 16],
  ])("returns the number of remaining days until the end of a date's month", (temporalClass, value, expectedDays) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the number of remaining days';
    const remainingDays = dateToRemainingDaysInMonth(temporal);

    expect: 'the correct number of days to have been returned';
    expect(remainingDays).toBe(expectedDays);
  });
});
