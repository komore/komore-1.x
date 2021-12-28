import { Temporal } from '@js-temporal/polyfill';
import { toDurationInSeconds } from './to-duration-in-seconds';

describe('To duration in seconds', () => {
  it.each([
    [Temporal.Duration.from({ seconds: 2 }), 2],
    [Temporal.Duration.from({ seconds: 2, milliseconds: 500 }), 2.5],
    [Temporal.Duration.from({ milliseconds: 500 }), 0.5]
  ])('returns the duration in seconds', (duration, expectedResult) => {
    given: 'a duration';
    when: 'getting the duration in seconds';
    const result = toDurationInSeconds(duration);
    expect: 'the correct number of seconds to have been returned';
    expect(result).toBe(expectedResult);
  });
});
