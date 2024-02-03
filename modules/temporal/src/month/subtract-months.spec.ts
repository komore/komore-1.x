import { feature } from '@komore/testing';

import { subtractMonths } from './subtract-months';

feature('Subtract months', () => {
  it('can subtract months from a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-05-01');

    when: 'creating a function that subtracts months';
    const func = subtractMonths(4);
    and: 'calling it';
    const result = func(plainDate);

    expect: 'the result to be a plain date';
    result instanceof Temporal.PlainDate;
    and: 'the correct number of months to have been subtracted';
    const { year, month, day } = result;
    year === 2020;
    month === 1;
    day === 1;
  });

  it('can subtract months from a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-05-01T12:34:56.789');

    when: 'creating a function that subtracts months';
    const func = subtractMonths(4);
    and: 'calling it';
    const result = func(plainDateTime);

    expect: 'the result to be a plain date time';
    expect(result).toBeInstanceOf(Temporal.PlainDateTime);
    and: 'the correct number of months to have been subtracted, keeping the time units intact';
    const { year, month, day, hour, minute, second, millisecond } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(1);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
  });

  it('can subtract months from a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-05-01T12:34:56.789[Europe/Paris]');

    when: 'creating a function that subtracts months';
    const func = subtractMonths(4);
    and: 'calling it';
    const result = func(zonedDateTime);

    expect: 'the result to be a zoned date time';
    expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
    and: 'the correct number of months to have been subtracted, keeping the time units and time zone intact';
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
    ['2020-01', 0, 1, 2020],
    ['2020-05', 4, 1, 2020],
    ['2021-04', 4, 12, 2020],
  ])(
    'can subtract months from a plain year month',
    (yearMonthString, subtractedMonths, expectedMonth, expectedYear) => {
      given: 'a plain year month';
      const plainYearMonth = Temporal.PlainYearMonth.from(yearMonthString);

      when: 'creating a function that subtracts months';
      const func = subtractMonths(subtractedMonths);
      and: 'calling it';
      const result = func(plainYearMonth);

      expect: 'the result to be a plain year month';
      expect(result).toBeInstanceOf(Temporal.PlainYearMonth);
      and: 'the correct number of months to have been subtracted';
      const { year, month } = result;
      expect(year).toBe(expectedYear);
      expect(month).toBe(expectedMonth);
    }
  );

  it.each([
    ['01-01', 0, 1, 1],
    ['05-01', 4, 1, 1],
    ['04-01', 4, 12, 1],
  ])('can subtract months from a plain month day', (monthDayString, subtractedMonths, expectedMonth, expectedDay) => {
    given: 'a plain month day';
    const plainMonthDay = Temporal.PlainMonthDay.from(monthDayString);

    when: 'creating a function that subtracts months';
    const func = subtractMonths(subtractedMonths);
    and: 'calling it';
    const result = func(plainMonthDay);

    expect: 'the result to be a plain month day';
    expect(result).toBeInstanceOf(Temporal.PlainMonthDay);
    and: 'the correct number of months to have been subtracted';
    expect(result.getISOFields().isoMonth).toBe(expectedMonth);
    expect(result.day).toBe(expectedDay);
  });
});
