import { Temporal } from '@js-temporal/polyfill';
import { timeZoneToTimeZoneId } from './time-zone-to-time-zone-id';

describe('Time zone to time zone identifier', () => {
  it('can return a time zone identifier from a time zone', () => {
    given: 'a time zone';
    const timeZoneId = 'Europe/Paris';
    const timeZone = Temporal.TimeZone.from(timeZoneId) as Temporal.TimeZone; // TODO: avoid cast

    when: 'getting the time zone identifier';
    const result = timeZoneToTimeZoneId(timeZone);

    expect: 'the correct time zone identifier to have been returned';
    expect(result).toBe(timeZoneId);
  });
});
