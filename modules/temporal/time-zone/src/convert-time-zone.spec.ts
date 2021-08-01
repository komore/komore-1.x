import { Temporal } from '@js-temporal/polyfill';
import { convertTimeZone } from './convert-time-zone';

describe('Convert time zone', () => {
  it('can convert from one time zone to another', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
    when: 'converting to a different time zone';
    const targetTimeZoneName = 'Europe/London';
    const targetTimeZone = Temporal.TimeZone.from(targetTimeZoneName);
    const result = convertTimeZone(zonedDateTime, targetTimeZone);
    expect: 'the correct time zone to have been applied';
    expect(result.timeZone.id).toBe(targetTimeZoneName);
    expect(result.hour).toBe(11);
  });
});
