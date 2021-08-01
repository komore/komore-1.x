import { Temporal } from '@js-temporal/polyfill';
import { isBeforeNoon } from './is-before-noon';

describe('Is before noon', () => {
  it.each([
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:34:56.789123456'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T12:00:00.000000000'), false],
    ['plain date time', Temporal.PlainDateTime.from('2020-01-01T11:59:59.999999999'), true],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:34:56.789123456[Europe/Paris]'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T12:00:00.000000000[Europe/Paris]'), false],
    ['zoned date time', Temporal.ZonedDateTime.from('2020-01-01T11:59:59.999999999[Europe/Paris]'), true],
    ['plain time', Temporal.PlainTime.from('12:34:56.789123456'), false],
    ['plain time', Temporal.PlainTime.from('12:00:00.000000000'), false],
    ['plain time', Temporal.PlainTime.from('11:59:59.999999999'), true]
  ])('can test whether a %s occurs before noon', (_, temporal, expectedResult) => {
    given: 'a temporal';
    when: 'testing whether the temporal occurs before noon';
    const result = isBeforeNoon(temporal);
    expect: 'true to be returned when the temporal occurs before noon';
    expect(result).toBe(expectedResult);
  });
});
