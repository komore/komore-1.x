import { Temporal } from '@js-temporal/polyfill';
import { isLastDayOfWeek } from './is-last-day-of-week';

describe('Is last day of week', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-05', true],
    [Temporal.PlainDate, '2020-01-01', false],
    [Temporal.PlainDateTime, '2020-01-05T12:34:56.789', true],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', false],
    [Temporal.ZonedDateTime, '2020-01-05T12:34:56.789+01:00[Europe/Paris]', true],
    [Temporal.ZonedDateTime, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', false],
  ])('can test whether a temporal occurs on the last day of the week', (temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether it occurs on the last day of the week';
    const result = isLastDayOfWeek(temporal);

    expect: 'whether the temporal occurs on the last day of the week to have been returned';
    expect(result).toBe(expectedResult);
  });
});
