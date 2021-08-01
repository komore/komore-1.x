import { Temporal } from '@js-temporal/polyfill';
import { addWeeks } from './add-weeks';

describe('Add weeks', () => {
  it('can add weeks to a plain date', () => {
    given: 'a plain date';
    const plainDate = Temporal.PlainDate.from('2020-01-01');
    when: 'creating a function that adds weeks';
    const func = addWeeks(4);
    and: 'calling it';
    const result = func(plainDate);
    expect: 'the correct number of weeks to have been added';
    expect(result).toBeInstanceOf(Temporal.PlainDate);
    const { year, month, day } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(29);
  });

  it('can add weeks to a plain date time', () => {
    given: 'a plain date time';
    const plainDateTime = Temporal.PlainDateTime.from('2020-01-01T12:34:56.789');
    when: 'creating a function that adds weeks';
    const func = addWeeks(4);
    and: 'calling it';
    const result = func(plainDateTime);
    expect: 'the correct number of weeks to have been added';
    expect(result).toBeInstanceOf(Temporal.PlainDateTime);
    const { year, month, day, hour, minute, second, millisecond } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(29);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
  });

  it('can add weeks to a zoned date time', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
    when: 'creating a function that adds weeks';
    const func = addWeeks(4);
    and: 'calling it';
    const result = func(zonedDateTime);
    expect: 'the correct number of weeks to have been added';
    const { year, month, day, hour, minute, second, millisecond, timeZone } = result;
    expect(year).toBe(2020);
    expect(month).toBe(1);
    expect(day).toBe(29);
    expect(hour).toBe(12);
    expect(minute).toBe(34);
    expect(second).toBe(56);
    expect(millisecond).toBe(789);
    expect(timeZone.id).toBe('Europe/Paris');
  });
});
