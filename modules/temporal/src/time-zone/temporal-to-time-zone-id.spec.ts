import { Temporal } from '@js-temporal/polyfill';
import { temporalToTimeZoneId } from './temporal-to-time-zone-id';

describe('Temporal to time zone identifier', () => {
  it('can return a time zone identifier from a %s', () => {
    given: 'a zoned date time';
    const timeZoneId = 'Europe/Paris';
    const zdt = Temporal.ZonedDateTime.from(`2020-01-01T12:34:56.789[${timeZoneId}]`);

    when: 'getting the time zone identifier';
    const result = temporalToTimeZoneId(zdt);

    expect: 'the correct time zone identifier to have been returned';
    expect(result).toBe(timeZoneId);
  });
});
