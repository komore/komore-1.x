import { feature } from '@komore/testing';

import { timeToMidnight } from './time-to-midnight';

feature('Time to midnight', () => {
  it.each([
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456'],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]'],
  ])('can create a %s that occurs at midnight', (_, temporalClass, value) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the date time at midnight';
    const temporalAtMidnight = timeToMidnight(temporal);

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
