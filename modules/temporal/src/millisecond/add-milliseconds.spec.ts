import { Temporal } from '@js-temporal/polyfill';
import { addMilliseconds } from './add-milliseconds';

describe('Add milliseconds', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 4, 793],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 4, 793],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 4, 793],
  ])(
    'can create a function that adds milliseconds to a %s',
    (_, temporalClass, value, addedMilliseconds, expectedMillisecond) => {
      given: 'temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that adds milliseconds to the temporal';
      const func = addMilliseconds(addedMilliseconds);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'the correct number of milliseconds to have been added';
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
