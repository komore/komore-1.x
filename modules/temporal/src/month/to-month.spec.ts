import { Temporal } from '@js-temporal/polyfill';
import { Month } from './month';
import { toMonth } from './to-month';

describe('To month', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-01'), Month.JANUARY],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), Month.JANUARY],
    ['zoned date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), Month.JANUARY],
    ['year month', Temporal.PlainYearMonth.from('2020-01'), Month.JANUARY],
    ['month day', Temporal.PlainMonthDay.from('01-01'), Month.JANUARY]
  ])('can get the month from a %s', (_, temporal, expectedMonth) => {
    given: 'a temporal';
    when: 'getting the month';
    const month = toMonth(temporal);
    expect: 'the correct month to have been returned';
    expect(month).toBe(expectedMonth);
  });
});
