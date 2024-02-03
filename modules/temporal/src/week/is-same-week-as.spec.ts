import { feature } from '@komore/testing';

import { isSameWeekAs } from './is-same-week-as';

feature('Is same week as', () => {
  it.each([
    [Temporal.PlainDate, '2020-01-01', '2020-01-02', true],
    [Temporal.PlainDate, '2020-01-01', '2020-01-06', false],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', '2020-01-02T12:34:56.789', true],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789', '2020-01-06T12:34:56.789', false],
    [
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789+01:00[Europe/Paris]',
      '2020-01-02T12:34:56.789+01:00[Europe/Paris]',
      true,
    ],
    [
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789+01:00[Europe/Paris]',
      '2020-01-06T12:34:56.789+01:00[Europe/Paris]',
      false,
    ],
  ])(
    'creates a function that tests whether a temporal occurs on the same week as a reference temporal',
    (temporalClass, referenceValue, value, expectedResult) => {
      given: 'a reference temporal';
      const referenceTemporal = temporalClass.from(referenceValue);
      and: 'a temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that tests whether a temporal occurs on the same week as the reference temporal';
      const func = isSameWeekAs(referenceTemporal);
      and: 'calling it with the temporal';
      const result = func(temporal);

      expect: 'true to have been returned if the temporal occurs during the same week as the reference temporal';
      expect(result).toBe(expectedResult);
    }
  );
});
