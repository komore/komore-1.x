import { Temporal } from '@js-temporal/polyfill';
import { dateToFollowingYear } from './date-to-following-year';

describe('Date to following year', () => {
  it('can return a plain date that occurs the year after the passed temporal', () => {
    given: 'a temporal';
    const temporal = Temporal.PlainDate.from('2020-01-01');
    when: 'getting the following year';
    const result = dateToFollowingYear(temporal);
    expect: 'a temporal occuring a year after the passed temporal to have been returned';
    const { year, month, day } = result;
    expect(year).toBe(2021);
    expect(month).toBe(temporal.month);
    expect(day).toBe(temporal.day);
  });

  it.each([
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789', 2021],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789[Europe/Paris]', 2021],
  ])('can return a %s that occurs the year after the passed temporal', (_, temporalClass, value, expectedYear) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the following year';
    const result = dateToFollowingYear(temporal);

    expect: 'a temporal occuring the following yeart to have been returned, keeping all other units untouched';
    const { year, month, day, hour, minute, second, millisecond, microsecond, nanosecond } = result;
    expect(year).toBe(expectedYear);
    expect(month).toBe(temporal.month);
    expect(day).toBe(temporal.day);
    expect(hour).toBe(temporal.hour);
    expect(minute).toBe(temporal.minute);
    expect(second).toBe(temporal.second);
    expect(millisecond).toBe(temporal.millisecond);
    expect(microsecond).toBe(temporal.microsecond);
    expect(nanosecond).toBe(temporal.nanosecond);
  });

  it('can return a plain year month that occurs the year after the passed temporal', () => {
    given: 'a year month';
    const temporal = Temporal.PlainYearMonth.from('2020-01');

    when: 'getting the following year';
    const result = dateToFollowingYear(temporal);

    expect: 'a plain year month occuring the following year to have been returned, keeping the month unit untouched';
    const { year, month } = result;
    expect(year).toBe(2021);
    expect(month).toBe(temporal.month);
  });
});
