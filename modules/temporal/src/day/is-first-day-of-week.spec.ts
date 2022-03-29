import { Temporal } from '@js-temporal/polyfill';
import { isFirstDayOfWeek } from './is-first-day-of-week';

describe('Is first day of week', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-06', true],
    [Temporal.PlainDate, '2020-01-01', false],
    [Temporal.PlainDateTime, '2020-01-06T12:34:56.789', true],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', false],
    [Temporal.ZonedDateTime, '2020-01-06T12:34:56.789+01:00[Europe/Paris]', true],
    [Temporal.ZonedDateTime, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', false],
  ])('can test whether a temporal occurs on the first day of the week', (temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether it occurs on the first day of the week';
    const result = isFirstDayOfWeek(temporal);

    expect: 'whether the temporal occurs on the first day of the week to have been returned';
    expect(result).toBe(expectedResult);
  });
});
