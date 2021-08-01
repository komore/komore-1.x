import { Temporal } from '@js-temporal/polyfill';
import { isSunday } from './is-sunday';

describe('Is Sunday', () => {
  it.each([
    ['plain date', Temporal.PlainDate.from('2020-01-12'), true],
    ['plain date', Temporal.PlainDate.from('2020-01-11'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-12T12:34:56.789'), true],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-11T12:34:56.789'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-12T12:34:56.789[Europe/Paris]'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-11T12:34:56.789[Europe/Paris]'), false]
  ])('can test whether a %s occurs on a Sunday', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs on a Sunday';
    const result = isSunday(temporal);
    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
