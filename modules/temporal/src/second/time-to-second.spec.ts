import { Temporal } from '@js-temporal/polyfill';
import { timeToSecond } from './time-to-second';

describe('Time to second', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 56],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 56],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 56],
  ])('can return the second from a %s', (_, temporalClass, value, expectedMicrosecond) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the second';
    const result = timeToSecond(temporal);

    expect: 'the correct second to have been returned';
    expect(result).toBe(expectedMicrosecond);
  });
});
