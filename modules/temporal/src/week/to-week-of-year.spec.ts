import { Temporal } from '@js-temporal/polyfill';
import { toWeekOfYear } from './to-week-of-year';

describe('To week of year', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-01'), 1],
    ['plain date', Temporal.PlainDate.from('2021-01-01'), 53],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), 1],
    ['plain date time', Temporal.PlainDateTime.from('2021-01-01T12:34:56.789'), 53],
    ['zoned date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), 1],
    ['zoned date time', Temporal.PlainDateTime.from('2021-01-01T12:34:56.789[Europe/Paris]'), 53]
  ])('can get the week number from a %s', (_, temporal, expectedWeek) => {
    given: 'a temporal';
    when: 'getting the week number of the year';
    const result = toWeekOfYear(temporal);
    expect: 'the correct week number to have been returned';
    expect(result).toBe(expectedWeek);
  });
});
