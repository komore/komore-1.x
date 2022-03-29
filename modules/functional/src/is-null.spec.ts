import { expectTypeOf } from 'expect-type';
import { isNull } from './is-null';

describe('Is null', () => {
  it('returns true when a value is null', () => {
    expect: 'true to be returned when the value is null';
    expect(isNull(null)).toBe(true);
  });

  it('returns false when a value is not null', () => {
    expect: 'false to be returned when the value is not null';
    expect(isNull('test')).toBe(false);
  });

  it('acts as a type guard', () => {
    given: 'a value that may be null';
    const value = 'test' as string | null;
    if (isNull(value)) {
      expectTypeOf(value).toEqualTypeOf<null>();
    }
  });
});
