import { Temporal } from '@js-temporal/polyfill';
import { atMidnight } from './at-midnight';

describe('At midnight', () => {
  it.each([
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456')],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]')]
  ])('can create a %s that occurs at midnight', (_, temporal) => {
    given: 'a temporal';
    when: 'getting the date time at midnight';
    const temporalAtMidnight = atMidnight(temporal);
    expect: 'the date time to occur at midnight';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = temporalAtMidnight;
    expect(hour).toBe(0);
    expect(minute).toBe(0);
    expect(second).toBe(0);
    expect(millisecond).toBe(0);
    expect(microsecond).toBe(0);
    expect(nanosecond).toBe(0);
    and: 'to point to the next day';
    const { year, month, day } = temporalAtMidnight;
    expect(year).toBe(temporal.year);
    expect(month).toBe(temporal.month);
    expect(day).toBe(temporal.day + 1);
  });
});
