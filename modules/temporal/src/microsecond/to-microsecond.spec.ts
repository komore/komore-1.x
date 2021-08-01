import { Temporal } from '@js-temporal/polyfill';
import { toMicrosecond } from './to-microsecond';

describe('To microsecond', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), 123],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), 123],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), 123]
  ])('can return the microsecond from a %s', (_, temporal, expectedMicrosecond) => {
    given: 'a temporal';
    when: 'getting the microsecond';
    const result = toMicrosecond(temporal);
    expect: 'the correct microsecond to have been returned';
    expect(result).toBe(expectedMicrosecond);
  });
});
