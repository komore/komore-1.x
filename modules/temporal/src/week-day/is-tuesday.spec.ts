import { Temporal } from 'proposal-temporal';
import { isTuesday } from './is-tuesday';

describe('Is Tuesday', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-07'), true],
    ['plain date', Temporal.PlainDate.from('2020-01-06'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-07T12:34:56.789'), true],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-06T12:34:56.789'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-07T12:34:56.789[Europe/Paris]'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-06T12:34:56.789[Europe/Paris]'), false]
  ])('can test whether a %s occurs on a Tuesday', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs on a Tuesday';
    const result = isTuesday(temporal);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
