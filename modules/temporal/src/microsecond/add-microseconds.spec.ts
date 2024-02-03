import { feature } from '@komore/testing';

import { addMicroseconds } from './add-microseconds';

feature('Add microseconds', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 4, 127],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 4, 127],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 4, 127],
  ])(
    'can create a function that adds microseconds to a %s',
    (_, temporalClass, value, addedMicroseconds, expectedMicrosecond) => {
      given: 'temporal';
      const temporal = temporalClass.from(value);

      when: 'creating a function that adds microseconds to the temporal';
      const func = addMicroseconds(addedMicroseconds);
      and: 'calling the function';
      const result = func(temporal);

      expect: 'the correct number of microseconds to have been added';
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
