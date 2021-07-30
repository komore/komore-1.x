import { createDuration } from './create-duration';
import { getDurationInSeconds } from './get-duration-in-seconds';

describe('Get duration in seconds', () => {
  it('returns the duration in seconds', () => {
    given: 'a duration';
    const seconds = 2;
    const duration = createDuration(seconds * 1000);
    when: 'getting the duration in seconds';
    const result = getDurationInSeconds(duration);
    expect: 'the correct number of seconds to be returned';
    expect(result).toBe(seconds);
  });

  it('keeps fractional information', () => {
    given: 'a duration that is not an exact number of seconds';
    const seconds = 2.5;
    const duration = createDuration(seconds * 1000);
    when: 'getting the duration in seconds';
    const result = getDurationInSeconds(duration);
    expect: 'the correct number of seconds to be returned';
    expect(result).toBe(seconds);
  });
});
