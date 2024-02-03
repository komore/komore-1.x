import { feature } from '@komore/testing';

import { createInterval } from './create-interval';
import { intervalToRepeatingInterval } from './interval-to-repeating-interval';

feature('Interval to repeating interval', () => {
  const pd = Temporal.PlainDate;

  it.each([
    [pd, '2020-01-01', '2020-01-02', undefined, undefined, '2020-01-01', 'P1D'],
    [pd, '2020-01-01', '2020-01-02', 'future', 0, '2020-01-01', 'P1D'],
    [pd, '2020-01-01', '2020-01-02', 'past', 0, '2020-01-02', '-P1D'],
    // TODO: more tests
  ] as const)(
    'can create a repeating interval with 0 repetitions',
    (temporalClass, startValue, endValue, direction, repetitions, expectedStart, expectedDuration) => {
      given: 'an interval';
      const start = temporalClass.from(startValue);
      const end = temporalClass.from(endValue);
      const interval = createInterval(start, end);

      when: 'creating a function that turns an interval into a repeating interval';
      const func = intervalToRepeatingInterval({ direction, repetitions });
      and: 'calling it';
      const repeatedInterval = func(interval);

      expect: 'the repeating interval to have the correct duration';
      expect(repeatedInterval.duration.toString()).toBe(expectedDuration);
      expect(repeatedInterval.start.toString()).toBe(expectedStart);
      expect(repeatedInterval.repetitions).toBe(repetitions);
    }
  );
});
