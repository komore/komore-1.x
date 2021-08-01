import { Temporal } from '@js-temporal/polyfill';
import { toNanosecond } from './to-nanosecond';

describe('To nanosecond', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), 456],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), 456],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), 456]
  ])('can return the nanosecond from a %s', (_, temporal, expectedMicrosecond) => {
    given: 'a temporal';
    when: 'getting the nanosecond';
    const result = toNanosecond(temporal);
    expect: 'the correct nanosecond to have been returned';
    expect(result).toBe(expectedMicrosecond);
  });
});
