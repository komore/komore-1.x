import { createLocalTime } from './create-local-time';
import { isSameTime } from './is-same-time';

describe('Is same time', () => {
  it('returns true when the times are the same', () => {
    given: 'two identical times';
    const lhs = createLocalTime({ hours: 1, minutes: 23, seconds: 45, milliseconds: 678 });
    const rhs = createLocalTime({ hours: 1, minutes: 23, seconds: 45, milliseconds: 678 });
    expect: 'the times to be considered the same';
    expect(isSameTime(lhs, rhs)).toBe(true);
  });

  it('returns false when the times are different', () => {
    given: 'two different times';
    const lhs = createLocalTime({ hours: 1, minutes: 23, seconds: 45, milliseconds: 678 });
    const rhs = createLocalTime({ hours: 1, minutes: 23, seconds: 45, milliseconds: 789 });
    expect: 'the times to be considered different';
    expect(isSameTime(lhs, rhs)).toBe(false);
  });
});
