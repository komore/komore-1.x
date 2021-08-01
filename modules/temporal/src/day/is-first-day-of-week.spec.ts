import { Temporal } from '@js-temporal/polyfill';
import { isFirstDayOfWeek } from './is-first-day-of-week';

describe('Is first day of week', () => {
  it.each([
    [Temporal.PlainDate.from('2020-01-06'), true],
    [Temporal.PlainDate.from('2020-01-01'), false],
    [Temporal.PlainDateTime.from('2020-01-06T12:34:56.789'), true],
    [Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), false],
    [Temporal.ZonedDateTime.from('2020-01-06T12:34:56.789[Europe/Paris]'), true],
    [Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), false]
  ])('can test whether a temporal occurs on the first day of the week', (temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether it occurs on the first day of the week';
    const result = isFirstDayOfWeek(temporal);
    expect: 'whether the temporal occurs on the first day of the week to have been returned';
    expect(result).toBe(expectedResult);
  });
});
