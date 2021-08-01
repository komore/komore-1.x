import { Temporal } from '@js-temporal/polyfill';
import { toTimeZoneId } from './to-time-zone-id';

describe('To time zone identifier', () => {
  it.each([
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), 'Europe/Paris'],
    ['time zone', Temporal.TimeZone.from('Europe/Paris'), 'Europe/Paris']
  ])('can return a time zone identifier from a %s', (_, parameter, expectedResult) => {
    given: 'a zoned date time or time zone';
    when: 'getting the time zone identifier';
    const result = toTimeZoneId(parameter as Parameters<typeof toTimeZoneId>[0]);
    expect: 'the correct time zone identifier to have been returned';
    expect(result).toBe(expectedResult);
  });
});
