import { Temporal } from '@js-temporal/polyfill';
import { addNanoseconds } from './add-nanoseconds';

describe('Add nanoseconds', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 4, 460],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 4, 460],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 4, 460],
  ])(
    'can create a function that adds nanoseconds to a %s',
    (_, temporalClass, value, addedNanoseconds, expectedNanosecond) => {
      given: 'temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that adds nanoseconds to the temporal';
      const func = addNanoseconds(addedNanoseconds);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'the correct number of nanoseconds to have been added';
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
