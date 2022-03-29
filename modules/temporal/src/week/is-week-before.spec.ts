import { Temporal } from '@js-temporal/polyfill';
import { isWeekBefore } from './is-week-before';

describe('Is week before', () => {
  const referencePd = Temporal.PlainDate.from('2020-01-08');
  const referencePdt = Temporal.PlainDateTime.from('2020-01-08T12:34:56.789');
  const referenceZdt = Temporal.ZonedDateTime.from('2020-01-08T12:34:56.789[Europe/Paris]');

  it.each([
    ['plain date', referencePd, Temporal.PlainDate, '2020-01-04', true],
    ['plain date', referencePd, Temporal.PlainDate, '2020-01-07', false],
    ['plain date', referencePd, Temporal.PlainDate, '2020-01-11', false],
    ['plain date time', referencePdt, Temporal.PlainDateTime, '2020-01-04T12:34:56.789', true],
    ['plain date time', referencePdt, Temporal.PlainDateTime, '2020-01-07T12:34:56.789', false],
    ['plain date time', referencePdt, Temporal.PlainDateTime, '2020-01-11T12:34:56.789', false],
    ['zoned date time', referenceZdt, Temporal.ZonedDateTime, '2020-01-04T12:34:56.789[Europe/Paris]', true],
    ['zoned date time', referenceZdt, Temporal.ZonedDateTime, '2020-01-07T12:34:56.789[Europe/Paris]', false],
    ['zoned date time', referenceZdt, Temporal.ZonedDateTime, '2020-01-11T12:34:56.789[Europe/Paris]', false],
  ])(
    'can test whether a %s occurs a week before a reference temporal temporal',
    (_, referenceTemporal, temporalClass, value, expectedResult) => {
      given: 'a temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that tests whether a temporal occurs a week before a reference temporal';
      const func = isWeekBefore(referenceTemporal);
      and: 'calling it';
      const result = func(temporal);

      expect: 'true to be returned if the temporal occurs during the week before the reference temporal';
      expect(result).toBe(expectedResult);
    }
  );

  it.each([
    ['2020-01-01', '2019-12-29', true],
    ['2020-01-01', '2019-12-30', false],
    ['2020-01-01', '2019-12-31', false],
    ['2019-12-31', '2019-12-30', false],
    ['2019-12-31', '2019-12-29', true],
    ['2019-12-28', '2019-12-27', false],
  ])('can handle weeks overlapping a year', (referenceValue, value, expectedResult) => {
    given: 'a reference temporal and a temporal';
    const referenceTemporal = Temporal.PlainDate.from(referenceValue);
    const temporal = Temporal.PlainDate.from(value);

    when: 'creating a function that tests whether a temporal occurs a week before a reference temporal';
    const func = isWeekBefore(referenceTemporal);
    and: 'calling it';
    const result = func(temporal);

    expect: 'true to be returned if the temporal occurs during the week before the reference temporal';
    expect(result).toBe(expectedResult);
  });
});
