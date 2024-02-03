import { feature } from '@komore/testing';

import { durationToIntervalSince } from './duration-to-interval-since';

feature('Duration to interval since', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-01', 'P1D', '2020-01-02'],
    [Temporal.PlainDate, '2020-01-01', '-P1D', '2019-12-31'],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 'P1D', '2020-01-02T12:34:56.789'],
    [Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', 'P1D', '2020-01-02T12:34:56.789[Europe/Paris]'],
    [Temporal.PlainTime, '12:34:56.789', 'PT1H', '13:34:56.789'],
    [Temporal.PlainYearMonth, '2020-01', 'P1M', '2020-02'],
    [Temporal.PlainMonthDay, '01-01', 'P1D', '01-02'],
  ])(
    'can create a function that returns an interval since a reference temporal',
    (temporalClass, referenceValue, value, expectedEnd) => {
      given: 'a reference temporal';
      const referenceTemporal = temporalClass.from(referenceValue);
      and: 'a duration';
      const duration = Temporal.Duration.from(value);

      when: 'creating a function that returns an interval since the reference temporal';
      const func = durationToIntervalSince(referenceTemporal);
      and: 'calling it with the duration';
      const interval = func(duration);

      expect: 'the correct duration from the reference temporal to the temporal to have been returned';
      const expectedEndTemporal = temporalClass.from(expectedEnd);
      expect(interval.start).toBe(referenceTemporal);
      expect(interval.end).toStrictEqual(expectedEndTemporal);
    }
  );
});
