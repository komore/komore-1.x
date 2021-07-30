import { parseLocalTime } from '../parse-local-time';
import { isAtNoon } from './is-at-noon';

describe('Is at noon', () => {
  it('returns true when a local time is at noon', () => {
    given: 'a local time at noon';
    const localTime = parseLocalTime('12:00');
    when: 'testing whether the local time is at noon';
    const result = isAtNoon(localTime);
    expect: 'true to have been returned';
    expect(result).toBe(true);
  });

  it('returns false when a local time is not at noon', () => {
    given: 'a local time not at noon';
    const localTime = parseLocalTime('12:12');
    when: 'testing whether the local time is at noon';
    const result = isAtNoon(localTime);
    expect: 'false to have been returned';
    expect(result).toBe(false);
  });
});
