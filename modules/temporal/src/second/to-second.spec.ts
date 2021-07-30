import { Temporal } from 'proposal-temporal';
import { toSecond } from './to-second';

describe('To second', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), 56],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), 56],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), 56]
  ])('can return the second from a %s', (_, temporal, expectedMicrosecond) => {
    given: 'a temporal';
    when: 'getting the second';
    const result = toSecond(temporal);
    expect: 'the correct second to have been returned';
    expect(result).toBe(expectedMicrosecond);
  });
});
