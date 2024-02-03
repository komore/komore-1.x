import { feature } from '@komore/testing';

import { isLastDayOfMonth } from './is-last-day-of-month';

feature('Is last day of month', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-31', true],
    [Temporal.PlainDate, '2020-01-30', false],
    [Temporal.PlainDateTime, '2020-01-31T12:34:56.789', true],
    [Temporal.PlainDateTime, '2020-01-30T12:34:56.789', false],
    [Temporal.ZonedDateTime, '2020-01-31T12:34:56.789+01:00[Europe/Paris]', true],
    [Temporal.ZonedDateTime, '2020-01-30T12:34:56.789+01:00[Europe/Paris]', false],
    [Temporal.PlainMonthDay, '01-31', true],
    [Temporal.PlainMonthDay, '01-30', false],
  ])('can test whether a temporal occurs on the last day of the month', (temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether it occurs on the last day of the month';
    const result = isLastDayOfMonth(temporal);

    expect: 'whether the temporal occurs on the last day of the month to have been returned';
    expect(result).toBe(expectedResult);
  });
});
