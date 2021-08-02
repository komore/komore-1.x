import { fromISO8601WeekDuration } from './from-iso-8601-week-duration';

describe('From ISO 8601 week duration', () => {
  it.each([
    ['P0W', 0],
    ['P2W', 2],
    ['P16W', 16]
  ])('can parse an ISO 8601 week duration', (iso8601WeekString, expectedWeeks) => {
    given: 'an ISO 8601 week string';
    when: 'parsing the string';
    const result = fromISO8601WeekDuration(iso8601WeekString);
    expect: 'a correct Duration object to have been built';
    const { years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds } = result;
    expect(years).toBe(0);
    expect(months).toBe(0);
    expect(weeks).toBe(expectedWeeks);
    expect(days).toBe(0);
    expect(hours).toBe(0);
    expect(minutes).toBe(0);
    expect(seconds).toBe(0);
    expect(milliseconds).toBe(0);
    expect(microseconds).toBe(0);
    expect(nanoseconds).toBe(0);
  });

  it.each(['1P2W', 'P2W1', 'p2w', 'PW', 'P2.5W'])('fails when given an invalid string', iso8601WeekString => {
    given: 'an invalid ISO 8601 week string';
    expect: 'an error to be thrown when parsing the string';
    expect(() => fromISO8601WeekDuration(iso8601WeekString)).toThrowError(
      `invalid ISO 8601 week duration ${iso8601WeekString}`
    );
  });
});
