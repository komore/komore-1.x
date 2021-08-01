import { Temporal } from '@js-temporal/polyfill';
import { subtractWeeks } from './subtract-weeks';

describe('Subtract weeks', () => {
  it('can subtract weeks from a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-06-01');
    when: 'creating a function that subtracts weeks';
    const func = subtractWeeks(4);
    when: 'calling it';
    const result = func(plainDate);
    expect: 'the correct number of weeks to have been subtracted';
    expect(result).toBeInstanceOf(Temporal.PlainDate);
    const { year, month, day } = result;
    expect(year).toBe(2020);
    expect(month).toBe(5);
    expect(day).toBe(4);
  });

  it('can subtract weeks from a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-06-01T12:34:56.789');
    when: 'creating a function that subtracts weeks';
    const func = subtractWeeks(4);
    when: 'calling it';
    const result = func(plainDateTime);
    expect: 'the correct number of weeks to have been subtracted';
    expect(result).toBeInstanceOf(Temporal.PlainDateTime);
    const { year, month, day, hour, minute, second, millisecond } = result;
    expect(year).toBe(2020);
    expect(month).toBe(5);
    expect(day).toBe(4);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
  });

  it('can subtract weeks from a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-06-01T12:34:56.789[Europe/Paris]');
    when: 'creating a function that subtracts weeks';
    const func = subtractWeeks(4);
    when: 'calling it';
    const result = func(zonedDateTime);
    expect: 'the correct number of weeks to have been subtracted';
    expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
    const { year, month, day, hour, minute, second, millisecond, timeZone } = result;
    expect(year).toBe(2020);
    expect(month).toBe(5);
    expect(day).toBe(4);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(timeZone.id).toBe('Europe/Paris');
  });
});
