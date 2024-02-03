import { feature } from '@komore/testing';

import { isLastDayOfYear } from './is-last-day-of-year';

feature('Is last day of year', () => {
  it.each([
    [Temporal.PlainDate, '2020-12-31', true],
    [Temporal.PlainDate, '2020-11-30', false],
    [Temporal.PlainDateTime, '2020-12-31T12:34:56.789', true],
    [Temporal.PlainDateTime, '2020-11-30T12:34:56.789', false],
    [Temporal.ZonedDateTime, '2020-12-31T12:34:56.789+01:00[Europe/Paris]', true],
    [Temporal.ZonedDateTime, '2020-11-30T12:34:56.789+01:00[Europe/Paris]', false],
  ])('can test whether a temporal occurs on the last day of the year', (temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether it occurs on the last day of the year';
    const result = isLastDayOfYear(temporal);

    expect: 'whether the temporal occurs on the last day of the year to have been returned';
    expect(result).toBe(expectedResult);
  });
});
