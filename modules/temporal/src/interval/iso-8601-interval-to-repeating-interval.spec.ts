import { feature } from '@komore/testing';

import { iso8601IntervalToRepeatingInterval } from './iso-8601-interval-to-repeating-interval';

feature('ISO 8601 interval to repeating interval', () => {
  const pd = Temporal.PlainDate;
  const pdt = Temporal.PlainDateTime;

  // TODO: more tests

  it.each([
    [pd, 'R/2020-01-01/2020-01-02', '2020-01-01', 'P1D', undefined],
    [pd, 'R-1/2020-01-01/2020-01-02', '2020-01-01', 'P1D', undefined],
    [pd, 'R0/2020-01-01/2020-01-02', '2020-01-01', 'P1D', 0],
    [pd, 'R1/2020-01-01/2020-01-02', '2020-01-01', 'P1D', 1],
    [pdt, 'R1/2020-01-01T12:34:56.789/2020-01-02T12:34:56.789', '2020-01-01T12:34:56.789', 'P1D', 1],
  ])(
    'can parse an ISO 8601 interval',
    (temporalClass, iso8601String, expectedStart, expectedDuration, expectedRepetitions) => {
      given: 'an ISO 8601 interval string';

      when: 'creating a function that parses the string';
      const func = iso8601IntervalToRepeatingInterval(temporalClass as { from(str: string): Temporal.PlainDate });
      and: 'calling it with the ISO 8601 string';
      const interval = func(iso8601String);

      expect: 'the repeating interval to have been properly built';
      expect(interval.start.toString()).toBe(expectedStart);
      expect(interval.duration.toString()).toBe(expectedDuration);
      expect(interval.repetitions).toBe(expectedRepetitions);
    }
  );

  it.each([
    ['2020-01-01/2020-01-02', 'an ISO 8601 repeating interval must feature 2 / characters'],
    ['1/2020-01-01/2020-01-02', 'an ISO 8601 repeating pattern must start with the character R'],
    ['R0.5/2020-01-01/2020-01-02', 'invalid ISO 8601 repeating pattern number (not an integer)'],
    ['R-2/2020-01-01/2020-01-02', 'invalid ISO 8601 repeating pattern number (neither -1 or >= 0)'],
    ['R1a/2020-01-01/2020-01-02', 'invalid ISO 8601 repeating pattern number (NaN)'],
  ])('throws an error when the ISO 8601 string is not valid', (iso8601String, errorMessage) => {
    given: 'an invalid ISO 8601 string';

    when: 'creating a function ';
    const func = iso8601IntervalToRepeatingInterval(Temporal.PlainDate);

    expect: 'calling the function with an invalid ISO 8601 string to throw an error';
    expect(() => func(iso8601String)).toThrowError(errorMessage);
  });
});
