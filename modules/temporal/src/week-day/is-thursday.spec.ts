import { Temporal } from 'proposal-temporal';
import { isThursday } from './is-thursday';

describe('Is Thursday', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-09'), true],
    ['plain date', Temporal.PlainDate.from('2020-01-08'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-09T12:34:56.789'), true],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-08T12:34:56.789'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-09T12:34:56.789[Europe/Paris]'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-08T12:34:56.789[Europe/Paris]'), false]
  ])('can test whether a %s occurs on a Thursday', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs on a Thursday';
    const result = isThursday(temporal);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
