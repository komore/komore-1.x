import { feature } from '@komore/testing';

import { createRepeatingInterval } from './create-repeating-interval';

feature('Create repeating interval', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-01', 'P1D', 2],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 'PT1H', 2],
    [Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', 'P1D', 2],
    [Temporal.PlainTime, '12:34:56.789', 'PT1H', 2],
    [Temporal.PlainYearMonth, '2020-01', 'P1M', 2],
    [Temporal.PlainMonthDay, '01-01', 'P1M', 2],
  ])('creates an interval', (temporalClass, startValue, durationValue, repetitions) => {
    given: 'a start temporal and a duration';
    const start = temporalClass.from(startValue);
    const duration = Temporal.Duration.from(durationValue);

    when: 'creating a repeating interval';
    const interval = createRepeatingInterval(start, duration, repetitions);

    expect: 'the interval object to hold the start temporal, the duration and the repetitions';
    expect(interval.start).toBe(start);
    expect(interval.duration).toBe(duration);
    expect(interval.repetitions).toBe(repetitions);
  });
});
