import { feature } from '@komore/testing';

import { subtractMicroseconds } from './subtract-microseconds';

feature('Subtract microseconds', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 4, 119],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 4, 119],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 4, 119],
  ])(
    'can create a function that subtracts microseconds from a %s',
    (_, temporalClass, value, subtractedMicroseconds, expectedMicrosecond) => {
      given: 'temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that subtracts microseconds from the temporal';
      const func = subtractMicroseconds(subtractedMicroseconds);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'the correct number of microseconds to have been subtracted';
      const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
      expect(hour).toBe(temporal.hour);
      expect(minute).toBe(temporal.minute);
      expect(second).toBe(temporal.second);
      expect(millisecond).toBe(temporal.millisecond);
      expect(microsecond).toBe(expectedMicrosecond);
      expect(nanosecond).toBe(temporal.nanosecond);
    }
  );
});
