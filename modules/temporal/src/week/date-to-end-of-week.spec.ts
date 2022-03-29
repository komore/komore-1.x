import { Temporal } from '@js-temporal/polyfill';
import { dateToEndOfWeek } from './date-to-end-of-week';

describe('Date to end of week', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', 2020, 1, 5],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 2020, 1, 5],
    ['zoned date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', 2020, 1, 5],
  ])('can get the end of the week from a %s', (_, temporalClass, value, expectedYear, expectedMonth, expectedDay) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the end of the week';
    const result = dateToEndOfWeek(temporal);

    expect: 'the correct week day to have been returned';
    const { year, month, day, dayOfWeek } = result;
    expect(year).toBe(expectedYear);
    expect(month).toBe(expectedMonth);
    expect(day).toBe(expectedDay);
    expect(dayOfWeek).toBe(7);
  });
});
