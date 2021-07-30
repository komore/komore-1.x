import { Temporal } from 'proposal-temporal';
import { addYears } from './add-years';

describe('Add years', () => {
  it('can add years to a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-01-01');
    when: 'adding years';
    const result = addYears(plainDate, 4);
    expect: 'the correct number of years to have been added';
    expect(result).toBeInstanceOf(Temporal.PlainDate);
    const { year, month, day } = result;
    expect(year).toBe(2024);
    expect(month).toBe(1);
    expect(day).toBe(1);
  });

  it('can add years to a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
    when: 'adding years';
    const result = addYears(plainDateTime, 4);
    expect: 'the correct number of years to have been added';
    expect(result).toBeInstanceOf(Temporal.PlainDateTime);
    const { year, month, day, hour, minute, second, millisecond } = result;
    expect(year).toBe(2024);
    expect(month).toBe(1);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
  });

  it('can add years to a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
    when: 'adding years';
    const result = addYears(zonedDateTime, 4);
    expect: 'the correct number of years to have been added';
    expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
    const { year, month, day, hour, minute, second, millisecond, timeZone } = result;
    expect(year).toBe(2024);
    expect(month).toBe(1);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(timeZone.id).toBe('Europe/Paris');
  });

  it.each([
    ['2020-01', 0, 2020, 1],
    ['2020-01', 4, 2024, 1]
  ])('can add years to a year month', (yearMonthString, addedYears, expectedYear, expectedMonth) => {
    given: 'a year month';
    const yearMonth = Temporal.PlainYearMonth.from(yearMonthString);
    when: 'adding years';
    const result = addYears(yearMonth, addedYears);
    expect: 'the correct number of years to have been added';
    expect(result).toBeInstanceOf(Temporal.PlainYearMonth);
    const { year, month } = result.toPlainDate({ day: 1 });
    expect(year).toBe(expectedYear);
    expect(month).toBe(expectedMonth);
  });
});
