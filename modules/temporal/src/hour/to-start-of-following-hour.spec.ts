import { feature } from '@komore/testing';

import { toStartOfFollowingHour } from './to-start-of-following-hour';

feature('To start of following hour', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), 13],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), 13],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), 13],
  ])('can round a %s to the start of the following hour', (_, temporal, expectedHour) => {
    given: 'a temporal';
    when: 'rounding to the following hour';
    const result = toStartOfFollowingHour(temporal);
    expect: 'a temporal time rounded to the following hour to have been returned';
    const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
    expect(hour).toBe(expectedHour);
    expect(minute).toBe(0);
    expect(second).toBe(0);
    expect(millisecond).toBe(0);
    expect(microsecond).toBe(0);
    expect(nanosecond).toBe(0);
  });
});
