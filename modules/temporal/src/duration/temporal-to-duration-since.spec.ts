import { feature } from '@komore/testing';

import { temporalToDurationSince } from './temporal-to-duration-since';

feature('Temporal to duration since', () => {
  it.each([
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789012345', '2020-01-02T00:34:56.789012345', 'PT12H'],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789012345', '2020-01-01T00:34:56.789012345', '-PT12H'],
    [Temporal.PlainDateTime, '2020-01-01T12:34:56.789012345', '2020-01-01T12:34:56.789012345', 'PT0S'],
    [
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789012345[Europe/Paris]',
      '2020-01-02T00:34:56.789012345[Europe/Paris]',
      'PT12H',
    ],
    [
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789012345[Europe/Paris]',
      '2020-01-01T00:34:56.789012345[Europe/Paris]',
      '-PT12H',
    ],
    [
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789012345[Europe/Paris]',
      '2020-01-01T12:34:56.789012345[Europe/Paris]',
      'PT0S',
    ],
    [Temporal.PlainDate, '2020-01-01', '2020-01-02', 'P1D'],
    [Temporal.PlainDate, '2020-01-01', '2019-12-31', '-P1D'],
    [Temporal.PlainDate, '2020-01-01', '2020-01-01', 'PT0S'],
    [Temporal.PlainTime, '12:34:56.789012345', '12:34:58.789012345', 'PT2S'],
    [Temporal.PlainTime, '12:34:56.789012345', '12:34:54.789012345', '-PT2S'],
    [Temporal.PlainTime, '12:34:56.789012345', '12:34:56.789012345', 'PT0S'],
  ])(
    'creates a function that returns a duration since a reference temporal',
    (temporalClass, referenceValue, value, expectedResult) => {
      given: 'a reference temporal';
      const referenceTemporal = temporalClass.from(referenceValue);
      and: 'a temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that returns a duration since the reference temporal';
      const func = temporalToDurationSince(referenceTemporal);
      and: 'calling it with the temporal';
      const result = func(temporal);

      expect: 'the duration since the reference temporal to have been returned';
      expect(result.toString()).toBe(expectedResult);
    }
  );
});
