import { Temporal } from 'proposal-temporal';
import { toStartOfMonth } from './to-start-of-month';

describe('To start of month', () => {
  it('can return the start of the month for a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-01-15');
    when: 'getting the start of the month';
    const startOfMonth = toStartOfMonth(plainDate);
    expect: 'the matching start of the month to be returned';
    const { year, month, day } = startOfMonth;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(1);
  });

  it('can return the start of the month for a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-01-15T12:34:56.789123456');
    when: 'getting the start of the month';
    const startOfMonth = toStartOfMonth(plainDateTime);
    expect: 'the maching start of the month to be returned, keeping the time units intact';
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = startOfMonth;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(microsecond).toBe(123);
    expect(nanosecond).toBe(456);
  });

  it('can return the start of the month for a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-15T12:34:56.789123456[Europe/Paris]');
    when: 'getting the start of the month';
    const startOfMonth = toStartOfMonth(zonedDateTime);
    expect: 'the maching start of the month to be returned, keeping the time units and time zone intact';
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, timeZone } = startOfMonth;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(microsecond).toBe(123);
    expect(nanosecond).toBe(456);
    expect(timeZone.id).toBe('Europe/Paris');
  });

  it('can return the start of the month for a plain month day', () => {
    given: 'a plain month day';
    const plainMonthDay = Temporal.PlainMonthDay.from('01-15');
    when: 'getting the start of the month';
    const startOfMonth = toStartOfMonth(plainMonthDay);
    expect: 'the maching start of the month to be returned';
    expect(startOfMonth.getISOFields().isoMonth).toBe(1);
    expect(startOfMonth.day).toBe(1);
  });
});
