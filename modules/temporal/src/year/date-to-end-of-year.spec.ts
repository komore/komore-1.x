import { feature } from '@komore/testing';

import { dateToEndOfYear } from './date-to-end-of-year';

feature('Date to end of year', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-01', '2020-12-31'],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', '2020-12-31T12:34:56.789'],
    [
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789+01:00[Europe/Paris]',
      '2020-12-31T12:34:56.789+01:00[Europe/Paris]',
    ],
    [Temporal.PlainYearMonth, '2020-01', '2020-12'],
    [Temporal.PlainMonthDay, '01-01', '12-31'],
  ])(
    "returns a temporal that occurs on the last day of another temporal's year",
    (temporalClass, value, expectedResult) => {
      given: 'a temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a temporal that occurs on the last day of the same year';
      const result = dateToEndOfYear(temporal);

      expect: 'a temporal occuring on the last day of the same year to have been returned';
      result.toString() === expectedResult;
    }
  );
});
