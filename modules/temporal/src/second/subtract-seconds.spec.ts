import { Temporal } from '@js-temporal/polyfill';
import { subtractSeconds } from './subtract-seconds';

describe('Subtract seconds', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 4, 52],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 4, 52],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 4, 52],
  ])(
    'can create a function that subtracts seconds from a %s',
    (_, temporalClass, value, subtractedSeconds, expectedSecond) => {
      given: 'temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that subtracts seconds from the temporal';
      const func = subtractSeconds(subtractedSeconds);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'the correct number of seconds to have been subtracted';
      const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
      expect(hour).toBe(temporal.hour);
      expect(minute).toBe(temporal.minute);
      expect(second).toBe(expectedSecond);
      expect(millisecond).toBe(temporal.millisecond);
      expect(microsecond).toBe(temporal.microsecond);
      expect(nanosecond).toBe(temporal.nanosecond);
    }
  );
});
