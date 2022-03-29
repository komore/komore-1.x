import { Temporal } from '@js-temporal/polyfill';
import { timeZoneToTimeZoneOffsetAt } from './time-zone-to-time-zone-offset-at';

describe('Time zone to time zone offset at', () => {
  it.each([
    ['2020-03-28T12:34:56.789[Europe/Paris]', 'Europe/Paris', 3600000000000],
    ['2020-03-29T12:34:56.789[Europe/Paris]', 'Europe/Paris', 7200000000000],
  ])('returns the correct offset from a time zone, given a temporal', (value, timeZoneValue, expectedOffset) => {
    given: 'a temporal';
    const temporal = Temporal.ZonedDateTime.from(value);
    and: 'a time zone';
    // TODO: remove cast
    const timeZone = Temporal.TimeZone.from(timeZoneValue) as Temporal.TimeZone;

    when: 'creating a function that returns an offset at a given temporal';
    const func = timeZoneToTimeZoneOffsetAt(temporal);
    and: 'calling it';
    const offset = func(timeZone);

    expect: 'the correct offset to have been returned';
    expect(offset).toBe(expectedOffset);
  });

  it.each([
    ['2020-03-28T12:34:56.789[Europe/Paris]', 'Europe/Paris', 3600000000000],
    ['2020-03-29T12:34:56.789[Europe/Paris]', 'Europe/Paris', 7200000000000],
  ])('returns the correct offset from a time zone, given an instant', (value, timeZoneValue, expectedOffset) => {
    given: 'an instant';
    const temporal = Temporal.ZonedDateTime.from(value);
    const instant = temporal.toInstant();
    and: 'a time zone';
    // TODO: remove cast
    const timeZone = Temporal.TimeZone.from(timeZoneValue) as Temporal.TimeZone;

    when: 'creating a function that returns an offset at a given instant';
    const func = timeZoneToTimeZoneOffsetAt(instant);
    and: 'calling it';
    const offset = func(timeZone);

    expect: 'the correct offset to have been returned';
    expect(offset).toBe(expectedOffset);
  });
});
