import { feature } from '@komore/testing';

import { isFirstDayOfMonth } from './is-first-day-of-month';

feature('Is first day of month', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-01', true],
    [Temporal.PlainDate, '2020-01-02', false],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', true],
    [Temporal.PlainDateTime, '2020-01-02T12:34:56.789', false],
    [Temporal.ZonedDateTime, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', true],
    [Temporal.ZonedDateTime, '2020-01-02T12:34:56.789+01:00[Europe/Paris]', false],
    [Temporal.PlainMonthDay, '01-01', true],
    [Temporal.PlainMonthDay, '01-02', false],
  ])('can test whether a temporal occurs on the first day of the month', (temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether it occurs on the first day of the month';
    const result = isFirstDayOfMonth(temporal);

    expect: 'whether the temporal occurs on the first day of the month to have been returned';
    expect(result).toBe(expectedResult);
  });
});
