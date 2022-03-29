import { Temporal } from '@js-temporal/polyfill';
import { isLaterYearThan } from './is-later-year-than';

describe('Is later year than', () => {
  const pd = Temporal.PlainDate.from('2020-01-01');
  const pdt = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  const zdt = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
  const pym = Temporal.PlainYearMonth.from('2020-01');

  it.each([
    [2020, Temporal.PlainDate, '2020-01-01', false],
    [2020, Temporal.PlainDate, '2021-01-01', true],
    [2020, Temporal.PlainDate, '2019-01-01', false],
    [2020, Temporal.PlainDateTime, '2020-01-01T12:34:56.789', false],
    [2020, Temporal.PlainDateTime, '2021-01-01T12:34:56.789', true],
    [2020, Temporal.PlainDateTime, '2019-01-01T12:34:56.789', false],
    [2020, Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', false],
    [2020, Temporal.ZonedDateTime, '2021-01-01T12:34:56.789[Europe/Paris]', true],
    [2020, Temporal.ZonedDateTime, '2019-01-01T12:34:56.789[Europe/Paris]', false],
    [2020, Temporal.PlainYearMonth, '2020-01', false],
    [2020, Temporal.PlainYearMonth, '2021-01', true],
    [2020, Temporal.PlainYearMonth, '2019-01', false],
    [pd, Temporal.PlainDate, '2020-01-01', false],
    [pd, Temporal.PlainDate, '2021-01-01', true],
    [pd, Temporal.PlainDate, '2019-01-01', false],
    [pd, Temporal.PlainDateTime, '2020-01-01T12:34:56.789', false],
    [pd, Temporal.PlainDateTime, '2021-01-01T12:34:56.789', true],
    [pd, Temporal.PlainDateTime, '2019-01-01T12:34:56.789', false],
    [pd, Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', false],
    [pd, Temporal.ZonedDateTime, '2021-01-01T12:34:56.789[Europe/Paris]', true],
    [pd, Temporal.ZonedDateTime, '2019-01-01T12:34:56.789[Europe/Paris]', false],
    [pd, Temporal.PlainYearMonth, '2020-01', false],
    [pd, Temporal.PlainYearMonth, '2021-01', true],
    [pd, Temporal.PlainYearMonth, '2019-01', false],
    [pdt, Temporal.PlainDate, '2020-01-01', false],
    [pdt, Temporal.PlainDate, '2021-01-01', true],
    [pdt, Temporal.PlainDate, '2019-01-01', false],
    [pdt, Temporal.PlainDateTime, '2020-01-01T12:34:56.789', false],
    [pdt, Temporal.PlainDateTime, '2021-01-01T12:34:56.789', true],
    [pdt, Temporal.PlainDateTime, '2019-01-01T12:34:56.789', false],
    [pdt, Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', false],
    [pdt, Temporal.ZonedDateTime, '2021-01-01T12:34:56.789[Europe/Paris]', true],
    [pdt, Temporal.ZonedDateTime, '2019-01-01T12:34:56.789[Europe/Paris]', false],
    [pdt, Temporal.PlainYearMonth, '2020-01', false],
    [pdt, Temporal.PlainYearMonth, '2021-01', true],
    [pdt, Temporal.PlainYearMonth, '2019-01', false],
    [zdt, Temporal.PlainDate, '2020-01-01', false],
    [zdt, Temporal.PlainDate, '2021-01-01', true],
    [zdt, Temporal.PlainDate, '2019-01-01', false],
    [zdt, Temporal.PlainDateTime, '2020-01-01T12:34:56.789', false],
    [zdt, Temporal.PlainDateTime, '2021-01-01T12:34:56.789', true],
    [zdt, Temporal.PlainDateTime, '2019-01-01T12:34:56.789', false],
    [zdt, Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', false],
    [zdt, Temporal.ZonedDateTime, '2021-01-01T12:34:56.789[Europe/Paris]', true],
    [zdt, Temporal.ZonedDateTime, '2019-01-01T12:34:56.789[Europe/Paris]', false],
    [zdt, Temporal.PlainYearMonth, '2020-01', false],
    [zdt, Temporal.PlainYearMonth, '2021-01', true],
    [zdt, Temporal.PlainYearMonth, '2019-01', false],
    [pym, Temporal.PlainDate, '2020-01-01', false],
    [pym, Temporal.PlainDate, '2021-01-01', true],
    [pym, Temporal.PlainDate, '2019-01-01', false],
    [pym, Temporal.PlainDateTime, '2020-01-01T12:34:56.789', false],
    [pym, Temporal.PlainDateTime, '2021-01-01T12:34:56.789', true],
    [pym, Temporal.PlainDateTime, '2019-01-01T12:34:56.789', false],
    [pym, Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', false],
    [pym, Temporal.ZonedDateTime, '2021-01-01T12:34:56.789[Europe/Paris]', true],
    [pym, Temporal.ZonedDateTime, '2019-01-01T12:34:56.789[Europe/Paris]', false],
    [pym, Temporal.PlainYearMonth, '2020-01', false],
    [pym, Temporal.PlainYearMonth, '2021-01', true],
    [pym, Temporal.PlainYearMonth, '2019-01', false],
  ])(
    'creates a function that tests whether a temporal with a date occurs later than a year',
    (reference, temporalClass, value, expectedResult) => {
      given: 'a reference';
      and: 'a temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that tests whether a temporal occurs a later year than the reference';
      const func = isLaterYearThan(reference);
      and: 'calling it';
      const result = func(temporal);

      expect: 'true to have been called if the temporal occurs a later year than the reference';
      expect(result).toBe(expectedResult);
    }
  );
});
