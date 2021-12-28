import { Temporal } from '@js-temporal/polyfill';
import { isSameTimeZoneAs } from './is-same-time-zone-as';

describe('Is same time zone as', () => {
  const tz1 = Temporal.TimeZone.from('Europe/Paris');
  const tz2 = Temporal.TimeZone.from('Europe/London');
  const tz3 = Temporal.TimeZone.from('Europe/Paris');

  it.each([
    [tz1, tz1, true],
    [tz1, tz2, false],
    [tz1, tz3, true]
  ])(
    'can create a function that tests whether a time zone is the same as a reference time zone',
    (timeZone, referenceTimeZone, expectedResult) => {
      given: 'time zones';
      when: 'creating a function that tests whether a time zone is the same as a reference time zone';
      const func = isSameTimeZoneAs(referenceTimeZone);
      and: 'calling it';
      const result = func(timeZone);
      expect: 'true to have been returned when the time zones are the same';
      expect(result).toBe(expectedResult);
    }
  );
});
