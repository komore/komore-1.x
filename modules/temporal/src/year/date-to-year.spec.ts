import { Temporal } from '@js-temporal/polyfill';
import { dateToYear } from './date-to-year';

describe('Date to year', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', 2020],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 2020],
    ['zoned date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', 2020],
    ['year month', Temporal.PlainYearMonth, '2020-01', 2020],
  ])('can get the year from a %s', (_, temporalClass, value, expectedYear) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the year';
    const year = dateToYear(temporal);

    expect: 'the correct year to have been returned';
    expect(year).toBe(expectedYear);
  });
});
