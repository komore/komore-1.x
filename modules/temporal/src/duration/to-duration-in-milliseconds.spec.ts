import { Temporal } from '@js-temporal/polyfill';
import { toDurationInMilliseconds } from './to-duration-in-milliseconds';

describe('To duration in milliseconds', () => {
  it.each([
    [Temporal.Duration.from('PT0.123S'), 123],
    [Temporal.Duration.from('PT0.0005S'), 0.5],
    [Temporal.Duration.from('PT1M30.123S'), 90123]
  ])('returns a duration in milliseconds', (duration, expectedResult) => {
    given: 'a duration';
    when: 'getting the duration in milliseconds';
    const result = toDurationInMilliseconds(duration);
    expect: 'the correct number of milliseconds to have been returned';
    expect(result).toBe(expectedResult);
  });
});
