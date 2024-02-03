import { feature } from '@komore/testing';

import { subtractMinutes } from './subtract-minutes';

feature('Subtract minutes', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 4, 30],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 4, 30],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 4, 30],
  ])(
    'can create a function that subtracts minutes from a %s',
    (_, temporalClass, value, subtractedHours, expectedMinutes) => {
      given: 'temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that subtracts minutes from the temporal';
      const func = subtractMinutes(subtractedHours);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'the correct number of minutes to have been subtracted';
      const { hour, minute, second, millisecond, microsecond, nanosecond } = result;
      expect(hour).toBe(temporal.hour);
      expect(minute).toBe(expectedMinutes);
      expect(second).toBe(temporal.second);
      expect(millisecond).toBe(temporal.millisecond);
      expect(microsecond).toBe(temporal.microsecond);
      expect(nanosecond).toBe(temporal.nanosecond);
    }
  );
});
