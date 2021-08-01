import { Temporal } from '@js-temporal/polyfill';
import { isSameDateAs } from './is-same-date-as';

describe('Is same date as', () => {
  it.each([
    ['2020-01-01', '2020-01-01', true],
    ['2020-01-01', '2020-01-02', false]
  ])('can compare plain dates', (lhsString, rhsString, expectedResult) => {
    given: 'plain dates';
    const lhs = Temporal.PlainDate.from(lhsString);
    const rhs = Temporal.PlainDate.from(rhsString);
    when: 'creating a function that tests whether a temporal occurs on the same date as another one';
    const func = isSameDateAs(lhs);
    and: 'testing whether they occur on the same date';
    const result = func(rhs);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });

  it.each([
    ['2020-01-01T12:34:56', '2020-01-01T12:34:56', true],
    ['2020-01-01T12:34:56', '2020-01-01T01:23:45', true],
    ['2020-01-01T12:34:56', '2020-01-02T12:34:56', false],
    ['2020-01-01T23:59:59', '2020-01-02T00:00:00', false]
  ])('can compare plain date times', (lhsString, rhsString, expectedResult) => {
    given: 'plain date times';
    const lhs = Temporal.PlainDateTime.from(lhsString);
    const rhs = Temporal.PlainDateTime.from(rhsString);
    when: 'creating a function that tests whether a temporal occurs on the same date as another one';
    const func = isSameDateAs(lhs);
    and: 'testing whether they occur on the same date';
    const result = func(rhs);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });

  it.each([
    ['2020-01-01T12:34:56[Europe/Paris]', '2020-01-01T12:34:56[Europe/Paris]', true],
    ['2020-01-01T12:34:56[Europe/Paris]', '2020-01-01T01:23:45[Europe/Paris]', true],
    ['2020-01-01T12:34:56[Europe/Paris]', '2020-01-02T12:34:56[Europe/Paris]', false],
    ['2020-01-01T23:59:59[Europe/Paris]', '2020-01-02T00:00:00[Europe/Paris]', false],
    ['2020-01-01T12:34:56[Europe/Paris]', '2020-01-02T01:23:45[Asia/Tokyo]', false],
    ['2020-01-02T00:00:00[Europe/Paris]', '2020-01-02T00:00:00[Asia/Tokyo]', true]
  ])('can compare zoned date times', (lhsString, rhsString, expectedResult) => {
    given: 'zoned date times';
    const lhs = Temporal.ZonedDateTime.from(lhsString);
    const rhs = Temporal.ZonedDateTime.from(rhsString);
    when: 'creating a function that tests whether a temporal occurs on the same date as another one';
    const func = isSameDateAs(lhs);
    and: 'testing whether they occur on the same date';
    const result = func(rhs);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
