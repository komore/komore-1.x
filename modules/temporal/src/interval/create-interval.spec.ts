import { Temporal } from '@js-temporal/polyfill';
import { createInterval } from './create-interval';

describe('Create interval', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-01', '2020-01-02'],
    [Temporal.PlainDate, '2020-01-01', '2020-01-02'],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', '2020-01-02T12:34:56.789'],
    [Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', '2020-01-02T12:34:56.789[Europe/Paris]'],
    [Temporal.PlainTime, '12:34:56.789', '13:34:56.789'],
    [Temporal.PlainYearMonth, '2020-01', '2020-02'],
    [Temporal.PlainMonthDay, '01-01', '01-02'],
  ])('creates an interval', (temporalClass, startValue, endValue) => {
    given: 'start and end temporals';
    const start = temporalClass.from(startValue);
    const end = temporalClass.from(endValue);

    when: 'creating an interval';
    const interval = createInterval(start, end);

    expect: 'the interval object to hold the start and end temporals';
    expect(interval.start).toBe(start);
    expect(interval.end).toBe(end);
  });
});
