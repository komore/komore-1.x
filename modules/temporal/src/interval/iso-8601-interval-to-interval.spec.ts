import { Temporal } from '@js-temporal/polyfill';
import { iso8601IntervalToInterval } from './iso-8601-interval-to-interval';

describe('ISO 8601 interval to interval', () => {
  const pd = Temporal.PlainDate;
  const pdt = Temporal.PlainDateTime;

  // TODO: more tests

  it.each([
    [pd, '2020-01-01/2020-01-02', '2020-01-01', '2020-01-02'],
    [pdt, '2020-01-01T12:34:56.789/2020-01-02T12:35:56.789', '2020-01-01T12:34:56.789', '2020-01-02T12:35:56.789'],
  ])('can parse an ISO 8601 interval', (temporalClass, iso8601String, expectedStart, expectedEnd) => {
    given: 'an ISO 8601 interval string';

    when: 'creating a function that parses the string';
    const func = iso8601IntervalToInterval(temporalClass as { from(str: string): Temporal.PlainDate });
    and: 'calling it with the ISO 8601 string';
    const interval = func(iso8601String);

    expect: 'the interval ';
    expect(interval.start.toString()).toBe(expectedStart);
    expect(interval.end.toString()).toBe(expectedEnd);
  });

  it.each([['2020-01-01/2020-01-02/2020-01-03', 'an ISO 8601 interval must feature a single / character']])(
    'throws an error when the ISO 8601 string is not valid',
    (iso8601String, errorMessage) => {
      given: 'an invalid ISO 8601 string';

      when: 'creating a function ';
      const func = iso8601IntervalToInterval(Temporal.PlainDate);

      expect: 'calling the function with an invalid ISO 8601 string to throw an error';
      expect(() => func(iso8601String)).toThrowError(errorMessage);
    }
  );
});
