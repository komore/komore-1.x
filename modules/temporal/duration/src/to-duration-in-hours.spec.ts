import { Temporal } from '@js-temporal/polyfill';
import { toDurationInHours } from './to-duration-in-hours';

describe('To duration in hours', () => {
  it.each([
    [Temporal.Duration.from('PT2H'), 2],
    [Temporal.Duration.from('PT2H30M'), 2.5]
  ])('returns a duration in hours', (duration, expectedResult) => {
    given: 'a duration';
    when: 'getting the duration in hours';
    const result = toDurationInHours(duration);
    expect: 'the correct number of hours to have been returned';
    expect(result).toBe(expectedResult);
  });
});
