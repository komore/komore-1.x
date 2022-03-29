import { Temporal } from '@js-temporal/polyfill';
import { dateToEndOfMonth } from './date-to-end-of-month';

describe('Date to end of month', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-01', '2020-01-31'],
    [Temporal.PlainDate, '2020-01-31', '2020-01-31'],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', '2020-01-31T12:34:56.789'],
    [Temporal.ZonedDateTime, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', '2020-01-31T12:34:56.789+01:00[Europe/Paris]'],
    [Temporal.PlainMonthDay, '01-01', '01-31'],
  ])('returns a temporal occuring on the last day of the same month', (temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the date at the end of the month';
    const result = dateToEndOfMonth(temporal);

    expect: 'a temporal occuring on the last day of the same month to have been returned';
    expect(result.toString()).toBe(expectedResult);
  });
});
