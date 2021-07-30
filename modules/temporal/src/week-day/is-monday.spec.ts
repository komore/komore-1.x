import { Temporal } from 'proposal-temporal';
import { isMonday } from './is-monday';

describe('Is Monday', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-06'), true],
    ['plain date', Temporal.PlainDate.from('2020-01-05'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-06T12:34:56.789'), true],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-05T12:34:56.789'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-06T12:34:56.789[Europe/Paris]'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-05T12:34:56.789[Europe/Paris]'), false]
  ])('can test whether a %s occurs on a Monday', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs on a Monday';
    const result = isMonday(temporal);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
