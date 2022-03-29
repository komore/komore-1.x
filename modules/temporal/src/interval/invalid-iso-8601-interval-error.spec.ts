import { InvalidISO8601IntervalError } from './invalid-iso-8601-interval-error';

describe('Invalid ISO 8601 interval error', () => {
  it('has a correct error name', () => {
    given: 'an invalid ISO 8601 interval error';
    const error = new InvalidISO8601IntervalError('test-message', 'invalid-string');

    expect: 'the error name to be InvalidISO8601WeekDurationError';
    expect(error.name).toBe('InvalidISO8601IntervalError');
  });

  it('includes a message and the invalid string', () => {
    given: 'an error message';
    const message = 'test-message';
    and: 'and invalid string';
    const invalidString = 'invalid-string';

    when: 'creating an invalid ISO 8601 interval error';
    const error = new InvalidISO8601IntervalError(message, invalidString);

    expect: 'the message and invalid string to be available';
    expect(error.message).toBe(message);
    expect(error.invalidString).toBe(invalidString);
  });
});
