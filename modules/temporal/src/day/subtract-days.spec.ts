import { Temporal } from 'proposal-temporal';
import { subtractDays } from './subtract-days';

describe('Subtract days', () => {
  it('can subtract days from a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-01-01');
    when: 'subtracting days';
    const result = subtractDays(plainDate, 4);
    expect: 'the correct number of days to have been subtracted';
    const { year, month, day } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(5);
  });

  it('can subtract days from a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
    when: 'subtracting days';
    const result = subtractDays(plainDateTime, 4);
    expect: 'the correct number of days to have been subtracted, keeping the time units intact';
    const { year, month, day, hour, minute, second, millisecond } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(5);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
  });

  it('can subtract days from a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
    when: 'subtracting days';
    const result = subtractDays(zonedDateTime, 4);
    expect: 'the correct number of days to have been subtracted, keeping the time units and time zone intact';
    const { year, month, day, hour, minute, second, millisecond, timeZone } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(5);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(timeZone.id).toBe('Europe/Paris');
  });

  it.each([
    ['01-01', 0, 1, 1],
    ['01-01', 4, 1, 5],
    ['01-31', 4, 2, 4]
  ])('can subtract days from a month day', (monthDayString, subtractedDays, expectedMonth, expectedDay) => {
    given: 'a month day';
    const monthDay = Temporal.PlainMonthDay.from(monthDayString);
    when: 'subtracting days';
    const result = subtractDays(monthDay, subtractedDays);
    expect: 'the correct number of days to have been subtracted';
    const { month, day } = result.toPlainDate({ year: 2020 });
    expect(month).toBe(expectedMonth);
    expect(day).toBe(expectedDay);
  });
});
