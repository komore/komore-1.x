import { Temporal } from '@js-temporal/polyfill';
import { dateToStartOfWeek } from './date-to-start-of-week';

describe('Date to start of week', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-01', 2019, 12, 30],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 2019, 12, 30],
    ['zoned date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', 2019, 12, 30],
  ])('can get the start of the week from a %s', (_, temporalClass, value, expectedYear, expectedMonth, expectedDay) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the start of the week';
    const result = dateToStartOfWeek(temporal);

    expect: 'the correct week day to have been returned';
    const { year, month, day, dayOfWeek } = result;
    expect(year).toBe(expectedYear);
    expect(month).toBe(expectedMonth);
    expect(day).toBe(expectedDay);
    expect(dayOfWeek).toBe(1);
  });
});
