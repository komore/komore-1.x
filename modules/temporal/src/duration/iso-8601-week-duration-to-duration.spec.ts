import { InvalidISO8601WeekDurationError } from './invalid-iso-8601-week-duration-error';
import { iso8601WeekDurationToDuration } from './iso-8601-week-duration-to-duration';

describe('ISO 8601 week duration to duration', () => {
  it.each([
    ['P0W', 0],
    ['P2W', 2],
    ['P16W', 16],
    ['P-2W', -2],
  ])('can parse an ISO 8601 week duration', (iso8601WeekString, expectedWeeks) => {
    given: 'an ISO 8601 week string';

    when: 'parsing the string';
    const result = iso8601WeekDurationToDuration(iso8601WeekString);

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

  it.each(['1P2W', 'P2W1', 'p2w', 'PW'])('fails when given an invalid string', iso8601WeekString => {
    given: 'an invalid ISO 8601 week string';

    expect: 'an error to be thrown when parsing the string';
    expect(() => iso8601WeekDurationToDuration(iso8601WeekString)).toThrowError(
      `invalid ISO 8601 week duration pattern "${iso8601WeekString}"`
    );
  });

  it('fails when given a valid pattern but an invalid week number', () => {
    expect.assertions(3);
    given: 'a valid ISO 8601 week pattern but an invalid week number';
    const invalidString = 'P2.5W';

    expect: 'an error to be thrown when parsing the string';
    try {
      iso8601WeekDurationToDuration(invalidString);
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidISO8601WeekDurationError);
      const error = e as InvalidISO8601WeekDurationError;
      expect(error.message).toBe(`invalid ISO 8601 week duration pattern "${invalidString}"`);
      expect(error.invalidString).toBe(invalidString);
    }
  });
});
