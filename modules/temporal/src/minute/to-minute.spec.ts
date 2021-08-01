import { Temporal } from '@js-temporal/polyfill';
import { toMinute } from './to-minute';

describe('To minute', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), 34],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), 34],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), 34]
  ])('can return the minute from a %s', (_, temporal, expectedMicrosecond) => {
    given: 'a temporal';
    when: 'getting the minute';
    const result = toMinute(temporal);
    expect: 'the correct minute to have been returned';
    expect(result).toBe(expectedMicrosecond);
  });
});
