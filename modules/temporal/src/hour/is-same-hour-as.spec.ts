import { feature } from '@komore/testing';

import { isSameHourAs } from './is-same-hour-as';

feature('Is same hour as', () => {
  const pt1 = Temporal.PlainTime.from('12:34:56.789123456');
  const pt2 = Temporal.PlainTime.from('11:45:56.678912345');
  const pt3 = Temporal.PlainTime.from('12:23:45.678912345');
  const pdt1 = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456');
  const pdt2 = Temporal.PlainDateTime.from('2020-01-01T11:45:56.678912345');
  const pdt3 = Temporal.PlainDateTime.from('2020-01-01T12:23:45.678912345');
  const zdt1 = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456+01:00[Europe/Paris]');
  const zdt2 = Temporal.PlainDateTime.from('2020-01-01T11:45:56.678912345+01:00[Europe/Paris]');
  const zdt3 = Temporal.PlainDateTime.from('2020-01-01T12:23:45.678912345+00:00[Europe/London]');

  it.each([
    ['plain time', pt1, pt2, false],
    ['plain time', pt1, pt3, true],
    ['plain time', pt2, pt3, false],
    ['plain date time', pdt1, pdt2, false],
    ['plain date time', pdt1, pdt3, true],
    ['plain date time', pdt2, pdt3, false],
    ['zoned date time', zdt1, zdt2, false],
    ['zoned date time', zdt1, zdt3, true],
    ['zoned date time', zdt2, zdt3, false],
  ])(
    'can test whether a %s occurs during the same hour as another temporal',
    (_, referenceTemporal, temporal, expectedResult) => {
      given: 'a function that tests whether a temporal occurs during the same hour as a reference temporal';
      const func = isSameHourAs(referenceTemporal);

      when: 'calling the function';
      const result = func(temporal);

      expect: 'true to have been returned if the temporal occurs during the same hour as the reference temporal';
      expect(result).toBe(expectedResult);
    }
  );
});
