import { parseLocalTime } from '../../time/parse-local-time';
import { isAtMidnight } from './is-at-midnight';

describe('Is at midnight', () => {
  it.each([
    parseLocalTime('00:00:00'),
    parseLocalTime('00:00:00.000')
  ])('can detect when a local time occurs at midnight', localTime => {
    given: 'a local time that occurs at midnight';
    when: 'testing whether the local time occurs at midnight';
    const result = isAtMidnight(localTime);
    expect: 'true to have been returned';
    expect(result).toBe(true);
  });

  it.each([
    parseLocalTime('00:01'),
    parseLocalTime('00:00:01'),
    parseLocalTime('00:00:00.001'),
    parseLocalTime('00:00:00.000001'),
    parseLocalTime('00:00:00.000000001')
  ])('does not consider a local time to occur at midnight when it is not an exact match', localTime => {
    given: 'a local time that does not occur exactly at midnight';
    when: 'testing whether the local time occurs at midnight';
    const result = isAtMidnight(localTime);
    expect: 'false to have been returned';
    expect(result).toBe(false);
  });
});
