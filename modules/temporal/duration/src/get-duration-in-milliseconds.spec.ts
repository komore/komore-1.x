import { createDuration } from './create-duration';
import { getDurationInMilliseconds } from './get-duration-in-milliseconds';

describe('Get duration in milliseconds', () => {
  it('returns the duration in milliseconds', () => {
    given: 'a duration';
    const milliseconds = 1234567890;
    const duration = createDuration(milliseconds);
    when: 'getting the duration in milliseconds';
    const result = getDurationInMilliseconds(duration);
    expect: 'the correct number of milliseconds to be returned';
    expect(result).toBe(milliseconds);
  });
});
