import { Temporal } from '@js-temporal/polyfill';
import { addMonths } from './add-months';

describe('Add months', () => {
  it('can add months to a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-01-01');

    when: 'creating a function that adds months';
    const func = addMonths(4);
    and: 'calling it';
    const result = func(plainDate);

    expect: 'the result to be a plain date';
    expect(result).toBeInstanceOf(Temporal.PlainDate);
    and: 'the correct number of months to have been added';
    const { year, month, day } = result;
    expect(year).toBe(2020);
    expect(month).toBe(5);
    expect(day).toBe(1);
  });

  it('can add months to a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');

    when: 'creating a function that adds months';
    const func = addMonths(4);
    and: 'calling it';
    const result = func(plainDateTime);

    expect: 'the result to be a plain date time';
    expect(result).toBeInstanceOf(Temporal.PlainDateTime);
    and: 'the correct number of months to have been added, keeping the time units intact';
    const { year, month, day, hour, minute, second, millisecond } = result;
    expect(year).toBe(2020);
    expect(month).toBe(5);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
  });

  it('can add months to a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');

    when: 'creating a function that adds months';
    const func = addMonths(4);
    and: 'calling it';
    const result = func(zonedDateTime);

    expect: 'the result to be a zoned date time';
    expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
    and: 'the correct number of months to have been added, keeping the time units and time zone intact';
    const { year, month, day, hour, minute, second, millisecond, timeZone } = result;
    expect(year).toBe(2020);
    expect(month).toBe(5);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(timeZone.id).toBe('Europe/Paris');
  });

  it.each([
    ['2020-01', 0, 1, 2020],
    ['2020-01', 4, 5, 2020],
    ['2020-12', 4, 4, 2021],
  ])('can add months to a plain year month', (yearMonthString, addedMonths, expectedMonth, expectedYear) => {
    given: 'a plain year month';
    const plainYearMonth = Temporal.PlainYearMonth.from(yearMonthString);

    when: 'creating a function that adds months';
    const func = addMonths(addedMonths);
    and: 'calling it';
    const result = func(plainYearMonth);

    expect: 'the result to be a plain year month';
    expect(result).toBeInstanceOf(Temporal.PlainYearMonth);
    and: 'the correct number of months to have been added';
    const { year, month } = result;
    expect(year).toBe(expectedYear);
    expect(month).toBe(expectedMonth);
  });

  it.each([
    ['01-01', 0, 1, 1],
    ['01-01', 4, 5, 1],
    ['12-01', 4, 4, 1],
  ])('can add months to a plain month day', (monthDayString, addedMonths, expectedMonth, expectedDay) => {
    given: 'a plain month day';
    const plainMonthDay = Temporal.PlainMonthDay.from(monthDayString);

    when: 'creating a function that adds months';
    const func = addMonths(addedMonths);
    and: 'calling it';
    const result = func(plainMonthDay);

    expect: 'the result to be a plain month day';
    expect(result).toBeInstanceOf(Temporal.PlainMonthDay);
    and: 'the correct number of months to have been added';
    expect(result.getISOFields().isoMonth).toBe(expectedMonth);
    expect(result.day).toBe(expectedDay);
  });
});
