import { Temporal } from '@js-temporal/polyfill';
import { durationToIntervalUntil } from './duration-to-interval-until';

describe('Duration to interval until', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-02', 'P1D', '2020-01-01'],
    [Temporal.PlainDate, '2019-12-31', '-P1D', '2020-01-01'],
    [Temporal.PlainDateTime, '2020-01-02T12:34:56.789', 'P1D', '2020-01-01T12:34:56.789'],
    [Temporal.ZonedDateTime, '2020-01-02T12:34:56.789[Europe/Paris]', 'P1D', '2020-01-01T12:34:56.789[Europe/Paris]'],
    [Temporal.PlainTime, '13:34:56.789', 'PT1H', '12:34:56.789'],
    [Temporal.PlainYearMonth, '2020-02', 'P1M', '2020-01'],
    [Temporal.PlainMonthDay, '01-02', 'P1D', '01-01'],
  ])(
    'can create a function that returns an interval until a reference temporal',
    (temporalClass, referenceValue, value, expectedStart) => {
      given: 'a reference temporal';
      const referenceTemporal = temporalClass.from(referenceValue);
      and: 'a duration';
      const duration = Temporal.Duration.from(value);

      when: 'creating a function that returns an interval until the reference temporal';
      const func = durationToIntervalUntil(referenceTemporal);
      and: 'calling it with the duration';
      const interval = func(duration);

      expect: 'the correct duration from the temporal to the reference temporal to have been returned';
      const expectedStartTemporal = temporalClass.from(expectedStart);
      expect(interval.end).toBe(referenceTemporal);
      expect(interval.start).toStrictEqual(expectedStartTemporal);
    }
  );
});
