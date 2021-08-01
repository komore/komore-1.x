import { Temporal } from '@js-temporal/polyfill';
import { isYearBefore } from './is-year-before';

describe('Is year before', () => {
  const pd1 = Temporal.PlainDate.from('2020-02-01');
  const pd2 = Temporal.PlainDate.from('2020-06-01');
  const pd3 = Temporal.PlainDate.from('2021-01-01');
  const pdt1 = Temporal.PlainDateTime.from('2020-02-01T12:34:56.789');
  const pdt2 = Temporal.PlainDateTime.from('2020-06-01T12:34:56.789');
  const pdt3 = Temporal.PlainDateTime.from('2021-01-01T12:34:56.789');
  const zdt1 = Temporal.ZonedDateTime.from('2020-02-01T12:34:56.789[Europe/Paris]');
  const zdt2 = Temporal.ZonedDateTime.from('2020-06-01T12:34:56.789[Europe/Paris]');
  const zdt3 = Temporal.ZonedDateTime.from('2021-01-01T12:34:56.789[Europe/Paris]');

  it.each([
    ['plain date', pd1, pd1, false],
    ['plain date', pd1, pd2, false],
    ['plain date', pd1, pd3, true],
    ['plain date time', pdt1, pdt2, false],
    ['plain date time', pdt1, pdt2, false],
    ['plain date time', pdt1, pdt3, true],
    ['zoned date time', zdt1, zdt2, false],
    ['zoned date time', zdt1, zdt2, false],
    ['zoned date time', zdt1, zdt3, true]
  ])(
    'can test whether a %s occurs the year before another temporal',
    (_, temporal, referenceTemporal, expectedResult) => {
      given: 'two temporals';
      when: 'creating a function that tests whether a temporal occurs the year before the reference temporal';
      const func = isYearBefore(referenceTemporal);
      and: 'calling the function';
      const result = func(temporal);
      expect: 'true to have been returned when the temporal occurs the year before the reference temporal';
      expect(result).toBe(expectedResult);
    }
  );

  it.each([
    ['plain date', pd1, 2020, false],
    ['plain date', pd1, 2021, true],
    ['plain date time', pdt1, 2020, false],
    ['plain date time', pdt1, 2021, true],
    ['zoned date time', zdt1, 2020, false],
    ['zoned date time', zdt1, 2021, true]
  ])('can test whether a %s occurs the year before a specific year', (_, temporal, referenceYear, expectedResult) => {
    given: 'two temporals';
    when: 'creating a function that tests whether a temporal occurs the year before the reference year';
    const func = isYearBefore(referenceYear);
    and: 'calling the function';
    const result = func(temporal);
    expect: 'true to have been returned when the temporal occurs the year before the reference year';
    expect(result).toBe(expectedResult);
  });
});
