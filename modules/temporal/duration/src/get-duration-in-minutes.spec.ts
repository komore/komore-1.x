import { createDuration } from './create-duration';
import { getDurationInMinutes } from './get-duration-in-minutes';

describe('Get duration in minutes', () => {
  it('returns the duration in minutes', () => {
    given: 'a duration';
    const minutes = 2;
    const duration = createDuration(minutes * 60 * 1000);
    when: 'getting the duration in minutes';
    const result = getDurationInMinutes(duration);
    expect: 'the correct number of minutes to be returned';
    expect(result).toBe(minutes);
  });

  it('keeps fractional information', () => {
    given: 'a duration that is not an exact number of minutes';
    const minutes = 2.5;
    const duration = createDuration(minutes * 60 * 1000);
    when: 'getting the duration in minutes';
    const result = getDurationInMinutes(duration);
    expect: 'the correct number of minutes to be returned';
    expect(result).toBe(minutes);
  });
});
