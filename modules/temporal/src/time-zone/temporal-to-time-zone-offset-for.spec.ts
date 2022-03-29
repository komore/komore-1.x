import { Temporal } from '@js-temporal/polyfill';
import { temporalToTimeZoneOffsetFor } from './temporal-to-time-zone-offset-for';

describe('Temporal to time zone offset for', () => {
  it.each([
    ['2020-01-01T12:34:56.789[Europe/Paris]', 'Europe/Paris', 3600000000000],
    ['2020-01-01T12:34:56.789[Europe/Paris]', 'Europe/London', 0],
  ])('returns the correct offset from a temporal', (value, timeZoneValue, expectedOffset) => {
    given: 'a temporal';
    const temporal = Temporal.ZonedDateTime.from(value);
    and: 'a time zone';
    // TODO: remove cast
    const timeZone = Temporal.TimeZone.from(timeZoneValue) as Temporal.TimeZone;

    when: 'creating a function that returns an offset for a given time zone';
    const func = temporalToTimeZoneOffsetFor(timeZone);
    and: 'calling it';
    const offset = func(temporal);

    expect: 'the correct offset to have been returned';
    expect(offset).toBe(expectedOffset);
  });

  it.each([
    ['2020-01-01T12:34:56.789[Europe/Paris]', 'Europe/Paris', 3600000000000],
    ['2020-01-01T12:34:56.789[Europe/Paris]', 'Europe/London', 0],
  ])('returns the correct offset from an instant', (value, timeZoneValue, expectedOffset) => {
    given: 'an instant';
    const temporal = Temporal.ZonedDateTime.from(value);
    const instant = temporal.toInstant();
    and: 'a time zone';
    // TODO: remove cast
    const timeZone = Temporal.TimeZone.from(timeZoneValue) as Temporal.TimeZone;

    when: 'creating a function that returns an offset for a given time zone';
    const func = temporalToTimeZoneOffsetFor(timeZone);
    and: 'calling it';
    const offset = func(instant);

    expect: 'the correct offset to have been returned';
    expect(offset).toBe(expectedOffset);
  });
});
