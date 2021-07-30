import { Temporal } from 'proposal-temporal';
import { toYear } from './to-year';

describe('To year', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-01'), 2020],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), 2020],
    ['zoned date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), 2020],
    ['year month', Temporal.PlainYearMonth.from('2020-01'), 2020]
  ])('can get the year from a %s', (_, temporal, expectedYear) => {
    given: 'a temporal';
    when: 'getting the year';
    const year = toYear(temporal);
    expect: 'the correct year to have been returned';
    expect(year).toBe(expectedYear);
  });
});
