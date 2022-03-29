import { Temporal } from '@js-temporal/polyfill';
import { isLaterTimeThan } from './is-later-time-than';

describe('Is later time than', () => {
  const pt1 = Temporal.PlainTime.from('12:34:56.789');
  const pt2 = Temporal.PlainTime.from('23:45:56.789');
  const pdt1 = Temporal.PlainDateTime.from('2020-01-02T12:34:56.789');
  const pdt2 = Temporal.PlainDateTime.from('2020-01-01T23:45:56.789');
  const zdt1 = Temporal.ZonedDateTime.from('2020-01-02T12:34:56.789[Europe/Paris]');
  const zdt2 = Temporal.ZonedDateTime.from('2020-01-01T23:45:56.789[Europe/Paris]');

  it.each([
    [pt1, pt1, false],
    [pt1, pt2, false],
    [pt2, pt1, true],
    [pdt1, pdt1, false],
    [pdt1, pdt2, false],
    [pdt2, pdt1, true],
    [zdt1, zdt1, false],
    [zdt1, zdt2, false],
    [zdt2, zdt1, true],
    [pt1, pdt1, false],
    [pt1, pdt2, false],
    [pdt2, pt1, true]
  ])(
    'can create a function that tests whether a temporal occurs at a later time than a reference temporal',
    (temporal, referenceTemporal, expectedResult) => {
      given: 'two temporals';

      when: 'creating a function that tests whether a temporal occurs at a later time than a reference temporal';
      const func = isLaterTimeThan(referenceTemporal);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'true to have been returned if the temporal occurs at a later time than the reference temporal';
      expect(result).toBe(expectedResult);
    }
  );
});
