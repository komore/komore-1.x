import { Temporal } from '@js-temporal/polyfill';
import { isFollowingYear } from './is-following-year';

describe('Is following year', () => {
  const pd1 = Temporal.PlainDate.from('2021-02-01');
  const pd2 = Temporal.PlainDate.from('2021-01-01');
  const pd3 = Temporal.PlainDate.from('2020-06-01');
  const pdt1 = Temporal.PlainDateTime.from('2021-02-01T12:34:56.789');
  const pdt2 = Temporal.PlainDateTime.from('2021-01-01T12:34:56.789');
  const pdt3 = Temporal.PlainDateTime.from('2020-06-01T12:34:56.789');
  const zdt1 = Temporal.ZonedDateTime.from('2021-02-01T12:34:56.789[Europe/Paris]');
  const zdt2 = Temporal.ZonedDateTime.from('2021-01-01T12:34:56.789[Europe/Paris]');
  const zdt3 = Temporal.ZonedDateTime.from('2020-06-01T12:34:56.789[Europe/Paris]');

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
  ])('can test whether a %s occurs the year after another temporal', (_, lhs, rhs, expectedResult) => {
    given: 'two temporals';
    when: 'testing whether a temporal occurs the year after the other temporal';
    const result = isFollowingYear(lhs, rhs);
    expect: 'true to have been returned when the temporal occurs the year after the other temporal';
    expect(result).toBe(expectedResult);
  });
});
