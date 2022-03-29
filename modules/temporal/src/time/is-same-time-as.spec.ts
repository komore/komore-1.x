import { Temporal } from '@js-temporal/polyfill';
import { isSameTimeAs } from './is-same-time-as';

describe('Is same time', () => {
  const pt1 = Temporal.PlainTime.from('12:34:56.789123456');
  const pt2 = Temporal.PlainTime.from('12:34:56.789123456');
  const pt3 = Temporal.PlainTime.from('12:34:56.789123455');
  const pdt1 = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456');
  const pdt2 = Temporal.PlainDateTime.from('2020-06-01T12:34:56.789123456');
  const pdt3 = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123455');
  const zdt1 = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]');
  const zdt2 = Temporal.ZonedDateTime.from('2020-06-01T12:34:56.789123456[Europe/London]');
  const zdt3 = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123455[Europe/Paris]');

  it.each([
    ['plain time', pt1, pt2, true],
    ['plain time', pt1, pt3, false],
    ['plain date time', pdt1, pdt2, true],
    ['plain date time', pdt1, pdt3, false],
    ['zoned date time', zdt1, zdt2, true],
    ['zoned date time', zdt1, zdt3, false]
  ])(
    'can test whether a %s occurs at the same time as another temporal',
    (_, referenceTemporal, temporal, expectedResult) => {
      given: 'a reference temporal and a temporal';

      when: 'creating a function that tests whether they occur at the same time';
      const func = isSameTimeAs(referenceTemporal);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'true to have been returned if both temporals occur at the same time';
      expect(result).toBe(expectedResult);
    }
  );
});
