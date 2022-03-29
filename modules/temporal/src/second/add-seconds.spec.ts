import { Temporal } from '@js-temporal/polyfill';
import { addSeconds } from './add-seconds';

describe('Add seconds', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 3, 59],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 3, 59],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 3, 59],
  ])(
    'can create a function that adds seconds to a %s',
    (_, temporalClass, value, addedSeconds, expectedSecond) => {
      given: 'temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that adds seconds to the temporal';
      const func = addSeconds(addedSeconds);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'the correct number of seconds to have been added';
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
