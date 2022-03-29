import { expectTypeOf } from 'expect-type';
import { EmptyError } from './empty-error';

describe('Empty error', () => {
  it('is an error with the correct name and message', () => {
    when: 'creating an empty error';
    const emptyError = new EmptyError();
    expect: 'the name to be EmptyError';
    expect(emptyError.name).toBe('EmptyError');
    expectTypeOf(emptyError.name).toEqualTypeOf('EmptyError');
  });
});
