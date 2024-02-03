import { feature } from '@komore/testing';

import { subtractDays } from './subtract-days';

feature('Subtract days', () => {
  it('can subtract days from a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-01-05');

    when: 'creating a function that subtracts days';
    const func = subtractDays(4);
    and: 'calling it';
    const result = func(plainDate);

    expect: 'the correct number of days to have been subtracted';
    const { year, month, day } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(1);
  });

  it('can subtract days from a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-01-05T12:34:56.789');

    when: 'creating a function that subtracts days';
    const func = subtractDays(4);
    and: 'calling it';
    const result = func(plainDateTime);

    expect: 'the correct number of days to have been subtracted, keeping the time units intact';
    const { year, month, day, hour, minute, second, millisecond } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
  });

  it('can subtract days from a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-05T12:34:56.789[Europe/Paris]');

    when: 'creating a function that subtracts days';
    const func = subtractDays(4);
    and: 'calling it';
    const result = func(zonedDateTime);

    expect: 'the correct number of days to have been subtracted, keeping the time units and time zone intact';
    const { year, month, day, hour, minute, second, millisecond, timeZone } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(timeZone.id).toBe('Europe/Paris');
  });

  it.each([
    ['01-01', 0, 1, 1],
    ['01-05', 4, 1, 1],
    ['02-04', 4, 1, 31],
  ])('can subtract days from a month day', (monthDayString, subtractedDays, expectedMonth, expectedDay) => {
    given: 'a month day';
    const monthDay = Temporal.PlainMonthDay.from(monthDayString);

    when: 'creating a function that subtracts days';
    const func = subtractDays(subtractedDays);
    and: 'calling it';
    const result = func(monthDay);

    expect: 'the correct number of days to have been subtracted';
    const { month, day } = result.toPlainDate({ year: 2020 });
    expect(month).toBe(expectedMonth);
    expect(day).toBe(expectedDay);
  });
});
