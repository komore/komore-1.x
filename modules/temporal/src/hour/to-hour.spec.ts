import { Temporal } from '@js-temporal/polyfill';
import { toHour } from './to-hour';

describe('To hour', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789'), 12],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), 12],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), 12]
  ])('can get the hour from a %s', (_, temporal, expectedHour) => {
    given: 'a temporal';
    when: 'getting the hour';
    const result = toHour(temporal);
    expect: 'the correct hour to have been returned';
    expect(result).toBe(expectedHour);
  });
});
