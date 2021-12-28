import { Temporal } from '@js-temporal/polyfill';
import { withTimeZone } from './with-time-zone';

describe('With time zone', () => {
  it('can create a function that converts a zoned date time to a different time zone', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
    and: 'a target time zone';
    const timeZoneName = 'Europe/London';
    const timeZone = Temporal.TimeZone.from(timeZoneName);
    when: 'creating a function that converts a zoned date time to a different time zone';
    const func = withTimeZone(timeZone);
    and: 'calling the function';
    const result = func(zonedDateTime);
    expect: 'the returned zoned date time to use the target time zone';
    expect(result.timeZone.id).toBe(timeZoneName);
  });
});
