import { Temporal } from '@js-temporal/polyfill';
import { isFirstDayOfYear } from './is-first-day-of-year';

describe('Is first day of year', () => {
  it.each([
    [Temporal.PlainDate.from('2020-01-01'), true],
    [Temporal.PlainDate.from('2020-01-06'), false],
    [Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), true],
    [Temporal.PlainDateTime.from('2020-01-06T12:34:56.789'), false],
    [Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), true],
    [Temporal.ZonedDateTime.from('2020-01-06T12:34:56.789[Europe/Paris]'), false]
  ])('can test whether a temporal occurs on the first day of the year', (temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether it occurs on the first day of the year';
    const result = isFirstDayOfYear(temporal);
    expect: 'whether the temporal occurs on the first day of the year to have been returned';
    expect(result).toBe(expectedResult);
  });
});
