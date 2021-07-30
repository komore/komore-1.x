import { Temporal } from 'proposal-temporal';
import { toEndOfMonth } from './to-end-of-month';

describe('To end of month', () => {
  it('can return the end of the month for a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-01-01');
    when: 'getting the end of the month';
    const endOfMonth = toEndOfMonth(plainDate);
    expect: 'the matching end of the month to be returned';
    const { year, month, day } = endOfMonth;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(31);
  });

  it('can return the end of the month for a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456');
    when: 'getting the end of the month';
    const endOfMonth = toEndOfMonth(plainDateTime);
    expect: 'the maching end of the month to be returned, keeping the time units intact';
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = endOfMonth;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(31);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(microsecond).toBe(123);
    expect(nanosecond).toBe(456);
  });

  it('can return the end of the month for a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]');
    when: 'getting the end of the month';
    const endOfMonth = toEndOfMonth(zonedDateTime);
    expect: 'the maching end of the month to be returned, keeping the time units and time zone intact';
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, timeZone } = endOfMonth;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(31);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(microsecond).toBe(123);
    expect(nanosecond).toBe(456);
    expect(timeZone.id).toBe('Europe/Paris');
  });

  it('can return the end of the month for a plain month day', () => {
    given: 'a plain month day';
    const plainMonthDay = Temporal.PlainMonthDay.from('01-01');
    when: 'getting the end of the month';
    const endOfMonth = toEndOfMonth(plainMonthDay);
    expect: 'the maching end of the month to be returned';
    expect(endOfMonth.getISOFields().isoMonth).toBe(1);
    expect(endOfMonth.day).toBe(31);
  });
});
