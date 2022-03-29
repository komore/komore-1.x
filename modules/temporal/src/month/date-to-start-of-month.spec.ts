import { Temporal } from '@js-temporal/polyfill';
import { dateToStartOfMonth } from './date-to-start-of-month';

describe('Date to start of month', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-15', '2020-01-01'],
    [Temporal.PlainDate, '2020-01-01', '2020-01-01'],
    [Temporal.PlainDateTime, '2020-01-15T12:34:56.789', '2020-01-01T12:34:56.789'],
    [Temporal.ZonedDateTime, '2020-01-15T12:34:56.789+01:00[Europe/Paris]', '2020-01-01T12:34:56.789+01:00[Europe/Paris]'],
    [Temporal.PlainMonthDay, '01-15', '01-01'],
  ])('returns a temporal occuring on the first day of the same month', (temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the date at the start of the month';
    const result = dateToStartOfMonth(temporal);

    expect: 'a temporal occuring on the first day of the same month to have been returned';
    expect(result.toString()).toBe(expectedResult);
  });
});
