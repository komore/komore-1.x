import { AssertionError } from './assertion-error';

describe('Assertion error', () => {
  it('has the correct name', () => {
    given: 'an assertion error';
    const assertionError = new AssertionError('test');
    expect: 'the name to be AssertionError';
    expect(assertionError.name).toBe('AssertionError');
  });
});
