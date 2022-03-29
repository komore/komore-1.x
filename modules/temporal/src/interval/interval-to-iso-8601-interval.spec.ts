import { Temporal } from '@js-temporal/polyfill';
import { createInterval } from './create-interval';
import { intervalToISO8601Interval } from './interval-to-iso-8601-interval';

describe('Interval to ISO 8601 interval', () => {
  const pd = Temporal.PlainDate;
  const pdt = Temporal.PlainDateTime;
  const zdt = Temporal.ZonedDateTime;
  const pt = Temporal.PlainTime;
  const pym = Temporal.PlainYearMonth;
  const pmd = Temporal.PlainMonthDay;

  it.each([
    [pd, '2020-01-01', '2020-01-02'],
    [pd, '2020-01-02', '2020-01-01'],
    [pdt, '2020-01-01T12:34:56.789', '2020-01-02T12:34:56.789'],
    [zdt, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', '2020-01-02T12:34:56.789+01:00[Europe/Paris]'],
    [pt, '12:34:56.789', '13:34:56.789'],
    [pym, '2020-01', '2020-02'],
    [pmd, '01-01', '01-02'],
  ])('creates a function that returns an ISO 8601 interval', (temporalClass, startValue, endValue) => {
    given: 'an interval';
    const start = temporalClass.from(startValue);
    const end = temporalClass.from(endValue);
    const interval = createInterval(start, end);

    when: 'creating a function that returns an ISO 8601 interval';
    const func = intervalToISO8601Interval();
    and: 'calling it with the interval';
    const iso8601String = func(interval);

    expect: 'the correct ISO 8601 interval string to have been returned';
    expect(iso8601String).toBe(`${startValue}/${endValue}`);
  });

  it.each([
    [pd, '2020-01-01', '2020-01-02', 'start', 'P1D'],
    [pd, '2020-01-01', '2020-01-02', 'end', 'P1D'],
    [pd, '2020-01-02', '2020-01-01', 'start', '-P1D'],
    [pd, '2020-01-02', '2020-01-01', 'end', '-P1D'],
    [pdt, '2020-01-01T12:34:56.789', '2020-01-02T12:34:56.789', 'start', 'P1D'],
    [pdt, '2020-01-01T12:34:56.789', '2020-01-02T12:34:56.789', 'end', 'P1D'],
    [
      zdt,
      '2020-01-01T12:34:56.789+01:00[Europe/Paris]',
      '2020-01-02T12:34:56.789+01:00[Europe/Paris]',
      'start',
      'PT24H',
    ],
    [zdt, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', '2020-01-02T12:34:56.789+01:00[Europe/Paris]', 'end', 'PT24H'],
    [pt, '12:34:56.789', '13:34:56.789', 'start', 'PT1H'],
    [pt, '12:34:56.789', '13:34:56.789', 'end', 'PT1H'],
    [pym, '2020-01', '2020-02', 'start', 'P31D'],
    [pym, '2020-01', '2020-02', 'end', 'P31D'],
    [pmd, '01-01', '01-02', 'start', 'P1D'],
    [pmd, '01-01', '01-02', 'end', 'P1D'],
  ] as const)(
    'creates a function that returns an ISO 8601 interval with a duration element',
    (temporalClass, startValue, endValue, durationFor, expectedDuration) => {
      given: 'an interval';
      const start = temporalClass.from(startValue);
      const end = temporalClass.from(endValue);
      const interval = createInterval(start, end);

      when: 'creating a function that returns an ISO 8601 interval';
      const func = intervalToISO8601Interval({ durationFor });
      and: 'calling it with the interval';
      const iso8601String = func(interval);

      expect: 'the correct ISO 8601 interval string with a duration element to have been returned';
      const expectedString =
        durationFor === 'start' ? `${expectedDuration}/${endValue}` : `${startValue}/${expectedDuration}`;
      expect(iso8601String).toBe(expectedString);
    }
  );

  it.each([
    [pd, '2020-01-01', '2020-01-02', -1, 'R'],
    [pd, '2020-01-01', '2020-01-02', 0, 'R0'],
    [pd, '2020-01-01', '2020-01-02', 3, 'R3'],
    [pdt, '2020-01-01T12:34:56.789', '2020-01-02T12:34:56.789', -1, 'R'],
    [pdt, '2020-01-01T12:34:56.789', '2020-01-02T12:34:56.789', 0, 'R0'],
    [pdt, '2020-01-01T12:34:56.789', '2020-01-02T12:34:56.789', 3, 'R3'],
    [zdt, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', '2020-01-02T12:34:56.789+01:00[Europe/Paris]', -1, 'R'],
    [zdt, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', '2020-01-02T12:34:56.789+01:00[Europe/Paris]', 0, 'R0'],
    [zdt, '2020-01-01T12:34:56.789+01:00[Europe/Paris]', '2020-01-02T12:34:56.789+01:00[Europe/Paris]', 3, 'R3'],
    [pt, '12:34:56.789', '13:34:56.789', -1, 'R'],
    [pt, '12:34:56.789', '13:34:56.789', 0, 'R0'],
    [pt, '12:34:56.789', '13:34:56.789', 3, 'R3'],
    [pym, '2020-01', '2020-02', -1, 'R'],
    [pym, '2020-01', '2020-02', 0, 'R0'],
    [pym, '2020-01', '2020-02', 3, 'R3'],
    [pmd, '01-01', '01-02', -1, 'R'],
    [pmd, '01-01', '01-02', 0, 'R0'],
    [pmd, '01-01', '01-02', 3, 'R3'],
  ])(
    'creates a function that returns an ISO 8601 interval with recurring repetitions',
    (temporalClass, startValue, endValue, recurringRepetitions, expectedPrefix) => {
      given: 'an interval';
      const start = temporalClass.from(startValue);
      const end = temporalClass.from(endValue);
      const interval = createInterval(start, end);

      when: 'creating a function that returns an ISO 8601 interval';
      const func = intervalToISO8601Interval({ recurringRepetitions });
      and: 'calling it with the interval';
      const iso8601String = func(interval);

      expect: 'the correct ISO 8601 interval string with recurring repetitions to have been returned';
      expect(iso8601String).toBe(`${expectedPrefix}/${startValue}/${endValue}`);
    }
  );
});
