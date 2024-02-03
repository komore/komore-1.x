import { feature } from '@komore/testing';

import { subtractYears } from './subtract-years';

feature('Subtract years', () => {
  it('can subtract years from a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-01-01');

    when: 'creating a function that subtracts years';
    const func = subtractYears(4);
    and: 'calling it';
    const result = func(plainDate);

    expect: 'the correct number of years to have been subtracted';
    expect(result).toBeInstanceOf(Temporal.PlainDate);
    const { year, month, day } = result;
    expect(year).toBe(2016);
    expect(month).toBe(1);
    expect(day).toBe(1);
  });

  it('can subtract years from a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');

    when: 'creating a function that subtracts years';
    const func = subtractYears(4);
    and: 'calling it';
    const result = func(plainDateTime);

    expect: 'the correct number of years to have been subtracted, keeping the time units intact';
    expect(result).toBeInstanceOf(Temporal.PlainDateTime);
    const { year, month, day, hour, minute, second, millisecond } = result;
    expect(year).toBe(2016);
    expect(month).toBe(1);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
  });

  it('can subtract years from a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');

    when: 'creating a function that subtracts years';
    const func = subtractYears(4);
    and: 'calling it';
    const result = func(zonedDateTime);

    expect: 'the correct number of years to have been subtracted, keeping the time units and time zone intact';
    expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
    const { year, month, day, hour, minute, second, millisecond, timeZone } = result;
    expect(year).toBe(2016);
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
    ['2020-01', 4, 2016, 1],
  ])('can subtract years from a year month', (yearMonthString, subtractedYears, expectedYear, expectedMonth) => {
    given: 'a year month';
    const yearMonth = Temporal.PlainYearMonth.from(yearMonthString);

    when: 'creating a function that subtracts years';
    const func = subtractYears(subtractedYears);
    and: 'calling it';
    const result = func(yearMonth);

    expect: 'the correct number of years to have been subtracted';
    expect(result).toBeInstanceOf(Temporal.PlainYearMonth);
    const { year, month } = result.toPlainDate({ day: 1 });
    expect(year).toBe(expectedYear);
    expect(month).toBe(expectedMonth);
  });
});
