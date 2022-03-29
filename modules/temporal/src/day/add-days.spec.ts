import { Temporal } from '@js-temporal/polyfill';
import { addDays } from './add-days';

describe('Add days', () => {
  it('can create a function that adds days to a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-01-01');

    when: 'creating a function that adds days';
    const func = addDays(4);
    and: 'calling it';
    const result = func(plainDate);

    expect: 'the result to be a plain date';
    expect(result).toBeInstanceOf(Temporal.PlainDate);
    and: 'the correct number of days to have been added';
    const { year, month, day } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(5);
  });

  it('can create a function that adds days to a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');

    when: 'creating a function that adds days';
    const func = addDays(4);
    and: 'calling it';
    const result = func(plainDateTime);

    expect: 'the result to be a plain date time';
    expect(result).toBeInstanceOf(Temporal.PlainDateTime);
    and: 'the correct number of days to have been added';
    const { year, month, day, hour, minute, second, millisecond } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(5);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
  });

  it('can create a function that adds days to a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');

    when: 'creating a function that adds days';
    const func = addDays(4);
    and: 'calling it';
    const result = func(zonedDateTime);

    expect: 'the result to be a zoned date time';
    expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
    and: 'the correct number of days to have been added';
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
    ['01-31', 4, 2, 4],
  ])(
    'can create a function that adds days to a plain month day',
    (monthDayString, addedDays, expectedMonth, expectedDay) => {
      given: 'a plain month day';
      const monthDay = Temporal.PlainMonthDay.from(monthDayString);

      when: 'creating a function that adds days';
      const func = addDays(addedDays);
      and: 'calling it';
      const result = func(monthDay);

      expect: 'the result to be a plain month day';
      expect(result).toBeInstanceOf(Temporal.PlainMonthDay);
      and: 'the correct number of days to have been added';
      expect(result.getISOFields().isoMonth).toBe(expectedMonth);
      expect(result.day).toBe(expectedDay);
    }
  );
});
