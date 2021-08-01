import { Temporal } from '@js-temporal/polyfill';
import { isSameTimeZone } from './is-same-time-zone';

describe('Is same time zone', () => {
  const tz1 = Temporal.TimeZone.from('Europe/Paris');
  const tz2 = Temporal.TimeZone.from('Europe/London');
  const tz3 = Temporal.TimeZone.from('Europe/Paris');

  it.each([
    [tz1, tz1, true],
    [tz1, tz2, false],
    [tz1, tz3, true]
  ])('can compare time zones', (lhs, rhs, expectedResult) => {
    given: 'time zones';
    when: 'testing whether the time zones are the same';
    const result = isSameTimeZone(lhs, rhs);
    expect: 'true to have been returned when the time zones are the same'
    expect(result).toBe(expectedResult);
  });
});
