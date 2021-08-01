import { Temporal } from '@js-temporal/polyfill';
import { isWednesday } from './is-wednesday';

describe('Is Wednesday', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-08'), true],
    ['plain date', Temporal.PlainDate.from('2020-01-07'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-08T12:34:56.789'), true],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-07T12:34:56.789'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-08T12:34:56.789[Europe/Paris]'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-07T12:34:56.789[Europe/Paris]'), false]
  ])('can test whether a %s occurs on a Wednesday', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs on a Wednesday';
    const result = isWednesday(temporal);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
