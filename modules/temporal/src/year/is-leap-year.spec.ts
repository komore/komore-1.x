import { Temporal } from '@js-temporal/polyfill';
import { isLeapYear } from './is-leap-year';

describe('Is leap year', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-01'), true],
    ['plain date', Temporal.PlainDate.from('2021-01-01'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), true],
    ['plain date time', Temporal.PlainDateTime.from('2021-01-01T12:34:56.789'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2021-01-01T12:34:56.789[Europe/Paris]'), false],
    ['plain year month', Temporal.PlainYearMonth.from('2020-01'), true],
    ['plain year month', Temporal.PlainYearMonth.from('2021-01'), false]
  ])('can test whether a %s occurs during a leap year', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs on a leap year';
    const result = isLeapYear(temporal);
    expect: 'the leap year to have been properly detected';
    expect(result).toBe(expectedResult);
  });
});
