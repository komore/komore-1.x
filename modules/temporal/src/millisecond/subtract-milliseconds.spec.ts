import { Temporal } from '@js-temporal/polyfill';
import { subtractMilliseconds } from './subtract-milliseconds';

describe('Subtract milliseconds', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 4, 785],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 4, 785],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 4, 785],
  ])(
    'can create a function that subtracts milliseconds from a %s',
    (_, temporalClass, value, subtractedMilliseconds, expectedMillisecond) => {
      given: 'temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that subtracts milliseconds from the temporal';
      const func = subtractMilliseconds(subtractedMilliseconds);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'the correct number of milliseconds to have been subtracted';
      const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
      expect(hour).toBe(temporal.hour);
      expect(minute).toBe(temporal.minute);
      expect(second).toBe(temporal.second);
      expect(millisecond).toBe(expectedMillisecond);
      expect(microsecond).toBe(temporal.microsecond);
      expect(nanosecond).toBe(temporal.nanosecond);
    }
  );
});
