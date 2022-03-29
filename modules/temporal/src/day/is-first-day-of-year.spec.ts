import { Temporal } from '@js-temporal/polyfill';
import { isFirstDayOfYear } from './is-first-day-of-year';

describe('Is first day of year', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-01', true],
    [Temporal.PlainDate, '2020-01-06', false],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', true],
    [Temporal.PlainDateTime, '2020-01-06T12:34:56.789', false],
    [Temporal.ZonedDateTime, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', true],
    [Temporal.ZonedDateTime, '2020-01-06T12:34:56.789+01:00[Europe/Paris]', false],
  ])('can test whether a temporal occurs on the first day of the year', (temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether it occurs on the first day of the year';
    const result = isFirstDayOfYear(temporal);

    expect: 'whether the temporal occurs on the first day of the year to have been returned';
    expect(result).toBe(expectedResult);
  });
});
