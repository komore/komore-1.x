import { parseLocalDateTime } from '../date-time/parse-local-date-time';
import { isEarlierTime } from './is-earlier-time';
import { parseLocalTime } from './parse-local-time';

describe('Is earlier time', () => {
  it('can test whether a local time occurs before another local time', () => {
    given: 'two local times';
    const localTime1 = parseLocalTime('05:37');
    const localTime2 = parseLocalTime('08:51');
    when: 'testing whether 05:37 occurs before 08:51';
    const result = isEarlierTime(localTime1, localTime2);
    const resultSame = isEarlierTime(localTime1, localTime1);
    const resultSwapped = isEarlierTime(localTime2, localTime1);
    expect: 'the times to have been properly compared';
    expect(result).toBe(true);
    expect(resultSame).toBe(false);
    expect(resultSwapped).toBe(false);
  });

  it('ignores any date component when performing comparisons', () => {
    given: 'two local date times';
    const localDateTime1 = parseLocalDateTime('2020-01-02T05:37:00');
    const localDateTime2 = parseLocalDateTime('2020-01-01T08:51:00');
    when: 'testing whether 05:37 (2nd of Jan) occurs before 08:51 (1st of Jan)';
    const result = isEarlierTime(localDateTime1, localDateTime2);
    const resultSame = isEarlierTime(localDateTime1, localDateTime1);
    const resultSwapped = isEarlierTime(localDateTime2, localDateTime1);
    expect: 'the times to have been properly compared, ignoring the date components';
    expect(result).toBe(true);
    expect(resultSame).toBe(false);
    expect(resultSwapped).toBe(false);
  });
});
