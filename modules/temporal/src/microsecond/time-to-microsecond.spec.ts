import { Temporal } from '@js-temporal/polyfill';
import { timeToMicrosecond } from './time-to-microsecond';

describe('Time to microsecond', () => {
  it.each([
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', 123],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', 123],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', 123],
  ])('can return the microsecond from a %s', (_, temporalClass, value, expectedMicrosecond) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'getting the microsecond';
    const result = timeToMicrosecond(temporal);

    expect: 'the correct microsecond to have been returned';
    expect(result).toBe(expectedMicrosecond);
  });
});
