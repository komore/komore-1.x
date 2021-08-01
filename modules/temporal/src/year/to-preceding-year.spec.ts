import { Temporal } from '@js-temporal/polyfill';
import { toPrecedingYear } from './to-preceding-year';

describe('To preceding year', () => {
  it('can return a plain date that occurs the year before the passed temporal', () => {
    given: 'a temporal';
    const temporal = Temporal.PlainDate.from('2020-01-01');
    when: 'getting the preceding year';
    const result = toPrecedingYear(temporal);
    expect: 'a temporal occuring a year before the passed temporal to have been returned';
    const { year, month, day } = result;
    expect(year).toBe(2019);
    expect(month).toBe(temporal.month);
    expect(day).toBe(temporal.day);
  });

  it.each([
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), 2019],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), 2019]
  ])('can return a %s that occurs the year before the passed temporal', (_, temporal, expectedYear) => {
    given: 'a temporal';
    when: 'getting the preceding year';
    const result = toPrecedingYear(temporal);
    expect: 'a temporal occuring the preceding yeart to have been returned, keeping all other units untouched';
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

  it('can return a plain year month that occurs the year before the passed temporal', () => {
    given: 'a year month';
    const temporal = Temporal.PlainYearMonth.from('2020-01');
    when: 'getting the preceding year';
    const result = toPrecedingYear(temporal);
    expect: 'a plain year month occuring the preceding year to have been returned, keeping the month unit untouched';
    const { year, month } = result;
    expect(year).toBe(2019);
    expect(month).toBe(temporal.month);
  });
});
