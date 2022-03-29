import { InvalidISO8601WeekDurationError } from './invalid-iso-8601-week-duration-error';

describe('Invalid ISO 8601 week duration error', () => {
  it('has a correct error name', () => {
    given: 'an invalid ISO 8601 week duration error';
    const error = new InvalidISO8601WeekDurationError('test-message', 'invalid-string');

    expect: 'the error name to be InvalidISO8601WeekDurationError';
    expect(error.name).toBe('InvalidISO8601WeekDurationError');
  });

  it('includes a message and the invalid string', () => {
    given: 'an error message';
    const message = 'test-message';
    and: 'and invalid string';
    const invalidString = 'invalid-string';

    when: 'creating an invalid ISO 8601 week duration error';
    const error = new InvalidISO8601WeekDurationError(message, invalidString);

    expect: 'the message and invalid string to be available';
    expect(error.message).toBe(message);
    expect(error.invalidString).toBe(invalidString);
  });
});
