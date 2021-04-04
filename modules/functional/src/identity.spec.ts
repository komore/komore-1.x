import { identity } from './identity';

describe('Identity', () => {
  it('returns its argument', () => {
    given: 'an argument';
    const argument = 42;
    when: 'calling identity';
    const result = identity(argument);
    expect: 'the returned value to be the argument';
    expect(result).toBe(argument);
  });
});
