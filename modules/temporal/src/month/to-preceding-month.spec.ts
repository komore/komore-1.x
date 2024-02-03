import { feature } from '@komore/testing';

import { toPrecedingMonth } from './to-preceding-month';

feature('To preceding month', () => {
  it('can return the preceding month for a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-01-01');
    when: 'getting the preceding month';
    const result = toPrecedingMonth(plainDate);
    expect: 'a temporal occuring on the preceding month to have been returned, keeping the other units intact';
    expect(result).toBeInstanceOf(Temporal.PlainDate);
    const { year, month, day } = result;
    expect(year).toBe(2020);
    expect(month).toBe(2);
    expect(day).toBe(1);
  });

  it('can return the preceding month for a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
    when: 'getting the preceding month';
    const result = toPrecedingMonth(plainDateTime);
    expect: 'a temporal occuring on the preceding month to have been returned, keeping the other units intact';
    expect(result).toBeInstanceOf(Temporal.PlainDateTime);
    const { year, month, day, hour, minute, second, millisecond } = result;
    expect(year).toBe(2020);
    expect(month).toBe(2);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
  });

  it('can return the preceding month for a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
    when: 'getting the preceding month';
    const result = toPrecedingMonth(zonedDateTime);
    expect: 'a temporal occuring on the preceding month to have been returned, keeping the other units and time zone intact';
    expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
    const { year, month, day, hour, minute, second, millisecond, timeZone } = result;
    expect(year).toBe(2020);
    expect(month).toBe(2);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(timeZone.id).toBe('Europe/Paris');
  });

  it.each([
    ['2020-01', 2, 2020],
    ['2020-12', 1, 2021],
  ])('can return the preceding month for a plain year month', (yearMonthString, expectedMonth, expectedYear) => {
    given: 'a plain year month';
    const plainYearMonth = Temporal.PlainYearMonth.from(yearMonthString);
    when: 'getting the preceding month';
    const result = toPrecedingMonth(plainYearMonth);
    expect: 'a temporal occuring on the preceding month to have been returned';
    expect(result).toBeInstanceOf(Temporal.PlainYearMonth);
    const { year, month } = result;
    expect(year).toBe(expectedYear);
    expect(month).toBe(expectedMonth);
  });

  it.each([
    ['01-01', 2, 1],
    ['01-15', 2, 15],
    ['12-01', 1, 1],
  ])('can return the preceding month for a plain month day', (monthDayString, expectedMonth, expectedDay) => {
    given: 'a plain month day';
    const plainMonthDay = Temporal.PlainMonthDay.from(monthDayString);
    when: 'getting the preceding month';
    const result = toPrecedingMonth(plainMonthDay);
    expect: 'a temporal occuring on the preceding month to have been returned';
    expect(result).toBeInstanceOf(Temporal.PlainMonthDay);
    expect(result.getISOFields().isoMonth).toBe(expectedMonth);
    expect(result.day).toBe(expectedDay);
  });

  it.each([
    [Month.JANUARY, Month.DECEMBER],
    [Month.FEBRUARY, Month.JANUARY],
    [Month.MARCH, Month.FEBRUARY],
    [Month.APRIL, Month.MARCH],
    [Month.MAY, Month.APRIL],
    [Month.JUNE, Month.MAY],
    [Month.JULY, Month.JUNE],
    [Month.AUGUST, Month.JULY],
    [Month.SEPTEMBER, Month.AUGUST],
    [Month.OCTOBER, Month.SEPTEMBER],
    [Month.NOVEMBER, Month.OCTOBER],
    [Month.DECEMBER, Month.NOVEMBER],
  ])('can return the preceding month for a month', (month, expectedMonth) => {
    given: 'a month';
    when: 'getting the preceding month';
    const result = toPrecedingMonth(month);
    expect: 'the preceding month to have been returned';
    expect(typeof result).toBe('number');
    expect(result).toBe(expectedMonth);
  });
});
