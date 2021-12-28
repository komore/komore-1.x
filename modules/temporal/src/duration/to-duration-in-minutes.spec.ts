import { Temporal } from '@js-temporal/polyfill';
import { toDurationInMinutes } from './to-duration-in-minutes';

describe('To duration in minutes', () => {
  it.each([
    [Temporal.Duration.from({ minutes: 2 }), 2],
    [Temporal.Duration.from({ minutes: 2, seconds: 30 }), 2.5],
    [Temporal.Duration.from({ seconds: 30 }), 0.5]
  ])('returns the duration in minutes', (duration, expectedResult) => {
    given: 'a duration';
    when: 'getting the duration in minutes';
    const result = toDurationInMinutes(duration);
    expect: 'the correct number of minutes to have been returned';
    expect(result).toBe(expectedResult);
  });
});
