import { Temporal } from '@js-temporal/polyfill';
import { temporalWithTimeZone } from './temporal-with-time-zone';

describe('Temporal with time zone', () => {
  it('can create a function that converts a zoned date time to a different time zone', () => {
    given: 'a zoned date time';
    const zonedDateTime = Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]');
    and: 'a target time zone';
    const timeZoneName = 'Europe/London';
    // TODO: why TimeZone | TimeZoneLike
    const timeZone = Temporal.TimeZone.from(timeZoneName) as Temporal.TimeZone;

    when: 'creating a function that converts a zoned date time to a different time zone';
    const func = temporalWithTimeZone(timeZone);
    and: 'calling the function';
    const result = func(zonedDateTime);

    expect: 'the returned zoned date time to use the target time zone';
    expect(result.timeZone.id).toBe(timeZoneName);
  });
});
