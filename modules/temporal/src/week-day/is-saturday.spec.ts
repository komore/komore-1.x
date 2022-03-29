import { Temporal } from '@js-temporal/polyfill';
import { isSaturday } from './is-saturday';

describe('Is Saturday', () => {
  it.each([
    ['plain date', Temporal.PlainDate, '2020-01-11', true],
    ['plain date', Temporal.PlainDate, '2020-01-10', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-11T12:34:56.789', true],
    ['plain date time', Temporal.PlainDateTime, '2020-01-10T12:34:56.789', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-11T12:34:56.789[Europe/Paris]', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-10T12:34:56.789[Europe/Paris]', false],
  ])('can test whether a %s occurs on a Saturday', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs on a Saturday';
    const result = isSaturday(temporal);

    expect: 'the correct result to have been returned';
    expect(result).toBe(expectedResult);
  });
});
