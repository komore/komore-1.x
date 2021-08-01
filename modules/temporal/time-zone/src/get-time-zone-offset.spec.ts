import { Temporal } from '@js-temporal/polyfill';
import { getTimeZoneOffset } from './get-time-zone-offset';

describe('Get time zone offset', () => {
  it.each([
    ['2020-01-01T12:34:56.789Z', 3600000000000],
    ['2020-04-01T12:34:56.789Z', 7200000000000]
  ])('can return a time zone offset', (instantString, expectedResult) => {
    given: 'a time zone';
    const timeZone = Temporal.TimeZone.from('Europe/Paris');
    and: 'an instant';
    const instant = Temporal.Instant.from(instantString);
    when: 'getting a time zone offset for the instant';
    const result = getTimeZoneOffset(timeZone, instant);
    expect: 'the correct offset to have been returned';
    expect(result).toBe(expectedResult);
  });
});
