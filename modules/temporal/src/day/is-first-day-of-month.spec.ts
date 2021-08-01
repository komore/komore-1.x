import { Temporal } from '@js-temporal/polyfill';
import { isFirstDayOfMonth } from './is-first-day-of-month';

describe('Is first day of month', () => {
  it.each([
    [Temporal.PlainDate.from('2020-01-01'), true],
    [Temporal.PlainDate.from('2020-01-02'), false],
    [Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), true],
    [Temporal.PlainDateTime.from('2020-01-02T12:34:56.789'), false],
    [Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), true],
    [Temporal.ZonedDateTime.from('2020-01-02T12:34:56.789[Europe/Paris]'), false],
    [Temporal.PlainMonthDay.from('01-01'), true],
    [Temporal.PlainMonthDay.from('01-02'), false]
  ])('can test whether a temporal occurs on the first day of the month', (temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether it occurs on the first day of the month';
    const result = isFirstDayOfMonth(temporal);
    expect: 'whether the temporal occurs on the first day of the month to have been returned';
    expect(result).toBe(expectedResult);
  });
});
