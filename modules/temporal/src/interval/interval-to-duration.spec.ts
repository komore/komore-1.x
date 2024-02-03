import { feature } from '@komore/testing';

import { createInterval } from './create-interval';
import { intervalToDuration } from './interval-to-duration';

feature('Interval to duration', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-01', '2020-01-02', 'P1D'],
    [Temporal.PlainDate, '2020-01-02', '2020-01-01', '-P1D'],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', '2020-01-02T12:34:56.789', 'P1D'],
    [Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', '2020-01-02T12:34:56.789[Europe/Paris]', 'PT24H'],
    [Temporal.PlainTime, '12:34:56.789', '13:34:56.789', 'PT1H'],
    [Temporal.PlainYearMonth, '2020-01', '2020-02', 'P31D'],
    [Temporal.PlainMonthDay, '01-01', '01-02', 'P1D'],
  ])('can return the duration from an interval', (temporalClass, startValue, endValue, expectedDuration) => {
    given: 'an interval';
    const start = temporalClass.from(startValue);
    const end = temporalClass.from(endValue);
    const interval = createInterval(start, end);

    when: 'getting a duration from the interval';
    const duration = intervalToDuration(interval);

    expect: 'the correct absolute duration to have been returned';
    expect(duration.toString()).toBe(expectedDuration);
  });
});
