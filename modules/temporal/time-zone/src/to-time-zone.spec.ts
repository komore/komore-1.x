import { Temporal } from '@js-temporal/polyfill';
import { toTimeZone } from './to-time-zone';

describe('To time zone', () => {
  it('can return a time zone from a zoned date time', () => {
    given: 'a zoned date time';
    const timeZoneName = 'Europe/Paris';
    const zonedDateTime = Temporal.ZonedDateTime.from(`2020-01-01T12:34:56.789[${timeZoneName}]`);
    when: 'getting the time zone';
    const result = toTimeZone(zonedDateTime);
    expect: 'the correct time zone to have been returned';
    expect(result.id).toBe(timeZoneName);
  });
});
