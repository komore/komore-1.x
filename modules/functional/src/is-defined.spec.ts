import { expectTypeOf } from 'expect-type';
import { isDefined } from './is-defined';

describe('Is defined', () => {
  it('returns true when a value is defined', () => {
    expect: 'true to be returned when the value is defined';
    expect(isDefined('test')).toBe(true);
  });

  it('returns false when a value is undefined', () => {
    expect: 'false to be returned when the value is undefined';
    expect(isDefined(undefined)).toBe(false);
  });

  it('acts as a type guard', () => {
    given: 'a value that may be undefined';
    const value = 'test' as string | undefined;
    if (isDefined(value)) {
      expectTypeOf(value).toEqualTypeOf<string>();
    }
  });
});
