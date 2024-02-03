import { feature } from '@komore/testing';

import { dateToStartOfYear } from './date-to-start-of-year';

feature('Date to start of year', () => {
  it.each([
    [Temporal.PlainDate, '2020-02-15', '2020-01-01'],
    [Temporal.PlainDateTime, '2020-02-15T12:34:56.789', '2020-01-01T12:34:56.789'],
    [
      Temporal.ZonedDateTime,
      '2020-02-15T12:34:56.789+01:00[Europe/Paris]',
      '2020-01-01T12:34:56.789+01:00[Europe/Paris]',
    ],
    [Temporal.PlainYearMonth, '2020-02', '2020-01'],
    [Temporal.PlainMonthDay, '02-15', '01-01'],
  ])(
    "returns a temporal that occurs on the first day of another temporal's year",
    (temporalClass, value, expectedResult) => {
      given: 'a temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a temporal that occurs on the first day of the same year';
      const result = dateToStartOfYear(temporal);

      expect: 'a temporal occuring on the first day of the same year to have been returned';
      expect(result.toString()).toBe(expectedResult);
    }
  );
});
