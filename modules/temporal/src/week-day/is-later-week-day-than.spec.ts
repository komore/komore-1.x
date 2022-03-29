import { Temporal } from '@js-temporal/polyfill';
import { isLaterWeekDayThan } from './is-later-week-day-than';
import { WeekDay } from './week-day';

describe('Is later week day than', () => {
  const pd = Temporal.PlainDate;
  const pdt = Temporal.PlainDateTime;
  const zdt = Temporal.ZonedDateTime;
  const wed = WeekDay.WEDNESDAY;
  const thu = WeekDay.THURSDAY;

  it.each([
    [pd.from('2020-01-01'), pd.from('2020-01-01'), false],
    [pd.from('2020-01-01'), pd.from('2020-01-02'), true],
    [pd.from('2020-01-01'), pd.from('2019-12-31'), false],
    [pd.from('2020-01-01'), thu, true],
    [pdt.from('2020-01-01T12:34:56.789'), pd.from('2020-01-01T12:34:56.789'), false],
    [pdt.from('2020-01-01T12:34:56.789'), pd.from('2020-01-02T12:34:56.789'), true],
    [pdt.from('2020-01-01T12:34:56.789'), pd.from('2019-12-31T12:34:56.789'), false],
    [pdt.from('2020-01-01T12:34:56.789'), thu, true],
    [
      zdt.from('2020-01-01T12:34:56.789+01:00[Europe/Paris]'),
      pd.from('2020-01-01T12:34:56.789+01:00[Europe/Paris]'),
      false,
    ],
    [
      zdt.from('2020-01-01T12:34:56.789+01:00[Europe/Paris]'),
      pd.from('2020-01-02T12:34:56.789+01:00[Europe/Paris]'),
      true,
    ],
    [
      zdt.from('2020-01-01T12:34:56.789+01:00[Europe/Paris]'),
      pd.from('2019-12-31T12:34:56.789+01:00[Europe/Paris]'),
      false,
    ],
    [zdt.from('2020-01-01T12:34:56.789+01:00[Europe/Paris]'), thu, true],
    [wed, pd.from('2020-01-01'), false],
    [wed, pd.from('2020-01-02'), true],
    [wed, pdt.from('2020-01-01T12:34:56.789'), false],
    [wed, pdt.from('2020-01-02T12:34:56.789'), true],
    [wed, zdt.from('2020-01-01T12:34:56.789+01:00[Europe/Paris]'), false],
    [wed, zdt.from('2020-01-02T12:34:56.789+01:00[Europe/Paris]'), true],
  ])(
    'creates a function that tests whether a temporal or week day occurs on an later week day than a reference temporal or week day',
    (referenceTemporal, temporal, expectedResult) => {
      given: 'a reference temporal or week day';
      and: 'a temporal or week day';

      when: 'creating a function that tests whether a temporal or week day occurs on an later week day than the reference temporal or week day';
      const func = isLaterWeekDayThan(referenceTemporal);
      and: 'calling it with the temporal or week day';
      const result = func(temporal);

      expect: 'true to have been returned if the temporal or week day occurs on an later week day than the reference temporal or week day';
      expect(result).toBe(expectedResult);
    }
  );
});
