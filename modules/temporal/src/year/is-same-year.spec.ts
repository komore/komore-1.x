import { Temporal } from '@js-temporal/polyfill';
import { isSameYear } from './is-same-year';

describe('Is same year', () => {
  const pd2020 = Temporal.PlainDate.from('2020-01-01');
  const pd2021 = Temporal.PlainDate.from('2021-01-01');
  const pdt2020 = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  const pdt2021 = Temporal.PlainDateTime.from('2021-01-01T12:34:56.789');
  const zdt2020 = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
  const zdt2021 = Temporal.PlainDateTime.from('2021-01-01T12:34:56.789[Europe/Paris]');
  const pym2020 = Temporal.PlainYearMonth.from('2020-01');
  const pym2021 = Temporal.PlainYearMonth.from('2021-01');

  it.each([
    ['plain date', 'plain date', pd2020, pd2020, true],
    ['plain date', 'plain date', pd2020, pd2021, false],
    ['plain date time', 'plain date time', pdt2020, pdt2020, true],
    ['plain date time', 'plain date time', pdt2020, pdt2021, false],
    ['zoned date time', 'zoned date time', zdt2020, zdt2020, true],
    ['zoned date time', 'zoned date time', zdt2020, zdt2021, false],
    ['plain year month', 'plain year month', pym2020, pym2020, true],
    ['plain year month', 'plain year month', pym2020, pym2021, false]
  ])('can test whether a %s and a % occur the same year', (_1, _2, lhs, rhs, expectedResult) => {
    given: 'temporals';
    when: 'testing whether they occur the same year';
    const result = isSameYear(lhs, rhs);
    expect: 'true to be returned when the temporal occur the same year';
    expect(result).toBe(expectedResult);
  });
});
