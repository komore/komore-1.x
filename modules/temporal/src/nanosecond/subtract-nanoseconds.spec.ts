import { Temporal } from '@js-temporal/polyfill';
import { subtractNanoseconds } from './subtract-nanoseconds';

describe('Subtract nanoseconds', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 4, 452],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 4, 452],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 4, 452],
  ])(
    'can create a function that subtracts nanoseconds from a %s',
    (_, temporalClass, value, subtractedNanoseconds, expectedNanosecond) => {
      given: 'temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that subtracts nanoseconds from the temporal';
      const func = subtractNanoseconds(subtractedNanoseconds);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'the correct number of nanoseconds to have been subtracted';
      const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
      expect(hour).toBe(temporal.hour);
      expect(minute).toBe(temporal.minute);
      expect(second).toBe(temporal.second);
      expect(millisecond).toBe(temporal.millisecond);
      expect(microsecond).toBe(temporal.microsecond);
      expect(nanosecond).toBe(expectedNanosecond);
    }
  );
});
