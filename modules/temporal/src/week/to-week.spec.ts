import { Temporal } from '@js-temporal/polyfill';
import { toWeek } from './to-week';

describe('To week', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-01'), 1],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789'), 1],
    ['zoned date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789[Europe/Paris]'), 1]
  ])('can get the week from a %s', (_, temporal, expectedWeek) => {
    given: 'a temporal';
    when: 'getting the week';
    const result = toWeek(temporal);
    expect: 'the correct week to have been returned';
    expect(result).toBe(expectedWeek);
  });
});
