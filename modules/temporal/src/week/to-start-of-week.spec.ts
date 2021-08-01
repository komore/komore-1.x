import { Temporal } from '@js-temporal/polyfill';
import { toStartOfWeek } from './to-start-of-week';

describe('To start of week', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-01'), 2019, 12, 30],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), 2019, 12, 30],
    ['zoned date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), 2019, 12, 30]
  ])('can get the start of the week from a %s', (_, temporal, expectedYear, expectedMonth, expectedDay) => {
    given: 'a temporal';
    when: 'getting the start of the week';
    const result = toStartOfWeek(temporal);
    expect: 'the correct week day to have been returned';
    const { year, month, day, dayOfWeek } = result;
    expect(year).toBe(expectedYear);
    expect(month).toBe(expectedMonth);
    expect(day).toBe(expectedDay);
    expect(dayOfWeek).toBe(1);
  });
});
