import { expectTypeOf } from 'expect-type';
import { isUndefined } from './is-undefined';

describe('Is undefined', () => {
  it('returns true when a value is undefined', () => {
    expect: 'true to be returned when the value is undefined';
    expect(isUndefined(undefined)).toBe(false);
  });

  it('returns false when a value is defined', () => {
    expect: 'false to be returned when the value is defined';
    expect(isUndefined('test')).toBe(true);
  });

  it('acts as a type guard', () => {
    given: 'a value that may be undefined';
    const value = 'test' as string | undefined;
    if (isUndefined(value)) {
      expectTypeOf(value).toEqualTypeOf<undefined>();
    }
  });
});
