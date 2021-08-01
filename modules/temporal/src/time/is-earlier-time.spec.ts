import { Temporal } from '@js-temporal/polyfill';
import { isEarlierTime } from './is-earlier-time';

describe('Is earlier time', () => {
  const pt1 = Temporal.PlainTime.from('12:34:56.789');
  const pt2 = Temporal.PlainTime.from('23:45:56.789');
  const pdt1 = Temporal.PlainDateTime.from('2020-01-02T12:34:56.789');
  const pdt2 = Temporal.PlainDateTime.from('2020-01-01T23:45:56.789');
  const zdt1 = Temporal.ZonedDateTime.from('2020-01-02T12:34:56.789[Europe/Paris]');
  const zdt2 = Temporal.ZonedDateTime.from('2020-01-01T23:45:56.789[Europe/Paris]');

  it.each([
    [pt1, pt1, false],
    [pt1, pt2, true],
    [pt2, pt1, false],
    [pdt1, pdt1, false],
    [pdt1, pdt2, true],
    [pdt2, pdt1, false],
    [zdt1, zdt1, false],
    [zdt1, zdt2, true],
    [zdt2, zdt1, false],
    [pt1, pdt1, false],
    [pt1, pdt2, true],
    [pdt2, pt1, false]
  ])('can test whether a temporal occurs at an earlier time than another temporal', (lhs, rhs, expectedResult) => {
    given: 'two temporals';
    when: 'testing whether a temporal occurs at an earlier time than another temporal';
    const result = isEarlierTime(lhs, rhs);
    expect: 'true to have been returned if the temporal occurs at an earlier time than the other temporal';
    expect(result).toBe(expectedResult);
  });
});
