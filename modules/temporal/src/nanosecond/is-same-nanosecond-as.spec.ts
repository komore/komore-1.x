import { Temporal } from '@js-temporal/polyfill';
import { isSameNanosecondAs } from './is-same-nanosecond-as';

describe('Is same nanosecond as', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', '12:34:56.789123456', true],
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', '12:34:56.789123455', false],
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', '12:34:55.789123456', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', '2020-01-01T12:34:56.789123456', true],
    [
      'plain date time',
      Temporal.PlainDateTime,
      '2020-01-01T12:34:56.789123456',
      '2020-01-01T12:34:56.789123455',
      false,
    ],
    [
      'plain date time',
      Temporal.PlainDateTime,
      '2020-01-01T12:34:56.789123456',
      '2020-01-01T12:34:55.789123456',
      false,
    ],
    [
      'zoned date time',
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789123456[Europe/Paris]',
      '2020-01-01T12:34:56.789123456[Europe/Paris]',
      true,
    ],
    [
      'zoned date time',
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789123456[Europe/Paris]',
      '2020-01-01T12:34:56.789123455[Europe/Paris]',
      false,
    ],
    [
      'zoned date time',
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789123456[Europe/Paris]',
      '2020-01-01T12:34:55.789123456[Europe/Paris]',
      false,
    ],
    [
      'zoned date time',
      Temporal.ZonedDateTime,
      '2020-01-01T12:34:56.789123456[Europe/Paris]',
      '2020-01-01T12:34:56.789123456[Europe/London]',
      false,
    ],
  ])(
    'can create a function that tests whether a %p occurs during the same nanosecond',
    (_, temporalClass, reference, value, expectedResult) => {
      given: `a reference temporal ${reference}`;
      const referenceTemporal = temporalClass.from(reference);
      and: `a temporal ${value}`;
      const temporal = temporalClass.from(value);

      when: 'creating a function that tests whether a temporal occurs at the same nanosecond as a reference temporal';
      const func = isSameNanosecondAs(referenceTemporal);
      and: 'calling it';
      const result = func(temporal);

      expect: 'true to have been returned if the temporal and reference temporal occur at the same nanosecond';
      expect(result).toBe(expectedResult);
    }
  );
});
