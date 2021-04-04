import { expectTypeOf } from 'expect-type';
import { isNotNull } from './is-not-null';

describe('Is not null', () => {
  it('returns true when a value is not null', () => {
    expect: 'true to be returned when the value is not null';
    expect(isNotNull('test')).toBe(true);
  });

  it('returns false when a value is null', () => {
    expect: 'false to be returned when the value is null';
    expect(isNotNull(null)).toBe(false);
  });

  it('acts as a type guard', () => {
    given: 'a value that may be null';
    const value: string | null = 'test';
    if (isNotNull(value)) {
      expectTypeOf(value).toEqualTypeOf<string>();
    }
  });
});
