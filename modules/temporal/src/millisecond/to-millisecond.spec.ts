import { Temporal } from 'proposal-temporal';
import { toMillisecond } from './to-millisecond';

describe('To millisecond', () => {
  it.each([
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), 789],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), 789],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), 789]
  ])('can return the millisecond from a %s', (_, temporal, expectedMillisecond) => {
    given: 'a temporal';
    when: 'getting the millisecond';
    const result = toMillisecond(temporal);
    expect: 'the correct millisecond to have been returned';
    expect(result).toBe(expectedMillisecond);
  });
});
