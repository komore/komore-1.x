import { Temporal } from 'proposal-temporal';
import { isLaterDate } from './is-later-date';

describe('Is later date', () => {
  const pd1 = Temporal.PlainDate.from('2020-01-01');
  const pd2 = Temporal.PlainDate.from('2020-06-01');
  const pdt1 = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
  const pdt2 = Temporal.PlainDateTime.from('2020-06-01T12:34:56.789');
  const zdt1 = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
  const zdt2 = Temporal.ZonedDateTime.from('2020-06-01T12:34:56.789[Europe/Paris]');

  it.each([
    ['plain date', 'plain date', pd1, pd1, false],
    ['plain date', 'plain date', pd1, pd2, false],
    ['plain date', 'plain date', pd2, pd1, true],
    ['plain date time', 'plain date time', pdt1, pdt1, false],
    ['plain date time', 'plain date time', pdt1, pdt2, false],
    ['plain date time', 'plain date time', pdt2, pdt1, true],
    ['zoned date time', 'zoned date time', zdt1, zdt1, false],
    ['zoned date time', 'zoned date time', zdt1, zdt2, false],
    ['zoned date time', 'zoned date time', zdt2, zdt1, true]
  ])('can test whether a %s occurs later than another %s', (_1, _2, lhs, rhs, expectedResult) => {
    given: 'two temporals';
    when: 'testing whether a temporal occurs at a later date than another temporal';
    const result = isLaterDate(lhs, rhs);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
