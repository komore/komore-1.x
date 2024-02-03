import { feature } from '@komore/testing';

import { isBeforeNoon } from './is-before-noon';

feature('Is before noon', () => {
  it.each([
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:34:56.789123456', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T12:00:00.000000000', false],
    ['plain date time', Temporal.PlainDateTime, '2020-01-01T11:59:59.999999999', true],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:34:56.789123456[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T12:00:00.000000000[Europe/Paris]', false],
    ['zoned date time', Temporal.ZonedDateTime, '2020-01-01T11:59:59.999999999[Europe/Paris]', true],
    ['plain time', Temporal.PlainTime, '12:34:56.789123456', false],
    ['plain time', Temporal.PlainTime, '12:00:00.000000000', false],
    ['plain time', Temporal.PlainTime, '11:59:59.999999999', true],
  ])('can test whether a %s occurs before noon', (_, temporalClass, value, expectedResult) => {
    given: 'a temporal';
    const temporal = temporalClass.from(value);

    when: 'testing whether the temporal occurs before noon';
    const result = isBeforeNoon(temporal);

    expect: 'true to be returned when the temporal occurs before noon';
    expect(result).toBe(expectedResult);
  });
});
